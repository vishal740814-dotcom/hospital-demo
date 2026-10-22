export interface Department {
  id: string;
  name: string;
  description: string;
  iconName: string;
  keyServices: string[];
  sampleAvailability: string;
}

export interface Doctor {
  id: string;
  name: string;
  department: string;
  departmentId: string;
  image: string;
  focusArea: string;
  demoAvailabilityNotice: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export interface AppointmentFormData {
  patientName: string;
  phoneNumber: string;
  department: string;
  preferredDoctor: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
  consent: boolean;
}

export interface AppointmentSubmissionResult extends AppointmentFormData {
  referenceId: string;
  submittedAt: string;
}
