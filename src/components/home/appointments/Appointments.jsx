import React from "react";
import "./appointment.css";
import AppointmentCards from "./AppointmentCards";
import { APPOINT_CARDS_DATA } from "../../utils/dataConstants";

const Appointments = () => {
  return (
    <div className="appointment-container">
      <div className="appoint-header">
        <div className="d-flex justify-content-between align-items-center">
          <div className="appoint-icon ">
            <i class="far fa-calendar-alt"></i>
          </div>
          <div className="appoint-header-text">Today's Appointments</div>
        </div>
        <div className="appoint-filter">
          <i class="fa fa-filter"></i>
        </div>
      </div>
      <div className="appoint-cards-container">
        <AppointmentCards appointCards={APPOINT_CARDS_DATA} />
      </div>
    </div>
  );
};

export default Appointments;
