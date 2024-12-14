import React from "react";
import "./support.css";
const Support = () => {
  return (
    <>
      <div className="support-container-ins">
        <div className="support-header">
          <div className="header-title">Support</div>
          <div>
            <i class="fa fa-arrow-right arrow-rotate"></i>
          </div>
        </div>
        <div className="support-cards">
          <div className="support-card">
            <div className="d-flex justify-content-between align-items-center">
              <div>Contact DarDoc Support</div>
              <div>
                <i class="fa fa-arrow-right" style={{ color: "#a2a2a2" }}></i>
              </div>
            </div>
          </div>
          <hr className="width-90 m-auto" />

          <div className="support-card">
            <div className="d-flex justify-content-between align-items-center">
              <div>File a technical issue</div>
              <div>
                <i class="fa fa-arrow-right" style={{ color: "#a2a2a2" }}></i>
              </div>
            </div>
          </div>
          <hr className="width-90 m-auto" />
          <div className="support-card">
            <div className="d-flex justify-content-between align-items-center">
              <div>Snooze</div>
              <div>
                <i class="fa fa-arrow-right" style={{ color: "#a2a2a2" }}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
