import React from 'react';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { Heart, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onScrollTo: (selector: string) => void;
  onOpenAppointmentModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo, onOpenAppointmentModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#12263a] text-slate-300 pt-14 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#178C88] text-white flex items-center justify-center font-bold text-lg">
                <span className="leading-none text-white font-serif">+</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white leading-tight">
                  {HOSPITAL_INFO.name}
                </span>
                <span className="text-[11px] tracking-wider uppercase text-teal-400 font-medium">
                  {HOSPITAL_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              A modern, fictional healthcare presentation website designed to demonstrate accessible layouts, clear clinical information, and smooth appointment enquiry flows for community healthcare providers.
            </p>

            <div className="inline-block p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300">
              <span className="font-semibold text-teal-400 block mb-0.5">Website Concept Demo</span>
              All doctors, facilities, and contact points are illustrative examples.
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Hospital Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onScrollTo('#home')}
                  className="hover:text-white transition-colors text-left"
                >
                  Home Atrium
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('#about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About Carewell
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('#departments')}
                  className="hover:text-white transition-colors text-left"
                >
                  Medical Departments
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('#doctors')}
                  className="hover:text-white transition-colors text-left"
                >
                  Doctor Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('#facilities')}
                  className="hover:text-white transition-colors text-left"
                >
                  Hospital Facilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('#contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Placeholder Contact Summary */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Placeholder Coordinates
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#178C88] shrink-0 mt-0.5" />
                <span>{HOSPITAL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#178C88] shrink-0" />
                <span>{HOSPITAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#178C88] shrink-0" />
                <span>{HOSPITAL_INFO.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAppointmentModal}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#178C88] hover:bg-[#12706d] transition-colors"
              >
                Launch Appointment Modal
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Carewell Community Hospital · Fictional Website Demonstration
          </div>

          <div className="flex items-center gap-6">
            <span>Portfolio Demo Design</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#178C88]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
