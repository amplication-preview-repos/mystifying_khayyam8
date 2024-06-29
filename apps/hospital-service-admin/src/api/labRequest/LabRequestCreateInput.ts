import { ConsultationWhereUniqueInput } from "../consultation/ConsultationWhereUniqueInput";
import { LabReportCreateNestedManyWithoutLabRequestsInput } from "./LabReportCreateNestedManyWithoutLabRequestsInput";

export type LabRequestCreateInput = {
  consultation?: ConsultationWhereUniqueInput | null;
  instructions?: string | null;
  labName?: string | null;
  labReports?: LabReportCreateNestedManyWithoutLabRequestsInput;
  requestDate?: Date | null;
};
