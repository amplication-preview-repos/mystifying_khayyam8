import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { LABREQUEST_TITLE_FIELD } from "../labRequest/LabRequestTitle";

export const LabReportShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
