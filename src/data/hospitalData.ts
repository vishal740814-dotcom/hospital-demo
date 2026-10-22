import { Department, Doctor, Facility, GalleryItem } from '../types';

export const HOSPITAL_INFO = {
  name: 'Carewell Community Hospital',
  tagline: 'Compassionate Care. Closer to Home.',
  demoNotice: 'Fictional hospital website demo. Created for showcase and presentation purposes.',
  phone: '+91 90000 00000',
  address: 'Demo Road, Your City, India',
  email: 'hello@carewell-demo.example',
  workingHours: 'Mon – Sat: 8:00 AM – 8:00 PM (OPD Enquiries)',
  emergencyNotice: 'If you have a medical emergency, contact your local emergency services (112 / 108 / 911) or visit the nearest acute emergency facility immediately. This demo does not provide emergency dispatch.'
};

export const DEPARTMENTS: Department[] = [
  {
    id: 'general-medicine',
    name: 'General Medicine',
    description: 'Comprehensive primary care, chronic condition management, and diagnostic reviews for adults of all ages.',
    iconName: 'Stethoscope',
    keyServices: ['Primary consultations', 'Routine health check-ups', 'Chronic illness reviews'],
    sampleAvailability: 'Mon – Sat'
  },
  {
    id: 'paediatrics',
    name: 'Paediatrics',
    description: 'Gentle, child-centered care supporting infant development, childhood well-being, and preventive health guidance.',
    iconName: 'Baby',
    keyServices: ['Growth & development checkups', 'Paediatric consultations', 'Childhood nutrition guidance'],
    sampleAvailability: 'Mon – Fri'
  },
  {
    id: 'maternity-womens-health',
    name: 'Maternity & Women’s Health',
    description: 'Supportive healthcare for women across all life stages, focusing on prenatal consultations and routine screenings.',
    iconName: 'HeartHandshake',
    keyServices: ['Pre-conception counselling', 'Routine antenatal checkups', 'Well-woman screenings'],
    sampleAvailability: 'Mon – Sat'
  },
  {
    id: 'orthopaedics',
    name: 'Orthopaedics',
    description: 'Care for musculoskeletal health, joint mobility assessments, post-injury reviews, and physical rehabilitation planning.',
    iconName: 'Activity',
    keyServices: ['Joint & mobility evaluations', 'Postural assessments', 'Injury rehabilitation guidance'],
    sampleAvailability: 'Tue – Sat'
  },
  {
    id: 'diagnostic-services',
    name: 'Diagnostic Services',
    description: 'Baseline blood profiles, ultrasound, and digital imaging designed to support accurate, timely clinical evaluation.',
    iconName: 'Microscope',
    keyServices: ['Routine pathology tests', 'Ultrasound imaging', 'Digital X-ray evaluations'],
    sampleAvailability: 'Mon – Sun'
  },
  {
    id: 'preventive-health',
    name: 'Preventive Health',
    description: 'Proactive wellness packages, lifestyle health assessments, and early risk detection tailored for community members.',
    iconName: 'ShieldCheck',
    keyServices: ['Annual wellness panels', 'Cardiovascular risk check', 'Lifestyle consultation'],
    sampleAvailability: 'Mon – Sat'
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-aanya-sharma',
    name: 'Dr. Aanya Sharma',
    department: 'General Medicine',
    departmentId: 'general-medicine',
    image: '/src/assets/images/doctor_aanya_sharma_1792643164179.jpg',
    focusArea: 'Primary Care, Preventative Screenings & Adult Wellness',
    demoAvailabilityNotice: 'Demo Profile — Representative fictional physician'
  },
  {
    id: 'dr-rohan-mehta',
    name: 'Dr. Rohan Mehta',
    department: 'Paediatrics',
    departmentId: 'paediatrics',
    image: '/src/assets/images/doctor_rohan_mehta_1792643169813.jpg',
    focusArea: 'Child Health, Development Milestones & Family Guidance',
    demoAvailabilityNotice: 'Demo Profile — Representative fictional physician'
  },
  {
    id: 'dr-neha-verma',
    name: 'Dr. Neha Verma',
    department: 'Orthopaedics',
    departmentId: 'orthopaedics',
    image: '/src/assets/images/doctor_neha_verma_1792643164954.jpg',
    focusArea: 'Joint Mobility, Musculoskeletal Health & Rehabilitation',
    demoAvailabilityNotice: 'Demo Profile — Representative fictional physician'
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'reception-desk',
    title: 'Reception & Help Desk',
    description: 'A spacious, naturally illuminated main atrium designed to welcome patients and assist visitors calmly.',
    image: '/src/assets/images/hero_hospital_interior_1792643163032.jpg',
    highlights: ['Comfortable registration bays', 'Accessible ground-floor layout', 'Clear directional signage']
  },
  {
    id: 'consultation-rooms',
    title: 'Consultation Rooms',
    description: 'Clean, private consultation suites equipped for relaxed, unhurried discussions between physicians and patients.',
    image: '/src/assets/images/facility_consultation_suite_1792643165719.jpg',
    highlights: ['Natural light & quiet acoustic isolation', 'Modern examination beds', 'Digital documentation desk']
  },
  {
    id: 'waiting-area',
    title: 'Waiting Area & Family Lounge',
    description: 'Ergonomic seating areas surrounded by indoor greenery, offering families a restful and serene environment.',
    image: '/src/assets/images/facility_waiting_lounge_1792643166118.jpg',
    highlights: ['Ergonomic armchairs', 'Quiet reading corners', 'Clean filtered drinking water']
  },
  {
    id: 'diagnostic-area',
    title: 'Diagnostic Area',
    description: 'Organized sampling and observation zones arranged to ensure swift sample collection and minimal wait times.',
    image: '/src/assets/images/hero_hospital_interior_1792643163032.jpg',
    highlights: ['Quick-turnaround sample collection', 'Dedicated patient privacy screens', 'Disinfected examination points']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Hospital Entrance & Main Atrium',
    category: 'Architecture & Reception',
    image: '/src/assets/images/hero_hospital_interior_1792643163032.jpg',
    caption: 'Illustrative interior rendering of a serene community hospital atrium featuring natural timber finishes and ample daylight.'
  },
  {
    id: 'gal-2',
    title: 'Consultation & Examination Suite',
    category: 'Consultation Rooms',
    image: '/src/assets/images/facility_consultation_suite_1792643165719.jpg',
    caption: 'Illustrative consultation setup with private exam area, ergonomic seating, and pleasant window exposure.'
  },
  {
    id: 'gal-3',
    title: 'Patient Waiting Lounge',
    category: 'Patient Amenities',
    image: '/src/assets/images/facility_waiting_lounge_1792643166118.jpg',
    caption: 'Illustrative lounge area providing calming botanical accents and comfortable seating for waiting patients.'
  },
  {
    id: 'gal-4',
    title: 'Paediatric & Wellness Hallway',
    category: 'Care Facilities',
    image: '/public/assets/aistudio/image_e627d95f.png',
    caption: 'Illustrative healthcare department view showing a welcoming, patient-first care environment.'
  }
];

export const PATIENT_STEPS = [
  {
    step: '01',
    title: 'Explore Services',
    description: 'Browse our sample medical departments, focus areas, and available doctors from the comfort of home.'
  },
  {
    step: '02',
    title: 'Choose a Department',
    description: 'Select the specialty that best aligns with your health needs or general consultation requirements.'
  },
  {
    step: '03',
    title: 'Send an Enquiry',
    description: 'Fill in your preferred date and time range using the interactive appointment enquiry form.'
  },
  {
    step: '04',
    title: 'Await Confirmation',
    description: 'In a real-world facility, the hospital desk would call to confirm your appointment time and arrival details.'
  }
];
