import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { LabRequestTitle } from "../labRequest/LabRequestTitle";

export const LabReportCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="labRequest.id"
          reference="LabRequest"
          label="LabRequest"
        >
          <SelectInput optionText={LabRequestTitle} />
        </ReferenceInput>
        <DateTimeInput label="reportDate" source="reportDate" />
        <TextInput label="results" multiline source="results" />
      </SimpleForm>
    </Create>
  );
};
