/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { DepartmentsSection } from './components/DepartmentsSection';
import { DoctorDirectory } from './components/DoctorDirectory';
import { FacilitiesSection } from './components/FacilitiesSection';
import { PatientJourney } from './components/PatientJourney';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { GalleryLightbox } from './components/GalleryLightbox';
import { GALLERY_ITEMS } from './data/hospitalData';

export default function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [selectedDept, setSelectedDept] = useState<string>('');
  const [selectedDoctor, setSelectedDoctor] = useState<string>('');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleOpenAppointment = (deptId = '', doctorName = '') => {
    setSelectedDept(deptId);
    setSelectedDoctor(doctorName);
    setIsAppointmentOpen(true);
  };

  const handleScrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9F8] text-[#25313B]">
      {/* Sticky Top Navigation */}
      <Navbar onOpenAppointmentModal={() => handleOpenAppointment()} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenAppointmentModal={() => handleOpenAppointment()}
          onScrollTo={handleScrollTo}
        />

        {/* About & Emergency Section */}
        <AboutSection
          onOpenAppointmentModal={() => handleOpenAppointment()}
        />

        {/* Departments Section */}
        <DepartmentsSection
          onSelectDepartmentForEnquiry={(deptId) => handleOpenAppointment(deptId)}
        />

        {/* Doctor Directory Section */}
        <DoctorDirectory
          onSelectDoctorForEnquiry={(deptId, docName) => handleOpenAppointment(deptId, docName)}
        />

        {/* Facilities Section */}
        <FacilitiesSection
          onOpenLightbox={(idx) => setLightboxIndex(idx)}
        />

        {/* Patient Journey Section */}
        <PatientJourney
          onOpenAppointmentModal={() => handleOpenAppointment()}
        />

        {/* Gallery Section */}
        <GallerySection
          onOpenLightbox={(idx) => setLightboxIndex(idx)}
        />

        {/* Contact Section */}
        <ContactSection />

        {/* Final CTA Banner */}
        <FinalCTA
          onOpenAppointmentModal={() => handleOpenAppointment()}
          onScrollTo={handleScrollTo}
        />
      </main>

      {/* Footer */}
      <Footer
        onScrollTo={handleScrollTo}
        onOpenAppointmentModal={() => handleOpenAppointment()}
      />

      {/* Interactive Appointment Enquiry Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        preselectedDepartment={selectedDept}
        preselectedDoctor={selectedDoctor}
      />

      {/* Interactive Fullscreen Gallery Lightbox */}
      <GalleryLightbox
        items={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
}
