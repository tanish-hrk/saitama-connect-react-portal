
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";

const DoctorDashboard = () => (
  <div className="space-y-8 animate-[slide-in-top_0.4s_ease-out]">
    <div className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-4 shadow">
      <div>
        <h1 className="text-2xl font-bold mb-1 text-purple-800">Welcome back, Dr. Michael Chen!</h1>
        <p className="text-muted-foreground">Check today's schedule and care stats.</p>
      </div>
      <div className="flex items-center gap-4 mt-2 md:mt-0">
        <span className="rounded-lg bg-orange-100 text-orange-700 px-3 py-1 text-sm font-semibold hover-scale cursor-pointer">
          📝 Tip: Review all new symptom reports at day start!
        </span>
      </div>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl shadow p-4 space-y-2 animate-fade-in">
        <h2 className="font-semibold text-lg mb-1">Today's Appointments</h2>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-800">John Doe - 10:00 AM</span>
          <span className="text-sm text-gray-800">Jane Smith - 12:00 PM</span>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-4 space-y-2 animate-fade-in">
        <h2 className="font-semibold text-lg mb-1">New Reports</h2>
        <p className="text-sm text-purple-600">3 new reports require attention.</p>
        <button className="text-blue-600 hover:underline text-xs">Review Reports</button>
      </div>
      <div className="bg-white rounded-xl shadow p-4 space-y-2 animate-fade-in">
        <h2 className="font-semibold text-lg mb-1">Patient Messages</h2>
        <span className="text-sm text-gray-600">2 unread messages</span>
      </div>
    </div>
    <div className="bg-white rounded-xl shadow p-4 mt-6 animate-fade-in">
      <h2 className="font-semibold text-lg mb-2">Recent Activity</h2>
      <ul className="pl-4 list-disc text-sm mb-1">
        <li>Reviewed MRI scan for John Doe</li>
        <li>Messaged with Jane Smith</li>
        <li>Completed annual checkup forms</li>
      </ul>
      <div className="mt-4 flex gap-2">
        <button className="bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700">Go to Patient List</button>
        <button className="bg-purple-100 text-purple-700 py-2 px-4 rounded shadow hover:bg-purple-200">Schedule Meeting</button>
      </div>
    </div>
  </div>
);

const DoctorPortal = () => {
  return (
    <DashboardLayout portalType="doctor">
      <DoctorDashboard />
    </DashboardLayout>
  );
};

export default DoctorPortal;
