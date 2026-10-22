import React from 'react';
import { PATIENT_STEPS } from '../data/hospitalData';
import { ArrowRight, Calendar } from 'lucide-react';

interface PatientJourneyProps {
  onOpenAppointmentModal: () => void;
}

export const PatientJourney: React.FC<PatientJourneyProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#178C88] mb-2">
            Patient Experience Flow
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#17324D]">
            How Enquiry Works
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
            A simple, four-step journey designed to replace stressful phone queues with structured, clear communication.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PATIENT_STEPS.map((item, index) => (
            <div
              key={item.step}
              className="p-6 rounded-2xl bg-[#F7F9F8] border border-slate-200/80 shadow-xs hover:border-[#178C88]/30 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Step Number */}
                <div className="text-3xl font-extrabold text-[#178C88]/30 font-mono mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#17324D] tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 text-[11px] text-slate-400">
                Step {index + 1} of 4
              </div>
            </div>
          ))}
        </div>

        {/* Clarification Notice */}
        <div className="mt-10 p-4.5 rounded-xl bg-[#EAF6F3]/50 border border-[#178C88]/20 max-w-2xl mx-auto text-center">
          <p className="text-xs text-slate-600 leading-relaxed">
            <span className="font-semibold text-[#17324D]">Notice:</span> In this demo, sending an enquiry triggers an instant on-screen confirmation summary to simulate the workflow. No real appointments are scheduled.
          </p>
          <div className="mt-3">
            <button
              onClick={onOpenAppointmentModal}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#178C88] hover:text-[#12706d] transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              Test the enquiry form now
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
