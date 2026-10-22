import React from 'react';
import { FACILITIES } from '../data/hospitalData';
import { Check, Eye, Building2 } from 'lucide-react';

interface FacilitiesSectionProps {
  onOpenLightbox: (index: number) => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ onOpenLightbox }) => {
  return (
    <section id="facilities" className="py-14 sm:py-20 lg:py-24 bg-[#F7F9F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#178C88] mb-2">
            Environment & Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#17324D]">
            Hospital Facilities
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
            Illustrative sample spaces showing how patient amenities, quiet consultation suites, and welcoming reception areas can be highlighted on a community hospital website.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FACILITIES.map((facility, index) => (
            <div
              key={facility.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col group"
            >
              {/* Facility Image with Demo Tag */}
              <div
                className="relative aspect-16/9 overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => onOpenLightbox(index % 4)}
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
                
                {/* Overlay Tag */}
                <div className="absolute top-3 left-3 bg-[#17324D]/90 backdrop-blur-xs text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
                  Illustrative Demo Imagery
                </div>

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 text-xs font-medium backdrop-blur-xs">
                    <Eye className="w-3.5 h-3.5" />
                    Enlarge Image
                  </span>
                </div>
              </div>

              {/* Facility Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#17324D] tracking-tight">
                    {facility.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {facility.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                    {facility.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-[#178C88] shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
                  Concept display — not an actual physical hospital premise.
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
