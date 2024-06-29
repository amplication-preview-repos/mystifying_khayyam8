import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { APPOINTMENT_TITLE_FIELD } from "../appointment/AppointmentTitle";

export const ConsultationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Consultations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
