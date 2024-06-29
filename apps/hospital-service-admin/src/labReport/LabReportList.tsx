import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LABREQUEST_TITLE_FIELD } from "../labRequest/LabRequestTitle";

export const LabReportList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LabReports"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="LabRequest"
          source="labrequest.id"
          reference="LabRequest"
        >
          <TextField source={LABREQUEST_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="reportDate" source="reportDate" />
        <TextField label="results" source="results" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
