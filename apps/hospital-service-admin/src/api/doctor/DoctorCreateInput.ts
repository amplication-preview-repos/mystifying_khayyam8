import { AppointmentCreateNestedManyWithoutDoctorsInput } from "./AppointmentCreateNestedManyWithoutDoctorsInput";

export type DoctorCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutDoctorsInput;
  firstName?: string | null;
  lastName?: string | null;
  specialization?: string | null;
};
