import React from "react";
import Allergies from "../allergies/Allergies";

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
        <div className="prescription-cards">
          <Allergies />
        </div>
      </div>
    </div>
  );
};

export default AllergiesContainer;
