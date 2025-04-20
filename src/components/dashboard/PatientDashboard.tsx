
import React from 'react';
import DashboardOverview from './DashboardOverview';
import HealthSummary from './HealthSummary';
import BrainScanAnalysis from './BrainScanAnalysis';
import RiskAssessment from './RiskAssessment';

const PatientDashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Welcome back!</h1>
        <p className="text-muted-foreground">Here's an overview of your health status.</p>
      </div>

      <DashboardOverview />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <HealthSummary />
        <div className="space-y-6">
          <BrainScanAnalysis />
          <RiskAssessment />
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
