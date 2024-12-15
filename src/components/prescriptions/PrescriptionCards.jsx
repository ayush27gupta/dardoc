import React from "react";
import "./presCards.css";

const PrescriptionCards = (props) => {
  const { presData } = props;
  return (
    <div className="prescription-cards-container">
      {presData?.map((item, index) => (
        <div className="pres-card" key={item.rxId}> {/* Added key prop here */}
          <div className="drug-details">
            <div className="drug-header">
              <div className="drug-name">{item?.drugName}</div>
              <div className="drug-dose">{item?.dosage}</div>
            </div>
            <div className="drug-mid">
              <div className="drug-writ">Written on</div>
              <div className="drug-rxDate">{item?.rxDate}</div>
            </div>
            <div className="drug-btns">
              <div className="rx-copy">View Rx Copy</div>
              <div className="send-rx">
                <i className="fa fa-envelope"></i>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PrescriptionCards;
