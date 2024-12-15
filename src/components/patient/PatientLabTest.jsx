import React from "react";
import LabTestTable from "../tables/LabTestTable";
import "./labtest.css";

const PatientLabTest = () => {
  return (
    <div className="patient-labtest-container">
      <div className="common-trends-container">
        <LabTestTable
          title="Most Recent Lab Test"
          subTitle="Weight Loss Blood Test"
          desc="Reported On"
          dateReported="01 April 2024"
        />
      </div>
    </div>
  );
};

export default PatientLabTest;
