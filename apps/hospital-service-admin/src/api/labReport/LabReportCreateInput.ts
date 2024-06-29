import { LabRequestWhereUniqueInput } from "../labRequest/LabRequestWhereUniqueInput";

export type LabReportCreateInput = {
  labRequest?: LabRequestWhereUniqueInput | null;
  reportDate?: Date | null;
  results?: string | null;
};
