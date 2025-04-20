
import React from "react";
import { Button } from "@/components/ui/button";

const ReportNewSymptoms = () => (
  <div className="bg-white rounded-xl shadow p-4 space-y-2 animate-fade-in">
    <h2 className="font-semibold text-lg mb-1">Report New Symptoms</h2>
    <p className="text-sm text-gray-500 mb-2">Keep your health log up to date. Reporting new symptoms helps your care team respond faster.</p>
    <Button variant="default" className="w-full">Report Symptoms</Button>
  </div>
);

export default ReportNewSymptoms;
