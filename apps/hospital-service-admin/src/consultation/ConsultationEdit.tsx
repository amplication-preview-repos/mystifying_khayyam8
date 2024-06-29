import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";
import { LabRequestTitle } from "../labRequest/LabRequestTitle";

export const ConsultationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="appointment.id"
          reference="Appointment"
          label="Appointment"
        >
          <SelectInput optionText={AppointmentTitle} />
        </ReferenceInput>
        <DateTimeInput label="endTime" source="endTime" />
        <ReferenceArrayInput
          source="labRequests"
          reference="LabRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LabRequestTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="startTime" source="startTime" />
        <TextInput label="summary" multiline source="summary" />
      </SimpleForm>
    </Edit>
  );
};
