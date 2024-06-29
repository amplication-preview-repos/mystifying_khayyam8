import { Doctor as TDoctor } from "../api/doctor/Doctor";

export const DOCTOR_TITLE_FIELD = "firstName";

export const DoctorTitle = (record: TDoctor): string => {
  return record.firstName?.toString() || String(record.id);
};
