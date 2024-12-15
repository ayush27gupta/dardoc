import React, { useState } from "react";
import { TABLE_DATA } from "../utils/dataConstants";
import { LAB_TEST_TABLE } from "../utils/tableAccessors";
import CommonTable from "./CommonTable";

const LabTestTable = (props) => {
  const {
    title = "Title",
    subTitle = "SubTitle",
    desc = "Reported On",
    dateReported = "01 April 2024",
    data = TABLE_DATA,
  } = props;

  const [showAll, setShowAll] = useState(false);
  const itemsToShow = 5;

  const handleViewPdf = () => {
    console.log("View PDF");
  };

  const visibleData = showAll ? data : data.slice(0, itemsToShow);

  const handleToggle = () => {
    setShowAll((prevState) => !prevState);
  };

  return (
    <div className="commmon-line-container">
      <div className="table-headers">
        <div className="graph-header">
          <div className="d-flex justify-content-between align-items-center">
            <div className="graph-title">{title}</div>
            <div className="graph-log" onClick={handleViewPdf}>
              <i className="fa fa-file"></i> &nbsp; View .pdf
            </div>
          </div>
          <div className="graph-subtitle">{subTitle}</div>
          <div className="graph-desc">{desc}</div>
          <div className="graph-desc-date">{dateReported}</div>
        </div>
      </div>
      <div className="table-content">
        <CommonTable columns={LAB_TEST_TABLE} data={visibleData} />
      </div>
      <div className="table-footer">
        <span>
          Showing {showAll ? `1-${data.length}` : `1-${visibleData.length}`} of{" "}
          {data.length}
        </span>
        {data.length > itemsToShow && (
          <button className="toggle-button" onClick={handleToggle}>
            {showAll ? "Collapse" : "Show All"}{" "}
            <i
              className={`fa ${showAll ? "fa-chevron-up" : "fa-chevron-down"}`}
            ></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default LabTestTable;
