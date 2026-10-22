import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, ArrowUpRight } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface NavbarProps {
  onOpenAppointmentModal: (deptId?: string, doctorName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointmentModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Departments', href: '#departments' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Demo Notification Strip */}
      <div className="bg-[#17324D] text-[#EAF6F3] text-[11px] py-1.5 px-4 font-medium tracking-wide border-b border-[#17324D]/60 select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="uppercase tracking-widest text-[#178C88] font-bold text-[10px]">
              WEBSITE DEMO
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="truncate">Carewell Community Hospital — Fictional healthcare concept demonstration</span>
          </div>
          <div className="hidden md:flex items-center gap-4 shrink-0 text-slate-300">
            <span>Enquiries: {HOSPITAL_INFO.phone}</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-100 py-3.5'
            : 'bg-white/70 backdrop-blur-xs py-4.5 border-b border-slate-200/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#178C88] rounded-md"
            >
              <div className="w-8 h-8 rounded-lg bg-[#178C88] text-white flex items-center justify-center font-bold text-lg shadow-xs group-hover:bg-[#12706d] transition-colors">
                <span className="leading-none text-white font-serif">+</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight text-[#17324D] leading-tight">
                  Carewell
                </span>
                <span className="text-[10px] tracking-wider uppercase text-slate-500 font-medium">
                  Community Hospital
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="hover:text-[#178C88] transition-colors whitespace-nowrap shrink-0 relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#178C88] rounded"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action & Mobile Hamburger */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenAppointmentModal()}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold text-white bg-[#178C88] hover:bg-[#12706d] active:scale-[0.98] rounded-lg shadow-xs transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#178C88] focus-visible:ring-offset-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book an Appointment
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-700 hover:text-[#178C88] rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#178C88]"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-1.5 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:text-[#178C88] hover:bg-[#EAF6F3]/50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointmentModal();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#178C88] hover:bg-[#12706d] rounded-lg shadow-xs transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Book an Appointment
              </button>
              <div className="text-center pt-2">
                <span className="text-xs text-slate-500">
                  Enquiries: {HOSPITAL_INFO.phone}
                </span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
