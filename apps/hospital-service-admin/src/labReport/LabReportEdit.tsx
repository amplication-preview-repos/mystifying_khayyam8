import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { LabRequestTitle } from "../labRequest/LabRequestTitle";

export const LabReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
