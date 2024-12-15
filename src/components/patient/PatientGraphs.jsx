import React from "react";
import LineGraph from "../graphs/LineGraph";
import { OBESITY_DATA, TSETOSTERONE_DATA } from "../utils/dataConstants";
import "./patientsGraphs.css";

const PatientGraphs = () => {
  const handleAddLog = () => {
    console.log("Added");
  };

  return (
    <div className="patient-graphs-container">
      <div className="obesity-trends  graph-trends mt-3">
        <LineGraph
          title="Obesity Management Trends"
          subTitle="5.7 kgs (8%)"
          data={OBESITY_DATA}
          handleAddLog={handleAddLog}
        />
      </div>
      <div className="testosterone-trends  graph-trends mt-3">
        <LineGraph
          title="Testosterone Level Trends"
          subTitle="189 ng/dL"
          data={TSETOSTERONE_DATA}
          handleAddLog={handleAddLog}
        />
      </div>
    </div>
  );
};

export default PatientGraphs;
