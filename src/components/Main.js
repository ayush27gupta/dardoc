import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./home/dashboard/Dashboard";
import PatientDetails from "./patient/PatientDetails";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/patient/:id" element={<PatientDetails />} />

        <Route path="/" element={<Dashboard />}>
          <Route path="home" element={<Dashboard />} />
          <Route path="online-visits" element={<Dashboard />} />
          <Route path="lab-reports" element={<Dashboard />} />
          <Route path="prescriptions" element={<Dashboard />} />
          <Route path="appointments" element={<Dashboard />} />
          <Route path="history" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Main;
