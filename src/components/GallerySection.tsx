import React from 'react';
import { GALLERY_ITEMS } from '../data/hospitalData';
import { Eye, Image as ImageIcon } from 'lucide-react';

interface GallerySectionProps {
  onOpenLightbox: (index: number) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#F7F9F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#178C88] mb-2">
              Visual Environment
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#17324D]">
              Healthcare Facility Gallery
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
              Explore illustrative healthcare photography showcasing clean clinic spaces, welcoming waiting areas, and gentle architectural lighting. Click any image to view in fullscreen.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 bg-white px-3 py-2 rounded-lg border border-slate-200">
            <ImageIcon className="w-4 h-4 text-[#178C88]" />
            <span>Interactive Lightbox Enabled</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(index)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay hover cue */}
                <div className="absolute inset-0 bg-[#17324D]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-[#17324D] flex items-center justify-center shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Demo label */}
                <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[9px] uppercase tracking-wider px-2 py-0.5 rounded">
                  Illustrative Demo
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#178C88] block">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-bold text-[#17324D] mt-1 group-hover:text-[#178C88] transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>
                <div className="mt-3 text-[11px] text-slate-400">
                  Tap to view details
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
