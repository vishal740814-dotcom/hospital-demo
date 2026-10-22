import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

interface FinalCTAProps {
  onOpenAppointmentModal: () => void;
  onScrollTo: (selector: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenAppointmentModal, onScrollTo }) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#17324D] text-white relative overflow-hidden">
      {/* Subtle decorative circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#178C88]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#178C88]/15 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Top small label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#EAF6F3] mb-6">
          <HeartHandshake className="w-3.5 h-3.5 text-[#178C88]" />
          <span>Patient-Centered Community Care</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight [text-wrap:balance]">
          Your Next Step Starts with Clear Information.
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Whether you need a routine health review, a consultation with a specialist, or guidance on our facilities, Carewell is here to support you.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenAppointmentModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-[#178C88] hover:bg-[#12706d] active:scale-[0.99] shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#178C88] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17324D]"
          >
            <Calendar className="w-4 h-4" />
            Request an Appointment
          </button>

          <button
            onClick={() => onScrollTo('#departments')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Explore Departments
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Reminder disclaimer */}
        <div className="mt-8 text-xs text-slate-400">
          Carewell Community Hospital website demo · Fictional clinical showcase
        </div>

      </div>
    </section>
  );
};
