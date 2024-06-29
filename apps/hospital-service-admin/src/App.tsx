import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ConsultationList } from "./consultation/ConsultationList";
import { ConsultationCreate } from "./consultation/ConsultationCreate";
import { ConsultationEdit } from "./consultation/ConsultationEdit";
import { ConsultationShow } from "./consultation/ConsultationShow";
import { DoctorList } from "./doctor/DoctorList";
import { DoctorCreate } from "./doctor/DoctorCreate";
import { DoctorEdit } from "./doctor/DoctorEdit";
import { DoctorShow } from "./doctor/DoctorShow";
import { LabRequestList } from "./labRequest/LabRequestList";
import { LabRequestCreate } from "./labRequest/LabRequestCreate";
import { LabRequestEdit } from "./labRequest/LabRequestEdit";
import { LabRequestShow } from "./labRequest/LabRequestShow";
import { LabReportList } from "./labReport/LabReportList";
import { LabReportCreate } from "./labReport/LabReportCreate";
import { LabReportEdit } from "./labReport/LabReportEdit";
import { LabReportShow } from "./labReport/LabReportShow";
import { AppointmentList } from "./appointment/AppointmentList";
import { AppointmentCreate } from "./appointment/AppointmentCreate";
import { AppointmentEdit } from "./appointment/AppointmentEdit";
import { AppointmentShow } from "./appointment/AppointmentShow";
import { PatientList } from "./patient/PatientList";
import { PatientCreate } from "./patient/PatientCreate";
import { PatientEdit } from "./patient/PatientEdit";
import { PatientShow } from "./patient/PatientShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"HospitalService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Consultation"
          list={ConsultationList}
          edit={ConsultationEdit}
          create={ConsultationCreate}
          show={ConsultationShow}
        />
        <Resource
          name="Doctor"
          list={DoctorList}
          edit={DoctorEdit}
          create={DoctorCreate}
          show={DoctorShow}
        />
        <Resource
          name="LabRequest"
          list={LabRequestList}
          edit={LabRequestEdit}
          create={LabRequestCreate}
          show={LabRequestShow}
        />
        <Resource
          name="LabReport"
          list={LabReportList}
          edit={LabReportEdit}
          create={LabReportCreate}
          show={LabReportShow}
        />
        <Resource
          name="Appointment"
          list={AppointmentList}
          edit={AppointmentEdit}
          create={AppointmentCreate}
          show={AppointmentShow}
        />
        <Resource
          name="Patient"
          list={PatientList}
          edit={PatientEdit}
          create={PatientCreate}
          show={PatientShow}
        />
      </Admin>
    </div>
  );
};

export default App;
