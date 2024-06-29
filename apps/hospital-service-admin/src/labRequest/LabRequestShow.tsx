import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { LABREQUEST_TITLE_FIELD } from "./LabRequestTitle";
import { CONSULTATION_TITLE_FIELD } from "../consultation/ConsultationTitle";

export const LabRequestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Consultation"
          source="consultation.id"
          reference="Consultation"
        >
          <TextField source={CONSULTATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="instructions" source="instructions" />
        <TextField label="labName" source="labName" />
        <TextField label="requestDate" source="requestDate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="LabReport"
          target="labRequestId"
          label="LabReports"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
