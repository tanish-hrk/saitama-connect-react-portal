
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const ProfileCompletionCard = () => (
  <div className="bg-white rounded-xl shadow p-4 space-y-3 animate-fade-in">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-semibold text-md">Profile Completion</h3>
        <span className="text-xs text-muted-foreground">66%</span>
      </div>
      <span className="ml-2 text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-md">Recommended</span>
    </div>
    <Progress value={66} />
    <span className="text-xs text-gray-500">Complete your profile to get better recommendations.</span>
    <Button variant="secondary" className="w-full">Complete Profile</Button>
  </div>
);

export default ProfileCompletionCard;
