import { LabRequestWhereUniqueInput } from "../labRequest/LabRequestWhereUniqueInput";

export type LabReportUpdateInput = {
  labRequest?: LabRequestWhereUniqueInput | null;
  reportDate?: Date | null;
  results?: string | null;
};
