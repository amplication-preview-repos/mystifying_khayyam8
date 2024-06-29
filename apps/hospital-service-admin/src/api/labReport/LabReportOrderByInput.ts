import { SortOrder } from "../../util/SortOrder";

export type LabReportOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  labRequestId?: SortOrder;
  reportDate?: SortOrder;
  results?: SortOrder;
  updatedAt?: SortOrder;
};
