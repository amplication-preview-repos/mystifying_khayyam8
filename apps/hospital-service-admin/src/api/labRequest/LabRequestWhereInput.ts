import { ConsultationWhereUniqueInput } from "../consultation/ConsultationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LabReportListRelationFilter } from "../labReport/LabReportListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type LabRequestWhereInput = {
  consultation?: ConsultationWhereUniqueInput;
  id?: StringFilter;
  instructions?: StringNullableFilter;
  labName?: StringNullableFilter;
  labReports?: LabReportListRelationFilter;
  requestDate?: DateTimeNullableFilter;
};
