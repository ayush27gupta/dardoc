import React from "react";
import Summary from "../summary/Summary";

const CenterPanel = (props) => {
  const { header } = props;
  return (
    <div className="center-main">
      <div className="center-header">{header}</div>
      <Summary />
    </div>
  );
};

export default CenterPanel;
