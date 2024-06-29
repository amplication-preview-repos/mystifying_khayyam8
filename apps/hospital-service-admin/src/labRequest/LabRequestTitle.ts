import { LabRequest as TLabRequest } from "../api/labRequest/LabRequest";

export const LABREQUEST_TITLE_FIELD = "labName";

export const LabRequestTitle = (record: TLabRequest): string => {
  return record.labName?.toString() || String(record.id);
};
