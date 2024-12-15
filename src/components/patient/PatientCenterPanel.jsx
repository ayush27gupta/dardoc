import React from "react";
import Summary from "../home/summary/Summary";
import { HEALTH_METRICS_DATA } from "../utils/dataConstants";

import AllergiesContainer from "./AllergiesContainer.jsx";
import PatientGraphs from "./PatientGraphs";
import PatientLabTest from "./PatientLabTest";
import PrescriptionsContainer from "./PrescriptionsContainer";

const PatientCenterPanel = (props) => {
  const { header } = props;
  return (
    <div className="center-main">
      <div className="center-header">{header}</div>
      <Summary title={"Health Meter"} cardsData={HEALTH_METRICS_DATA} />
      <PatientGraphs />
      <PatientLabTest />
      <PrescriptionsContainer />
      <AllergiesContainer />
    </div>
  );
};

export default PatientCenterPanel;
