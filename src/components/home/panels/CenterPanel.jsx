import React from "react";
import Summary from "../summary/Summary";
import { Route, Routes } from "react-router-dom";
import Appointments from "../appointments/Appointments";

const CenterPanel = (props) => {
  const { header } = props;
  return (
    <div className="center-main">
      <div className="center-header">{header}</div>
      {header === "Home" && <Summary />}
      {header === "Home" && <Appointments />}
    </div>
  );
};

export default CenterPanel;
