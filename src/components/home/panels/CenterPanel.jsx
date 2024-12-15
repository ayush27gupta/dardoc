import React from "react";
import { SUMMARY_CARDS_DATA } from "../../utils/dataConstants";
import Appointments from "../appointments/Appointments";
import Summary from "../summary/Summary";

const CenterPanel = (props) => {
  const { header } = props;

  const TITLE = "Summary";

  return (
    <div className="center-main">
      <div className="center-header">{header}</div>
      { (header === "Home" || header ==="") && (
        <Summary
          title={TITLE}
          cardsData={SUMMARY_CARDS_DATA}
          imgSrc={"images/heart.jpg"}
        />
      )}
      {(header === "Home" || header==="") && <Appointments />}
    </div>
  );
};

export default CenterPanel;
