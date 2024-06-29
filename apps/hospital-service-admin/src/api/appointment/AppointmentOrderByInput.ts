import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  appointmentDate?: SortOrder;
  createdAt?: SortOrder;
  doctorId?: SortOrder;
  id?: SortOrder;
  patientId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
