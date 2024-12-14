import React from "react";
import "./summary.css";
import { SUMMARY_CARDS_DATA } from "../../utils/dataConstants";
import SummaryCards from "./SummaryCards";

const Summary = () => {
  return (
    <div className="summary-container">
      <div className="summary-header">
        <div>
          <img src="images/heart.jpg" alt="No img" height="25" width="30" />
        </div>
        <div className="summary-title">Summary</div>
      </div>
      <div className="summary-cards">
        <SummaryCards cardsData={SUMMARY_CARDS_DATA} />
      </div>
    </div>
  );
};

export default Summary;
