import React, { useState } from "react";
import "./patients.css";
import PatientsCards from "./PatientsCards";
import { PATIENTS } from "../../../utils/dataConstants";
const Patients = () => {
  const [patientData, setPatientData] = useState(PATIENTS);
  const [search, setSearch] = useState("");
  const [timer, setTimer] = useState(null);

  const handleSearch = (input) => {
    setSearch(input);

    if (timer) {
      clearTimeout(timer);
    }

    const newTimer = setTimeout(() => {
      const filteredPatients = PATIENTS.filter((patient) =>
        patient?.name.toLowerCase().includes(input.toLowerCase())
      );
      setPatientData(filteredPatients);
    }, 500);

    setTimer(newTimer);
  };

  return (
    <div>
      <div className="patient-box p-3 mt-2">
        <div className="d-flex justify-content-start align-items-center">
          <div className="sub-header-title">Patients </div>
          <div className="patient-number-badge">{patientData.length}</div>
        </div>
        <div className="input-group patient-search">
          <span
            className="input-group-text border-end-0"
            style={{ backgroundColor: "#f7f7f7", color: "#888" }}
          >
            <i className="fas fa-search"></i>
          </span>

          <input
            type="text"
            className="form-control border-start-0 border-end-0"
            placeholder="Search"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />

          <span
            className="input-group-text border-start-0"
            style={{ backgroundColor: "#f7f7f7", color: "#888" }}
          >
            <i className="fas fa-microphone"></i>
          </span>
        </div>
        <div className="patient-cards-container">
          <PatientsCards patientData={patientData} />
        </div>
      </div>
    </div>
  );
};

export default Patients;
