import React, { useState } from 'react';
import { Phone, Mail, MapPin, Copy, Check, ExternalLink, Send, Clock, HelpCircle, Navigation } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [showSimulatedMap, setShowSimulatedMap] = useState(false);
  const [contactNote, setContactNote] = useState({ name: '', email: '', message: '' });
  const [noteStatus, setNoteStatus] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const handleNoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactNote.name.trim() || !contactNote.message.trim()) return;
    setNoteStatus('sent');
    setTimeout(() => {
      setNoteStatus(null);
      setContactNote({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-24 bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#178C88] mb-2">
            Reach Out
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#17324D]">
            Contact & Directions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
            All contact numbers, physical addresses, and electronic mail coordinates displayed below are fictional placeholders configured for this website demonstration.
          </p>
        </div>

        {/* Main Grid: Contact Cards & Quick Note */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Phone Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F7F9F8] border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#EAF6F3] text-[#178C88] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Telephone Helpline
                    </span>
                    <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-medium">
                      Placeholder
                    </span>
                  </div>
                  <div className="text-lg font-bold text-[#17324D] mt-0.5">
                    {HOSPITAL_INFO.phone}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {HOSPITAL_INFO.workingHours}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200">
                <a
                  href={`tel:${HOSPITAL_INFO.phone}`}
                  className="px-3.5 py-2 text-xs font-semibold text-white bg-[#178C88] hover:bg-[#12706d] rounded-lg transition-colors shadow-xs"
                >
                  Call Now
                </a>
                <button
                  onClick={() => handleCopy(HOSPITAL_INFO.phone, 'phone')}
                  className="p-2 text-slate-600 hover:text-[#17324D] hover:bg-slate-200/60 rounded-lg transition-colors"
                  title="Copy Phone Number"
                  aria-label="Copy Phone Number"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F7F9F8] border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#EAF6F3] text-[#178C88] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      General Email Enquiries
                    </span>
                    <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-medium">
                      Placeholder
                    </span>
                  </div>
                  <div className="text-lg font-bold text-[#17324D] mt-0.5 break-all">
                    {HOSPITAL_INFO.email}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    For OPD queries, feedback, and demo requests
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200">
                <a
                  href={`mailto:${HOSPITAL_INFO.email}`}
                  className="px-3.5 py-2 text-xs font-semibold text-[#17324D] bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  Email
                </a>
                <button
                  onClick={() => handleCopy(HOSPITAL_INFO.email, 'email')}
                  className="p-2 text-slate-600 hover:text-[#17324D] hover:bg-slate-200/60 rounded-lg transition-colors"
                  title="Copy Email"
                  aria-label="Copy Email"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Physical Location Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F7F9F8] border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#EAF6F3] text-[#178C88] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Physical Facility Address
                    </span>
                    <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-medium">
                      Placeholder
                    </span>
                  </div>
                  <div className="text-base font-bold text-[#17324D] mt-0.5">
                    {HOSPITAL_INFO.address}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Replace with your hospital's registered street address
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200">
                <button
                  onClick={() => setShowSimulatedMap(!showSimulatedMap)}
                  className="px-3.5 py-2 text-xs font-semibold text-[#17324D] bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {showSimulatedMap ? 'Hide Schematic' : 'View Location'}
                </button>
                <button
                  onClick={() => handleCopy(HOSPITAL_INFO.address, 'address')}
                  className="p-2 text-slate-600 hover:text-[#17324D] hover:bg-slate-200/60 rounded-lg transition-colors"
                  title="Copy Address"
                  aria-label="Copy Address"
                >
                  {copiedField === 'address' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Simulated Schematic Map Preview (when toggled) */}
            {showSimulatedMap && (
              <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-inner animate-in fade-in duration-200">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-[#178C88]" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Simulated Map View & Access Route
                    </span>
                  </div>
                  <span className="text-[10px] text-amber-400 font-medium">
                    Demo Schematic
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  In a production release for your hospital, this section integrates your verified Google Maps location embed, transit directions, wheelchair accessibility drop-off points, and dedicated patient parking signage.
                </p>
                <div className="mt-4 p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-slate-200 block">
                      Demo Road, Sector 4, Civic Area
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Near Central Garden & Ring Road Transit
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#178C88]">
                    Accessible Entrance
                  </span>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Interactive General Enquiry Box */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#F7F9F8] border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-4 h-4 text-[#178C88]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#17324D]">
                  Demo General Enquiry
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#17324D]">
                Have a Quick Question?
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Test the client enquiry message box. Simulated response in local state.
              </p>

              {noteStatus === 'sent' ? (
                <div className="mt-6 p-4 rounded-xl bg-[#EAF6F3] border border-[#178C88]/30 text-xs text-slate-700 space-y-1 animate-in fade-in">
                  <span className="font-bold text-[#17324D] block">
                    Message Sent (Demo Mode)
                  </span>
                  <p>
                    Thank you! Your simulated query has been recorded in the local demo state. In a real hospital deployment, this routes to the administration desk.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleNoteSubmit} className="mt-5 space-y-3.5">
                  <div>
                    <label htmlFor="contactName" className="block text-[11px] font-semibold uppercase tracking-wider text-slate-600 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      required
                      value={contactNote.name}
                      onChange={(e) => setContactNote({ ...contactNote, name: e.target.value })}
                      placeholder="e.g. Priyanshu Das"
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#178C88] focus:ring-1 focus:ring-[#178C88]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail" className="block text-[11px] font-semibold uppercase tracking-wider text-slate-600 mb-1">
                      Email or Phone
                    </label>
                    <input
                      type="text"
                      id="contactEmail"
                      value={contactNote.email}
                      onChange={(e) => setContactNote({ ...contactNote, email: e.target.value })}
                      placeholder="e.g. name@example.com or 98765..."
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#178C88] focus:ring-1 focus:ring-[#178C88]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMsg" className="block text-[11px] font-semibold uppercase tracking-wider text-slate-600 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="contactMsg"
                      required
                      rows={3}
                      value={contactNote.message}
                      onChange={(e) => setContactNote({ ...contactNote, message: e.target.value })}
                      placeholder="Inquire about hospital timings, visiting hours, or department questions..."
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#178C88] focus:ring-1 focus:ring-[#178C88] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#17324D] hover:bg-[#12263a] rounded-lg transition-colors shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Submit Test Message
                  </button>
                </form>
              )}

              <div className="mt-4 text-[11px] text-slate-400 text-center">
                Local React state only · No external transmission
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
