import React from "react";
import Allergies from "../allergies/Allergies";
import { ALLERGY_DATA } from "../utils/dataConstants";

const AllergiesContainer = () => {
  const handleAddNewLog = () => {
    console.log("Add log");
  };
  return (
    <div className="aller-container common-container p-3">
      <div className="">
        <div className="">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <i className="fas fa-pills"></i>
              </div>
              <div className="common-title"> Allergies & Reaction</div>
            </div>
            <div className="graph-log" onClick={() => handleAddNewLog()}>
              + Add new Log
            </div>
          </div>
        </div>
        <div className="allergy-cards">
          <Allergies allergyData={ALLERGY_DATA} />
        </div>
      </div>
    </div>
  );
};

export default AllergiesContainer;
