import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import LeftSidePanel from "../home/panels/LeftSidePanel";
import CenterPanel from "../home/panels/CenterPanel";
import RightPanel from "../home/panels/RightPanel";

const PatientDetails = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
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
      case "/patient/${id}":
        setSelectedLink("Patient Dashboard");
        break;
      case "/patient/${id}/history":
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
  }, [location.pathname]);

  const handleLinkSelect = (label) => {
    setSelectedLink(label);
  };

  return (
    <div className="d-flex  p-3 dashboard-container">
      <div className="left-main b-red ">
        <LeftSidePanel links={links} onLinkSelect={handleLinkSelect} />
      </div>

      <div className="center-main b-green flex-grow-1">
        <CenterPanel header={selectedLink} />
      </div>

      <div className="right-main b-blue ">
        <RightPanel />
      </div>
    </div>
  );
};

export default PatientDetails;