import { Appointment } from "../appointment/Appointment";
import { LabRequest } from "../labRequest/LabRequest";

export type Consultation = {
  appointment?: Appointment | null;
  createdAt: Date;
  endTime: Date | null;
  id: string;
  labRequests?: Array<LabRequest>;
  startTime: Date | null;
  summary: string | null;
  updatedAt: Date;
};
