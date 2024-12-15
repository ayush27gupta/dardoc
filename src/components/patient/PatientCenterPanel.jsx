import React from "react";
import Summary from "../home/summary/Summary";
import { HEALTH_METRICS_DATA } from "../utils/dataConstants";
import PatientGraphs from "./PatientGraphs";

const PatientCenterPanel = (props) => {
  const { header } = props;
  return (
    <div className="center-main">
      <div className="center-header">{header}</div>
      <Summary title={"Health Meter"} cardsData={HEALTH_METRICS_DATA} />
      <PatientGraphs />
    </div>
  );
};

export default PatientCenterPanel;
