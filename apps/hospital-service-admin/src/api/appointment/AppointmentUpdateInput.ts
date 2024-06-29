import { ConsultationUpdateManyWithoutAppointmentsInput } from "./ConsultationUpdateManyWithoutAppointmentsInput";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type AppointmentUpdateInput = {
  appointmentDate?: Date | null;
  consultations?: ConsultationUpdateManyWithoutAppointmentsInput;
  doctor?: DoctorWhereUniqueInput | null;
  patient?: PatientWhereUniqueInput | null;
  status?: "Option1" | null;
};
