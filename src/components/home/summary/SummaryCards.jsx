import React from "react";
import "./summary.css";

const SummaryCards = (props) => {
  const { cardsData } = props;

  return (
    <div className="summary-cards-container">
      {cardsData?.map((item, index) => (
        <div className="summary-card" key={item?.id || index}>
          <div className="d-flex  flex-column align-items-between">
            <div className="card-name">{item?.name}</div>
            <div className="card-value">{item?.value}</div>
          </div>
          <div className={`card-label ${item?.highlight ? "red" : "green"}`}>
            {item?.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
