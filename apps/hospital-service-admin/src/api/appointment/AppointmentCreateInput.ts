import { ConsultationCreateNestedManyWithoutAppointmentsInput } from "./ConsultationCreateNestedManyWithoutAppointmentsInput";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type AppointmentCreateInput = {
  appointmentDate?: Date | null;
  consultations?: ConsultationCreateNestedManyWithoutAppointmentsInput;
  doctor?: DoctorWhereUniqueInput | null;
  patient?: PatientWhereUniqueInput | null;
  status?: "Option1" | null;
};
