import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { ConsultationTitle } from "../consultation/ConsultationTitle";
import { LabReportTitle } from "../labReport/LabReportTitle";

export const LabRequestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="consultation.id"
          reference="Consultation"
          label="Consultation"
        >
          <SelectInput optionText={ConsultationTitle} />
        </ReferenceInput>
        <TextInput label="instructions" multiline source="instructions" />
        <TextInput label="labName" source="labName" />
        <ReferenceArrayInput
          source="labReports"
          reference="LabReport"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LabReportTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="requestDate" source="requestDate" />
      </SimpleForm>
    </Create>
  );
};
