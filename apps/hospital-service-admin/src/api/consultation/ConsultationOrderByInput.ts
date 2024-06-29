import { SortOrder } from "../../util/SortOrder";

export type ConsultationOrderByInput = {
  appointmentId?: SortOrder;
  createdAt?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  startTime?: SortOrder;
  summary?: SortOrder;
  updatedAt?: SortOrder;
};
