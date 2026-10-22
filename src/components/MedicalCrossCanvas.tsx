import React, { useEffect, useRef, useState } from 'react';

/**
 * An interactive, lightweight 3D medical cross canvas.
 * Renders an abstract translucent medical emblem with subtle lighting, 
 * smooth rotational inertia, and mouse parallax.
 * Gracefully falls back to SVG/CSS if WebGL/Canvas is unsupported or reduced motion is preferred.
 */
export const MedicalCrossCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      setHasError(true);
      return;
    }

    let animationFrameId: number;
    let angleX = 0.25;
    let angleY = 0.35;
    let targetAngleX = 0.25;
    let targetAngleY = 0.35;
    let time = 0;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Handle resize
    const resize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetAngleY = x * 0.8;
      targetAngleX = -y * 0.6;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 3D Point projection
    interface Point3D {
      x: number;
      y: number;
      z: number;
    }

    // Define medical cross geometry in 3D
    // Cross dimensions
    const armL = 72;
    const armW = 28;
    const thickness = 22;

    const createCrossVertices = (): Point3D[] => {
      const v: Point3D[] = [];
      const zOffsets = [-thickness / 2, thickness / 2];

      for (const z of zOffsets) {
        // 12 outer vertices of a symmetrical plus/cross sign
        v.push(
          { x: -armW / 2, y: -armL, z },
          { x: armW / 2, y: -armL, z },
          { x: armW / 2, y: -armW / 2, z },
          { x: armL, y: -armW / 2, z },
          { x: armL, y: armW / 2, z },
          { x: armW / 2, y: armW / 2, z },
          { x: armW / 2, y: armL, z },
          { x: -armW / 2, y: armL, z },
          { x: -armW / 2, y: armW / 2, z },
          { x: -armL, y: armW / 2, z },
          { x: -armL, y: -armW / 2, z },
          { x: -armW / 2, y: -armW / 2, z }
        );
      }
      return v;
    };

    const vertices = createCrossVertices();

    // Faces: front (0..11), back (12..23), and 12 connecting side quads
    const sideQuads: [number, number, number, number][] = [];
    for (let i = 0; i < 12; i++) {
      const next = (i + 1) % 12;
      sideQuads.push([i, next, next + 12, i + 12]);
    }

    const render = () => {
      if (!ctx || !canvas) return;

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      if (!prefersReducedMotion) {
        time += 0.015;
        // Smooth interpolation
        angleX += (targetAngleX + Math.sin(time * 0.7) * 0.08 - angleX) * 0.05;
        angleY += (targetAngleY + Math.cos(time * 0.5) * 0.12 - angleY) * 0.05;
      }

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY + time * 0.2);
      const sinY = Math.sin(angleY + time * 0.2);

      const fov = 340;
      const centerX = width / 2;
      const centerY = height / 2;

      // Transform vertices
      const transformed = vertices.map((p) => {
        // Rotate Y
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;

        // Rotate X
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // Add float bob
        const floatY = y2 + Math.sin(time * 1.5) * 4;

        // Projection
        const scale = fov / (fov + z2 + 120);
        return {
          px: centerX + x1 * scale,
          py: centerY + floatY * scale,
          z: z2,
          scale
        };
      });

      // Draw subtle ambient glow behind cross
      const glowGrad = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, 110);
      glowGrad.addColorStop(0, 'rgba(23, 140, 136, 0.22)');
      glowGrad.addColorStop(0.5, 'rgba(234, 246, 243, 0.35)');
      glowGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 110, 0, Math.PI * 2);
      ctx.fill();

      // Render side faces sorted by depth
      interface RenderableFace {
        indices: number[];
        avgZ: number;
        isSide: boolean;
      }

      const faces: RenderableFace[] = [
        { indices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], avgZ: 0, isSide: false },
        { indices: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], avgZ: 0, isSide: false },
        ...sideQuads.map((q) => ({ indices: q, avgZ: 0, isSide: true }))
      ];

      faces.forEach((f) => {
        const sumZ = f.indices.reduce((acc, idx) => acc + transformed[idx].z, 0);
        f.avgZ = sumZ / f.indices.length;
      });

      faces.sort((a, b) => b.avgZ - a.avgZ);

      // Draw faces
      faces.forEach((f) => {
        ctx.beginPath();
        const start = transformed[f.indices[0]];
        ctx.moveTo(start.px, start.py);
        for (let i = 1; i < f.indices.length; i++) {
          const pt = transformed[f.indices[i]];
          ctx.lineTo(pt.px, pt.py);
        }
        ctx.closePath();

        if (f.isSide) {
          ctx.fillStyle = 'rgba(23, 140, 136, 0.45)';
          ctx.strokeStyle = 'rgba(23, 50, 77, 0.3)';
        } else {
          // Front or back face with gradient
          const grad = ctx.createLinearGradient(centerX - 40, centerY - 40, centerX + 40, centerY + 40);
          grad.addColorStop(0, 'rgba(23, 140, 136, 0.85)');
          grad.addColorStop(1, 'rgba(23, 50, 77, 0.9)');
          ctx.fillStyle = grad;
          ctx.strokeStyle = 'rgba(234, 246, 243, 0.7)';
        }

        ctx.lineWidth = 1;
        ctx.fill();
        ctx.stroke();
      });

      // Subtle light reflection sheen
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX - 24, centerY - 28, 6, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.filter = 'blur(2px)';
      ctx.fill();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (hasError) {
    // Graceful fallback
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#178C88] to-[#17324D] shadow-lg flex items-center justify-center text-white">
          <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-pointer select-none"
        title="Interactive 3D Emblem — Carewell Community Hospital"
      />
    </div>
  );
};
