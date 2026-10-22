import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, AlertCircle, Calendar, Clock, User, Phone, Stethoscope, FileText, ShieldCheck, ArrowRight, RotateCcw } from 'lucide-react';
import { DEPARTMENTS, DOCTORS } from '../data/hospitalData';
import { AppointmentFormData, AppointmentSubmissionResult } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDepartment?: string;
  preselectedDoctor?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedDepartment = '',
  preselectedDoctor = ''
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    patientName: '',
    phoneNumber: '',
    department: '',
    preferredDoctor: '',
    preferredDate: '',
    preferredTime: 'Morning (09:00 – 12:00)',
    message: '',
    consent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submissionResult, setSubmissionResult] = useState<AppointmentSubmissionResult | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Sync pre-selections when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        department: preselectedDepartment || prev.department || DEPARTMENTS[0].id,
        preferredDoctor: preselectedDoctor || prev.preferredDoctor
      }));
      setErrors({});
      setSubmissionResult(null);
    }
  }, [isOpen, preselectedDepartment, preselectedDoctor]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Filter doctors matching selected department if any
  const availableDoctors = DOCTORS.filter(doc => !formData.department || doc.departmentId === formData.department);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Patient Name
    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Please enter patient or guardian name';
    } else if (formData.patientName.trim().length < 2) {
      newErrors.patientName = 'Name must be at least 2 characters';
    }

    // Phone number: digits, plus, hyphens, min 10 digits
    const cleanedPhone = formData.phoneNumber.replace(/[^0-9]/g, '');
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required for verification';
    } else if (cleanedPhone.length < 10) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit contact number';
    }

    // Department
    if (!formData.department) {
      newErrors.department = 'Please choose a department';
    }

    // Preferred Date
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred consultation date';
    } else {
      const selected = new Date(formData.preferredDate + 'T00:00:00');
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.preferredDate = 'Preferred date cannot be in the past';
      }
    }

    // Consent
    if (!formData.consent) {
      newErrors.consent = 'You must acknowledge the demo simulation terms to proceed';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate demo reference
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const result: AppointmentSubmissionResult = {
      ...formData,
      referenceId: `CW-DEMO-${randomCode}`,
      submittedAt: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    setSubmissionResult(result);
  };

  const handleReset = () => {
    setFormData({
      patientName: '',
      phoneNumber: '',
      department: DEPARTMENTS[0].id,
      preferredDoctor: '',
      preferredDate: '',
      preferredTime: 'Morning (09:00 – 12:00)',
      message: '',
      consent: false
    });
    setErrors({});
    setSubmissionResult(null);
  };

  const getDeptName = (deptId: string) => {
    const d = DEPARTMENTS.find(item => item.id === deptId);
    return d ? d.name : deptId;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17324D]/60 backdrop-blur-xs transition-opacity overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-xl my-8 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden text-[#25313B] animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header Strip */}
        <div className="bg-[#17324D] px-6 py-5 text-white flex items-center justify-between border-b border-[#17324D]/80">
          <div>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#178C88] bg-[#EAF6F3]/10 px-2.5 py-0.5 rounded-sm">
              Hospital Enquiry Experience
            </span>
            <h2 id="modal-title" className="text-xl font-bold tracking-tight text-white mt-1">
              {submissionResult ? 'Enquiry Summary' : 'Request an Appointment'}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submissionResult ? (
            /* Success State */
            <div className="space-y-6">
              <div className="flex items-start gap-3.5 p-4 bg-[#EAF6F3] rounded-xl border border-[#178C88]/20">
                <CheckCircle2 className="w-6 h-6 text-[#178C88] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-semibold text-[#17324D]">
                    Enquiry Form Submitted Successfully
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    Demo only — no appointment has been booked and no information has been sent. This simulation displays how a patient request is captured and summarized.
                  </p>
                </div>
              </div>

              {/* Summary Card */}
              <div className="p-5 bg-[#F7F9F8] rounded-xl border border-slate-200 space-y-3.5 text-sm">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Enquiry Reference
                  </span>
                  <span className="font-mono font-bold text-[#17324D] text-base">
                    {submissionResult.referenceId}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <span className="text-xs text-slate-500 block">Patient / Guardian</span>
                    <span className="font-medium text-[#17324D]">{submissionResult.patientName}</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Contact Phone</span>
                    <span className="font-medium text-[#17324D]">{submissionResult.phoneNumber}</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Department</span>
                    <span className="font-medium text-[#17324D]">{getDeptName(submissionResult.department)}</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Requested Doctor</span>
                    <span className="font-medium text-[#17324D]">
                      {submissionResult.preferredDoctor || 'Any Available Specialist'}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Preferred Date</span>
                    <span className="font-medium text-[#17324D]">{submissionResult.preferredDate}</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Time Window</span>
                    <span className="font-medium text-[#17324D]">{submissionResult.preferredTime}</span>
                  </div>
                </div>

                {submissionResult.message && (
                  <div className="pt-2 border-t border-slate-200">
                    <span className="text-xs text-slate-500 block">Patient Note</span>
                    <p className="text-xs text-slate-700 italic mt-0.5">"{submissionResult.message}"</p>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Start Another Enquiry
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#17324D] text-white text-sm font-medium hover:bg-[#12263a] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Form Input State */
            <form onSubmit={handleSubmit} className="space-y-4.5" noValidate>
              <div className="text-xs text-slate-500 pb-2 border-b border-slate-100 flex items-center justify-between">
                <span>Please fill in patient details for this sample enquiry.</span>
                <span className="text-red-500">* Required</span>
              </div>

              {/* Patient Name */}
              <div>
                <label htmlFor="patientName" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Patient or Guardian Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="patientName"
                    value={formData.patientName}
                    onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                    placeholder="e.g. Ramesh Kumar or Ananya Sen"
                    className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border bg-white focus:outline-none transition-colors ${
                      errors.patientName ? 'border-red-400 focus:ring-2 focus:ring-red-200' : 'border-slate-300 focus:border-[#178C88] focus:ring-2 focus:ring-[#178C88]/20'
                    }`}
                  />
                </div>
                {errors.patientName && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {errors.patientName}
                  </p>
                )}
              </div>

              {/* Contact Phone */}
              <div>
                <label htmlFor="phoneNumber" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Contact Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="e.g. 98765 43210"
                    className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border bg-white focus:outline-none transition-colors ${
                      errors.phoneNumber ? 'border-red-400 focus:ring-2 focus:ring-red-200' : 'border-slate-300 focus:border-[#178C88] focus:ring-2 focus:ring-[#178C88]/20'
                    }`}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

              {/* Department & Doctor Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="department" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Department <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                    <select
                      id="department"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value, preferredDoctor: '' })}
                      className="w-full pl-10 pr-8 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#178C88] focus:ring-2 focus:ring-[#178C88]/20"
                    >
                      {DEPARTMENTS.map(dept => (
                        <option key={dept.id} value={dept.id}>
                          {dept.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredDoctor" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Doctor (Optional)
                  </label>
                  <select
                    id="preferredDoctor"
                    value={formData.preferredDoctor}
                    onChange={(e) => setFormData({ ...formData, preferredDoctor: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#178C88] focus:ring-2 focus:ring-[#178C88]/20"
                  >
                    <option value="">Any Available Doctor</option>
                    {availableDoctors.map(doc => (
                      <option key={doc.id} value={doc.name}>
                        {doc.name} ({doc.department})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="preferredDate" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="preferredDate"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none transition-colors ${
                        errors.preferredDate ? 'border-red-400 focus:ring-2 focus:ring-red-200' : 'border-slate-300 focus:border-[#178C88] focus:ring-2 focus:ring-[#178C88]/20'
                      }`}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.preferredDate}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Preferred Time Window
                  </label>
                  <select
                    id="preferredTime"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#178C88] focus:ring-2 focus:ring-[#178C88]/20"
                  >
                    <option value="Morning (09:00 – 12:00)">Morning (09:00 – 12:00)</option>
                    <option value="Afternoon (12:00 – 16:00)">Afternoon (12:00 – 16:00)</option>
                    <option value="Evening (16:00 – 19:00)">Evening (16:00 – 19:00)</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Reason for Visit / Short Message (Optional)
                </label>
                <textarea
                  id="message"
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. Routine consultation, follow-up, or general health inquiry..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#178C88] focus:ring-2 focus:ring-[#178C88]/20 resize-none"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded text-[#178C88] border-slate-300 focus:ring-[#178C88]"
                  />
                  <span className="text-xs text-slate-600 leading-normal">
                    I acknowledge that Carewell Community Hospital is a fictional demonstration website. No real appointment will be booked and no personal health data is transmitted to external servers. <span className="text-red-500">*</span>
                  </span>
                </label>
                {errors.consent && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {errors.consent}
                  </p>
                )}
              </div>

              {/* Form Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-[#178C88] hover:bg-[#12706d] rounded-lg shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#178C88] focus-visible:ring-offset-2"
                >
                  Submit Demo Enquiry
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
