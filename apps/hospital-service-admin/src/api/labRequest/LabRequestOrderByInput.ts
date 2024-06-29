import { SortOrder } from "../../util/SortOrder";

export type LabRequestOrderByInput = {
  consultationId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  instructions?: SortOrder;
  labName?: SortOrder;
  requestDate?: SortOrder;
  updatedAt?: SortOrder;
};
