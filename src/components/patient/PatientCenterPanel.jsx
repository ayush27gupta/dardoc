import React from "react";
import Summary from "../home/summary/Summary";

const PatientCenterPanel = (props) => {
  const { header } = props;
  return (
    <div className="center-main">
      <div className="center-header">{header}</div>
      <Summary title={"Health Meter"} />
    </div>
  );
};

export default PatientCenterPanel;
