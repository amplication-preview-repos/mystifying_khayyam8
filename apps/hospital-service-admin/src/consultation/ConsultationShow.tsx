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

import { CONSULTATION_TITLE_FIELD } from "./ConsultationTitle";
import { APPOINTMENT_TITLE_FIELD } from "../appointment/AppointmentTitle";

export const ConsultationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Appointment"
          source="appointment.id"
          reference="Appointment"
        >
          <TextField source={APPOINTMENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="endTime" source="endTime" />
        <TextField label="ID" source="id" />
        <TextField label="startTime" source="startTime" />
        <TextField label="summary" source="summary" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="LabRequest"
          target="consultationId"
          label="LabRequests"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
