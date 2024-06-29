import { LabRequestWhereInput } from "./LabRequestWhereInput";
import { LabRequestOrderByInput } from "./LabRequestOrderByInput";

export type LabRequestFindManyArgs = {
  where?: LabRequestWhereInput;
  orderBy?: Array<LabRequestOrderByInput>;
  skip?: number;
  take?: number;
};
