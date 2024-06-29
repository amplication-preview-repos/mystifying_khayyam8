import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { LabRequestUpdateManyWithoutConsultationsInput } from "./LabRequestUpdateManyWithoutConsultationsInput";

export type ConsultationUpdateInput = {
  appointment?: AppointmentWhereUniqueInput | null;
  endTime?: Date | null;
  labRequests?: LabRequestUpdateManyWithoutConsultationsInput;
  startTime?: Date | null;
  summary?: string | null;
};
