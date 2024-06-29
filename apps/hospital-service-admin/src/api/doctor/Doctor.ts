import { Appointment } from "../appointment/Appointment";

export type Doctor = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  specialization: string | null;
  updatedAt: Date;
};
