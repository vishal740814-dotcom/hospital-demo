import React from 'react';
import { DOCTORS } from '../data/hospitalData';
import { Calendar, UserCheck, Stethoscope, ArrowRight } from 'lucide-react';

interface DoctorDirectoryProps {
  onSelectDoctorForEnquiry: (deptId: string, doctorName: string) => void;
}

export const DoctorDirectory: React.FC<DoctorDirectoryProps> = ({
  onSelectDoctorForEnquiry
}) => {
  return (
    <section id="doctors" className="py-14 sm:py-20 lg:py-24 bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#178C88] mb-2">
            Clinical Team Preview
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#17324D]">
            Doctor Directory
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
            Illustrative physician cards showing how real clinical staff, OPD consultation schedules, and areas of focus can be clearly presented to prospective patients.
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="bg-[#F7F9F8] rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Doctor Portrait Container */}
                <div className="relative aspect-square overflow-hidden bg-slate-200">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  
                  {/* Visible Demo Profile Badge */}
                  <div className="absolute top-3 left-3 bg-[#17324D]/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-xs">
                    DEMO PROFILE
                  </div>

                  {/* Department Tag */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-[#178C88] text-xs font-semibold px-2.5 py-1 rounded shadow-xs">
                    {doc.department}
                  </div>
                </div>

                {/* Doctor Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#17324D] tracking-tight">
                    {doc.name}
                  </h3>
                  <div className="text-xs font-medium text-[#178C88] mt-0.5">
                    Consultant — {doc.department}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/80">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                      Focus Area
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {doc.focusArea}
                    </p>
                  </div>

                  <div className="mt-3 py-2 px-3 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-500">
                    {doc.demoAvailabilityNotice}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => onSelectDoctorForEnquiry(doc.departmentId, doc.name)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-[#178C88] hover:bg-[#12706d] shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#178C88]"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Send Appointment Enquiry</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Disclaimer notice */}
        <div className="mt-10 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          Notice: The names, photographs, and profiles above are fictional representations for website demonstration purposes. No clinical qualifications, medical registrations, or real patient availability are implied.
        </div>

      </div>
    </section>
  );
};
