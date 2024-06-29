import { LabReport as TLabReport } from "../api/labReport/LabReport";

export const LABREPORT_TITLE_FIELD = "id";

export const LabReportTitle = (record: TLabReport): string => {
  return record.id?.toString() || String(record.id);
};
