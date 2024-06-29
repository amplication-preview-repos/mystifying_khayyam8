import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LabRequestListRelationFilter } from "../labRequest/LabRequestListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ConsultationWhereInput = {
  appointment?: AppointmentWhereUniqueInput;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  labRequests?: LabRequestListRelationFilter;
  startTime?: DateTimeNullableFilter;
  summary?: StringNullableFilter;
};
