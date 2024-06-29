import { SortOrder } from "../../util/SortOrder";

export type DoctorOrderByInput = {
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  specialization?: SortOrder;
  updatedAt?: SortOrder;
};
