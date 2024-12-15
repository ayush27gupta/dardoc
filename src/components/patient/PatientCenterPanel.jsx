import React from "react";
import Summary from "../home/summary/Summary";
import { SUMMARY_CARDS_DATA } from "../utils/dataConstants";
import PatientGraphs from "./PatientGraphs";

const PatientCenterPanel = (props) => {
  const { header } = props;
  return (
    <div className="center-main">
      <div className="center-header">{header}</div>
      <Summary title={"Health Meter"} cardsData={SUMMARY_CARDS_DATA} />
      <PatientGraphs />
    </div>
  );
};

export default PatientCenterPanel;
