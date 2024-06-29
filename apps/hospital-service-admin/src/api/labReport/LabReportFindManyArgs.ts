import { LabReportWhereInput } from "./LabReportWhereInput";
import { LabReportOrderByInput } from "./LabReportOrderByInput";

export type LabReportFindManyArgs = {
  where?: LabReportWhereInput;
  orderBy?: Array<LabReportOrderByInput>;
  skip?: number;
  take?: number;
};
