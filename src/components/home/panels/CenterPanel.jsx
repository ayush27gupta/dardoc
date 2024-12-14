import React from "react";
import Summary from "../summary/Summary";
import { Route, Routes } from "react-router-dom";

const CenterPanel = (props) => {
  const { header } = props;
  return (
    <div className="center-main">
      <div className="center-header">{header}</div>
      <Routes>
        <Route path="/home" element={<Summary />} />
      </Routes>
    </div>
  );
};

export default CenterPanel;
