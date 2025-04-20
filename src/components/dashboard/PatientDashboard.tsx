
import React from "react";
import WelcomeBanner from "./WelcomeBanner";
import ReportNewSymptoms from "./ReportNewSymptoms";
import ProfileCompletionCard from "./ProfileCompletionCard";
import UpcomingAppointmentCard from "./UpcomingAppointmentCard";
import RecentReportsCard from "./RecentReportsCard";
import SymptomTrackingCard from "./SymptomTrackingCard";
import OverviewTabs from "./OverviewTabs";
import HealthSummaryCard from "./HealthSummaryCard";
import BrainScanAnalysisCard from "./BrainScanAnalysisCard";
import RiskAssessmentCard from "./RiskAssessmentCard";

const PatientDashboard = () => {
  return (
    <div className="space-y-8 animate-[slide-in-top_0.4s_ease-out]">
      <WelcomeBanner name="John Doe" />
      <div className="grid md:grid-cols-3 gap-6">
        <ReportNewSymptoms />
        <ProfileCompletionCard />
        <UpcomingAppointmentCard />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <RecentReportsCard />
        <SymptomTrackingCard />
      </div>
      <OverviewTabs />
      <div className="grid md:grid-cols-2 gap-6">
        <HealthSummaryCard />
        <div className="space-y-6">
          <BrainScanAnalysisCard />
          <RiskAssessmentCard />
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
