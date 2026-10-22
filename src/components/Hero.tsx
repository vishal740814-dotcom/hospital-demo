import React from 'react';
import { ArrowRight, Calendar, Stethoscope, Users, MapPin, Sparkles, Shield, HeartHandshake } from 'lucide-react';
import { MedicalCrossCanvas } from './MedicalCrossCanvas';

interface HeroProps {
  onOpenAppointmentModal: () => void;
  onScrollTo: (selector: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointmentModal, onScrollTo }) => {
  return (
    <section id="home" className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pb-24">
      {/* Background Decorative Mesh Tint */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#EAF6F3] rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute top-1/2 left-0 -z-10 w-80 h-80 bg-teal-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Proposition & Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            {/* Demo Indicator Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EAF6F3] border border-[#178C88]/20 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#178C88]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#17324D]">
                COMMUNITY HEALTHCARE WEBSITE DEMO
              </span>
            </div>

            {/* Oversized Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#17324D] leading-[1.12] [text-wrap:balance]">
              Better Care.{' '}
              <span className="text-[#178C88]">Closer to Home.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Explore services, discover departments, and send an appointment enquiry. A calm, modern healthcare website concept built for local hospitals and nursing facilities.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenAppointmentModal}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#178C88] hover:bg-[#12706d] active:scale-[0.99] rounded-xl shadow-md hover:shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#178C88] focus-visible:ring-offset-2"
              >
                <Calendar className="w-4 h-4" />
                Request an Appointment
              </button>

              <button
                onClick={() => onScrollTo('#departments')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-[#17324D] bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17324D]"
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            {/* Trust Markers Strip */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#178C88]" />
                <span>Patient-First Concept</span>
              </div>
              <div className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-[#178C88]" />
                <span>Clear Department Navigation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#178C88]" />
                <span>Interactive Enquiry Simulation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Imagery & 3D Interactive Canvas */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Interior Photography Panel */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-white aspect-4/3 sm:aspect-5/4">
                <img
                  src="/src/assets/images/hero_hospital_interior_1792643163032.jpg"
                  alt="Carewell Community Hospital bright reception atrium"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                />
                
                {/* Subtle Gradient Scrim at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#17324D]/80 via-[#17324D]/30 to-transparent p-4 flex flex-col justify-end text-white">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-[#EAF6F3]/90">
                    Hospital Main Atrium
                  </span>
                  <p className="text-xs text-slate-200">
                    Illustrative sample environment demonstrating patient-friendly interior design.
                  </p>
                </div>
              </div>

              {/* Floating 3D Medical Cross Accent Canvas */}
              <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-white/90 backdrop-blur-md p-1.5 shadow-xl border border-slate-100 hidden sm:block">
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <MedicalCrossCanvas className="w-full h-full" />
                </div>
                <div className="text-[9px] text-center font-medium text-slate-500 mt-1 uppercase tracking-wider">
                  Carewell 3D Emblem
                </div>
              </div>

              {/* Patient Care Reassurance Card */}
              <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-lg border border-slate-200/70 max-w-[220px]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#EAF6F3] text-[#178C88] flex items-center justify-center shrink-0">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#17324D]">Prompt Enquiries</div>
                    <div className="text-[10px] text-slate-500">Same-day review workflow</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Quick Actions Row (4 attractive cards) */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200/80">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
            Quick Actions
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Action 1: Appointments */}
            <button
              onClick={onOpenAppointmentModal}
              className="text-left p-4.5 bg-white rounded-xl border border-slate-200 hover:border-[#178C88]/50 hover:shadow-md transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#178C88]"
            >
              <div className="w-10 h-10 rounded-lg bg-[#EAF6F3] text-[#178C88] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#17324D] group-hover:text-[#178C88] transition-colors flex items-center justify-between">
                Appointments
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Request a sample consultation slot with a specialist.
              </p>
            </button>

            {/* Action 2: Departments */}
            <button
              onClick={() => onScrollTo('#departments')}
              className="text-left p-4.5 bg-white rounded-xl border border-slate-200 hover:border-[#178C88]/50 hover:shadow-md transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#178C88]"
            >
              <div className="w-10 h-10 rounded-lg bg-[#EAF6F3] text-[#178C88] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#17324D] group-hover:text-[#178C88] transition-colors flex items-center justify-between">
                Departments
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Browse our 6 illustrative healthcare specialty divisions.
              </p>
            </button>

            {/* Action 3: Doctor Directory */}
            <button
              onClick={() => onScrollTo('#doctors')}
              className="text-left p-4.5 bg-white rounded-xl border border-slate-200 hover:border-[#178C88]/50 hover:shadow-md transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#178C88]"
            >
              <div className="w-10 h-10 rounded-lg bg-[#EAF6F3] text-[#178C88] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#17324D] group-hover:text-[#178C88] transition-colors flex items-center justify-between">
                Doctor Directory
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Meet our sample physicians across core medical disciplines.
              </p>
            </button>

            {/* Action 4: Contact & Directions */}
            <button
              onClick={() => onScrollTo('#contact')}
              className="text-left p-4.5 bg-white rounded-xl border border-slate-200 hover:border-[#178C88]/50 hover:shadow-md transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#178C88]"
            >
              <div className="w-10 h-10 rounded-lg bg-[#EAF6F3] text-[#178C88] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#17324D] group-hover:text-[#178C88] transition-colors flex items-center justify-between">
                Contact & Directions
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                View placeholder phone numbers, map search, and address.
              </p>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};
