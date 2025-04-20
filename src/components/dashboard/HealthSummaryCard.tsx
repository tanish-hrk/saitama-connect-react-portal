
import React from "react";

const HealthSummaryCard = () => (
  <div className="bg-white rounded-xl shadow p-4 animate-fade-in">
    <h2 className="font-semibold text-lg mb-2">Health Summary</h2>
    <p className="mb-2 text-sm text-muted-foreground">
      Your current health status and recommendations
    </p>
    <ul className="pl-4 list-disc text-sm mb-1">
      <li>Recent Activity: MRI scan completed on June 15, 2023</li>
      <li>Reported new symptoms on June 10, 2023</li>
      <li>Appointment with Dr. Johnson on June 5, 2023</li>
    </ul>
    <h3 className="font-semibold mt-4 mb-1">Next Steps</h3>
    <ul className="pl-4 list-disc text-sm">
      <li>Complete your medical history</li>
      <li>Schedule follow-up appointment</li>
      <li>Track your symptoms daily</li>
    </ul>
  </div>
);

export default HealthSummaryCard;
