
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import PatientDashboard from "@/components/dashboard/PatientDashboard";

const PatientPortal = () => {
  return (
    <DashboardLayout portalType="patient">
      <PatientDashboard />
    </DashboardLayout>
  );
};

export default PatientPortal;
