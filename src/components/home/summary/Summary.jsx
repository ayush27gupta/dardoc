import React from "react";
import "./summary.css";
import SummaryCards from "./SummaryCards";

const Summary = (props) => {
  const { title, cardsData } = props;
  return (
    <div className="summary-container">
      <div className="summary-header">
        <div>
          <img src="/images/heart.jpg" alt="No img" height="25" width="30" />
        </div>

        <div className="summary-title">{title}</div>
      </div>
      <div className="summary-cards">
        <SummaryCards cardsData={cardsData} />
      </div>
    </div>
  );
};

export default Summary;
