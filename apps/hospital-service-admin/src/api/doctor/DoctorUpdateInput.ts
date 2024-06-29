import { AppointmentUpdateManyWithoutDoctorsInput } from "./AppointmentUpdateManyWithoutDoctorsInput";

export type DoctorUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutDoctorsInput;
  firstName?: string | null;
  lastName?: string | null;
  specialization?: string | null;
};
