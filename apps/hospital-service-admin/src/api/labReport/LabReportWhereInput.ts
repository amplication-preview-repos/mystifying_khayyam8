import { StringFilter } from "../../util/StringFilter";
import { LabRequestWhereUniqueInput } from "../labRequest/LabRequestWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LabReportWhereInput = {
  id?: StringFilter;
  labRequest?: LabRequestWhereUniqueInput;
  reportDate?: DateTimeNullableFilter;
  results?: StringNullableFilter;
};
