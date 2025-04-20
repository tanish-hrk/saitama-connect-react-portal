
import React from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const UpcomingAppointmentCard = () => (
  <div className="bg-white rounded-xl shadow p-4 space-y-4 animate-fade-in">
    <div className="flex items-center gap-3">
      <div className="bg-blue-100 p-2 rounded-lg">
        <Calendar className="w-6 h-6 text-blue-600" />
      </div>
      <div>
        <p className="font-semibold">Upcoming Appointment</p>
        <span className="text-sm text-gray-700">Dr. Sarah Johnson</span>
        <div className="text-xs text-muted-foreground">Tomorrow, 10:00 AM</div>
      </div>
    </div>
    <Button variant="outline" className="w-full text-blue-700 border-blue-200">View All Appointments</Button>
  </div>
);

export default UpcomingAppointmentCard;
