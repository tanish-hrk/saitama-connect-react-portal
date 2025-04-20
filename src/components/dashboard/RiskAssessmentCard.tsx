
import React from "react";
import { Button } from "@/components/ui/button";

const RiskAssessmentCard = () => (
  <div className="bg-white rounded-xl shadow p-4 animate-fade-in">
    <div className="flex justify-between items-center mb-1">
      <h2 className="font-semibold text-lg">Risk Assessment</h2>
      <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs">Moderate Risk</span>
    </div>
    <p className="mb-2 text-sm">
      Your reported symptoms suggest a moderate risk level. We recommend consulting with a specialist for further evaluation.
    </p>
    <Button variant="default" className="w-full">Schedule Consultation</Button>
  </div>
);

export default RiskAssessmentCard;
