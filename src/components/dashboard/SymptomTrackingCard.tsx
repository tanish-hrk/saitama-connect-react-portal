
import React from "react";
import { Button } from "@/components/ui/button";

const SymptomTrackingCard = () => (
  <div className="bg-white rounded-xl shadow p-4 space-y-2 animate-fade-in">
    <div className="flex justify-between items-center mb-2">
      <h2 className="font-semibold text-lg">Symptom Tracking</h2>
      <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs">3 Active</span>
    </div>
    <p className="text-sm text-gray-500">Headaches, vision changes, fatigue</p>
    <Button variant="outline" className="w-full text-orange-700 border-orange-200">Track Symptoms</Button>
  </div>
);

export default SymptomTrackingCard;
