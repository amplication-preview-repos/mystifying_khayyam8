import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { LabRequestCreateNestedManyWithoutConsultationsInput } from "./LabRequestCreateNestedManyWithoutConsultationsInput";

export type ConsultationCreateInput = {
  appointment?: AppointmentWhereUniqueInput | null;
  endTime?: Date | null;
  labRequests?: LabRequestCreateNestedManyWithoutConsultationsInput;
  startTime?: Date | null;
  summary?: string | null;
};
