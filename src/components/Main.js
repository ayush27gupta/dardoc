import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./home/dashboard/Dashboard";
import PageNotFound from "./PageNotFound";

const PatientDetails = React.lazy(() => import("./patient/PatientDetails"));

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="home" element={<Dashboard />} />
          <Route path="online-visits" element={<Dashboard />} />
          <Route path="lab-reports" element={<Dashboard />} />
          <Route path="prescriptions" element={<Dashboard />} />
          <Route path="appointments" element={<Dashboard />} />
          <Route path="history" element={<Dashboard />} />
        </Route>
        <Route
          path="/patient/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <PatientDetails />
            </Suspense>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default Main;
