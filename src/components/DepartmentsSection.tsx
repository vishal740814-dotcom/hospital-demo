import React from 'react';
import { Stethoscope, Baby, HeartHandshake, Activity, Microscope, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { DEPARTMENTS } from '../data/hospitalData';

interface DepartmentsSectionProps {
  onSelectDepartmentForEnquiry: (deptId: string) => void;
}

export const DepartmentsSection: React.FC<DepartmentsSectionProps> = ({
  onSelectDepartmentForEnquiry
}) => {
  // Map icon strings to Lucide icon components
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-[#178C88]" />;
      case 'Baby':
        return <Baby className="w-6 h-6 text-[#178C88]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#178C88]" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#178C88]" />;
      case 'Microscope':
        return <Microscope className="w-6 h-6 text-[#178C88]" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-6 h-6 text-[#178C88]" />;
    }
  };

  return (
    <section id="departments" className="py-14 sm:py-20 lg:py-24 bg-[#F7F9F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#178C88] mb-2">
              Clinical Specialities
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#17324D]">
              Hospital Departments
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
              Illustrative demo content representing community healthcare services. Click any department to begin an appointment enquiry with the specialty prefilled.
            </p>
          </div>

          <div className="text-xs text-slate-500 bg-white px-3.5 py-2 rounded-lg border border-slate-200 self-start md:self-auto">
            <span>Notice: Sample divisions for demonstration purposes</span>
          </div>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DEPARTMENTS.map((dept) => (
            <div
              key={dept.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:border-[#178C88]/40 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Icon & Sample Availability */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF6F3] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {renderIcon(dept.iconName)}
                  </div>
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100/80 px-2.5 py-1 rounded-md">
                    OPD: {dept.sampleAvailability}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#17324D] tracking-tight group-hover:text-[#178C88] transition-colors">
                  {dept.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {dept.description}
                </p>

                {/* Sample Key Services List */}
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                    Sample Clinical Scope
                  </span>
                  {dept.keyServices.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-[#178C88] shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onSelectDepartmentForEnquiry(dept.id)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-[#17324D] bg-[#EAF6F3] hover:bg-[#178C88] hover:text-white transition-all group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#178C88]"
                >
                  <span>Enquire About This Service</span>
                  <ArrowRight className="w-4 h-4 text-[#178C88] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Disclaimer Footer for Departments */}
        <div className="mt-8 text-center text-xs text-slate-400">
          All department listings, schedules, and clinical descriptions shown above are sample demonstrations for client review.
        </div>

      </div>
    </section>
  );
};
