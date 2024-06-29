import { Consultation } from "../consultation/Consultation";
import { LabReport } from "../labReport/LabReport";

export type LabRequest = {
  consultation?: Consultation | null;
  createdAt: Date;
  id: string;
  instructions: string | null;
  labName: string | null;
  labReports?: Array<LabReport>;
  requestDate: Date | null;
  updatedAt: Date;
};
