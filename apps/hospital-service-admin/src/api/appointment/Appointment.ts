import { Consultation } from "../consultation/Consultation";
import { Doctor } from "../doctor/Doctor";
import { Patient } from "../patient/Patient";

export type Appointment = {
  appointmentDate: Date | null;
  consultations?: Array<Consultation>;
  createdAt: Date;
  doctor?: Doctor | null;
  id: string;
  patient?: Patient | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
