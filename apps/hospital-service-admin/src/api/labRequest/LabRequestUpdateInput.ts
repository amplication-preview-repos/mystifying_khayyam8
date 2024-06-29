import { ConsultationWhereUniqueInput } from "../consultation/ConsultationWhereUniqueInput";
import { LabReportUpdateManyWithoutLabRequestsInput } from "./LabReportUpdateManyWithoutLabRequestsInput";

export type LabRequestUpdateInput = {
  consultation?: ConsultationWhereUniqueInput | null;
  instructions?: string | null;
  labName?: string | null;
  labReports?: LabReportUpdateManyWithoutLabRequestsInput;
  requestDate?: Date | null;
};
