
import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import PatientSidebar from "@/components/sidebar/PatientSidebar";
import DoctorSidebar from "@/components/sidebar/DoctorSidebar";
import { useLocation } from "react-router-dom";

interface DashboardLayoutProps {
  children: React.ReactNode;
  portalType: "patient" | "doctor";
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, portalType }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <div className="hidden md:block">
          {portalType === "patient" ? <PatientSidebar /> : <DoctorSidebar />}
        </div>
        <main className="flex-1 p-4 pt-8 md:p-10 md:pt-14">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
