import { AppointmentUpdateManyWithoutPatientsInput } from "./AppointmentUpdateManyWithoutPatientsInput";

export type PatientUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutPatientsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
};
