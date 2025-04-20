
import React from "react";
import { File } from "lucide-react";
import { Button } from "@/components/ui/button";

const RecentReportsCard = () => (
  <div className="bg-white rounded-xl shadow p-4 space-y-2 animate-fade-in">
    <div className="flex gap-2 items-center">
      <File className="w-6 h-6 text-purple-600" />
      <h2 className="font-semibold text-lg">Recent Reports</h2>
      <span className="ml-auto bg-purple-100 text-purple-700 rounded px-2 text-xs">2</span>
    </div>
    <div>
      <p className="text-sm text-gray-500">MRI scan results available</p>
    </div>
    <Button variant="secondary" className="w-full">View Reports</Button>
  </div>
);

export default RecentReportsCard;
