import React from "react";
import "./allergies.css";

const Allergies = (props) => {
  const { allergyData } = props;
  return (
    <div className="allergies-cards-container">
      {allergyData?.map((item, index) => (
        <div className="allergy-card" key={index}>
          <div className="allergy-details">
            <div className="allergy-reaction">
              <div className={`allergy-capsule ${item?.symptom.toLowerCase()}`}>
                {item?.symptom}
              </div>
            </div>
            <div className="allergy-header">
              <div className="allergy-name">{item?.cause}</div>
              <div className="allergy-cause">{item?.report}</div>
            </div>
            <div className="allergy-mid">
              <div className="allergy-rep">Reported on</div>
              <div className="allergy-reportDate">{item?.reportDate}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Allergies;
