import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ConsultationListRelationFilter } from "../consultation/ConsultationListRelationFilter";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type AppointmentWhereInput = {
  appointmentDate?: DateTimeNullableFilter;
  consultations?: ConsultationListRelationFilter;
  doctor?: DoctorWhereUniqueInput;
  id?: StringFilter;
  patient?: PatientWhereUniqueInput;
  status?: "Option1";
};
