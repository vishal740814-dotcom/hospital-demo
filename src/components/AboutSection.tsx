import React from 'react';
import { AlertTriangle, Heart, Compass, Accessibility, PhoneCall, ShieldAlert, ArrowRight } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface AboutSectionProps {
  onOpenAppointmentModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Emergency Information Box */}
        <div className="mb-14 sm:mb-16 p-4 sm:p-5 rounded-2xl bg-[#FFF9F5] border border-amber-200/80 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-amber-100 text-amber-800 shrink-0 mt-0.5">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                    Emergency Advisory Notice
                  </span>
                  <span className="text-[11px] text-amber-700 font-medium">· Demo Disclaimer</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-950 font-medium mt-1 leading-relaxed">
                  If you have a medical emergency, contact your local emergency services (112 / 108 / 911) or visit the nearest appropriate emergency facility immediately.
                </p>
                <p className="text-[11px] text-amber-800/90 mt-0.5">
                  Carewell Community Hospital is a fictional demonstration website and does not provide active emergency response or medical triage services.
                </p>
              </div>
            </div>

            <a
              href="tel:112"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-amber-900 bg-amber-200/60 hover:bg-amber-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Dial Emergency: 112 / 108
            </a>
          </div>
        </div>

        {/* About Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#178C88] mb-2">
            Hospital Philosophy & Purpose
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#17324D] leading-tight">
            Care Built Around People.
          </h2>
          <p className="text-base text-slate-600 mt-3.5 leading-relaxed">
            Carewell Community Hospital is a fictional healthcare website concept created to demonstrate how small community hospitals and nursing care centers can present clear medical information, accessible provider directories, and a streamlined appointment enquiry experience.
          </p>
        </div>

        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Core Values */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              When seeking local healthcare, patients and families prioritize reassurance, simple navigation, and transparent communication. This demonstration embodies these principles through three core values:
            </p>

            <div className="space-y-6">
              {/* Value 1: Compassion */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F7F9F8] border border-slate-200/80 hover:border-[#178C88]/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#EAF6F3] text-[#178C88] flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#17324D]">
                    Compassion
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Designed around patient peace of mind. Thoughtful layouts reduce visual stress, presenting essential services with empathy, clear instructions, and respectful guidance.
                  </p>
                </div>
              </div>

              {/* Value 2: Clarity */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F7F9F8] border border-slate-200/80 hover:border-[#178C88]/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#EAF6F3] text-[#178C88] flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#17324D]">
                    Clarity
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Transparent department overviews and transparent expectations. No clinical jargon, ambiguous terms, or confusing appointment paths.
                  </p>
                </div>
              </div>

              {/* Value 3: Accessibility */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F7F9F8] border border-slate-200/80 hover:border-[#178C88]/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#EAF6F3] text-[#178C88] flex items-center justify-center shrink-0 mt-0.5">
                  <Accessibility className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#17324D]">
                    Accessibility
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    A responsive, high-contrast, keyboard-navigable experience optimized for smartphones, tablets, and screen readers, ensuring equal access for all community members.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAppointmentModal}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#178C88] hover:text-[#12706d] transition-colors group"
              >
                Experience the sample appointment workflow
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: High-Quality Consultation Imagery with Trust Callout */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 aspect-4/3">
              <img
                src="/src/assets/images/facility_consultation_suite_1792643165719.jpg"
                alt="Sample Doctor Consultation Room"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[10px] font-semibold tracking-wider uppercase text-slate-700 px-2.5 py-1 rounded-md shadow-xs">
                Illustrative Suite
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#EAF6F3]/70 border border-[#178C88]/20 text-xs text-slate-600 leading-relaxed">
              <span className="font-semibold text-[#17324D] block mb-1">
                Notice for Hospital Administrators & Stakeholders:
              </span>
              This demo showcases how your hospital's actual services, clinical leadership, registered credentials, and patient testimonials can be highlighted without clutter or template fatigue.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
