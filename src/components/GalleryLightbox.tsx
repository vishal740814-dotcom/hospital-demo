import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate
}) => {
  const isOpen = currentIndex !== null;
  const currentItem = isOpen ? items[currentIndex] : null;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % items.length);
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#17324D]/90 backdrop-blur-md p-4 transition-all"
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Gallery"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top action bar */}
      <div className="absolute top-4 inset-x-4 md:inset-x-8 flex items-center justify-between text-white z-10">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-[#178C88] bg-white/10 px-2.5 py-1 rounded-sm">
            Demo Gallery
          </span>
          <span className="text-sm text-slate-300 font-mono">
            {currentIndex + 1} / {items.length}
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
        className="absolute left-3 md:left-6 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors z-10"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => onNavigate((currentIndex + 1) % items.length)}
        className="absolute right-3 md:right-6 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors z-10"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main image container */}
      <div className="max-w-4xl w-full flex flex-col items-center">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black max-h-[72vh] flex items-center justify-center">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[72vh] w-auto object-contain select-none"
          />
          <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white/80 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded">
            Fictional Demo Imagery
          </div>
        </div>

        {/* Caption */}
        <div className="mt-4 text-center max-w-xl text-white">
          <h3 className="text-lg font-semibold text-white tracking-tight">
            {currentItem.title}
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            {currentItem.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
