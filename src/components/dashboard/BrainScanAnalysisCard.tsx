
import React from "react";
import { Button } from "@/components/ui/button";

const BrainScanAnalysisCard = () => (
  <div className="bg-white rounded-xl shadow p-4 animate-fade-in">
    <div className="flex justify-between items-center mb-2">
      <h2 className="font-semibold text-lg">Brain Scan Analysis</h2>
      <span className="bg-blue-200 text-blue-800 px-2 py-0.5 rounded-md text-xs">AI-powered</span>
    </div>
    <p className="mb-3 text-sm text-muted-foreground">
      Latest AI-powered analysis results. 
      <br />
      Upload your latest MRI scan for up-to-date insights.
    </p>
    <Button variant="secondary" className="w-full">Upload Scan</Button>
  </div>
);

export default BrainScanAnalysisCard;
