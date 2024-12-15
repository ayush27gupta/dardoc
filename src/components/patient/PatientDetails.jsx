import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import LeftSidePanel from "../home/panels/LeftSidePanel";
import PatientCenterPanel from "./PatientCenterPanel";
import PatientRightPanel from "./PatientRightPanel";
import PatientUserCard from "./PatientUserCard";

const PatientDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [selectedLink, setSelectedLink] = useState("");

  const links = [
    { path: `/patient/${id}`, label: "Patient Dashboard" },
    { path: "/history", label: "History" },
    { path: "/lab-reports", label: "Lab Reports" },
    { path: "/prescriptions", label: "Prescriptions" },
    { path: "/appointments", label: "Appointments" },
  ];

  useEffect(() => {
    switch (location.pathname) {
      case `/patient/${id}`:
        setSelectedLink("Patient Dashboard");
        break;
      case `/patient/${id}/history`:
        setSelectedLink("History");
        break;
      case "/lab-reports":
        setSelectedLink("Lab Reports");
        break;
      case "/prescriptions":
        setSelectedLink("Prescriptions");
        break;
      case "/appointments":
        setSelectedLink("Appointments");
        break;
      default:
        setSelectedLink("");
    }
  }, [location.pathname, id]);

  const handleLinkSelect = (label) => {
    setSelectedLink(label);
  };

  return (
    <div className="d-flex  p-3 dashboard-container">
      <div className="left-main  ">
        <div className="">
          <PatientUserCard />
        </div>
        <LeftSidePanel links={links} onLinkSelect={handleLinkSelect} />
      </div>

      <div className="center-main b-green flex-grow-1">
        <PatientCenterPanel header={selectedLink} />
      </div>

      <div className="right-main b-blue ">
        <PatientRightPanel />
      </div>
    </div>
  );
};

export default PatientDetails;
