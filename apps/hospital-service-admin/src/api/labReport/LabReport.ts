import { LabRequest } from "../labRequest/LabRequest";

export type LabReport = {
  createdAt: Date;
  id: string;
  labRequest?: LabRequest | null;
  reportDate: Date | null;
  results: string | null;
  updatedAt: Date;
};
