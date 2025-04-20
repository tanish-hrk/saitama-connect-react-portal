
import React from "react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import { Home, Calendar, FileText, Brain, MessageSquare, AlertCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menu = [
  { path: "/patient", label: "Dashboard", icon: Home },
  { path: "/patient/appointments", label: "Appointments", icon: Calendar },
  { path: "/patient/reports", label: "Medical Reports", icon: FileText },
  { path: "/patient/symptoms", label: "Symptoms", icon: AlertCircle },
  { path: "/patient/scans", label: "Brain Scans", icon: Brain },
  { path: "/patient/messages", label: "Messages", icon: MessageSquare },
];

export default function PatientSidebar() {
  const location = useLocation();
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <img src="/favicon.ico" className="w-7 h-7 rounded" alt="Logo"/>
          <span className="font-bold text-lg text-blue-700">NeuroDetect</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menu.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.path}>
                    <Link to={item.path}>
                      <item.icon className="mr-2" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Your Wellness AI Tip</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="rounded-lg p-3 bg-blue-50 text-sm text-blue-700 space-y-2">
              <p>📅 Tip: Keeping your profile up-to-date helps us power better recommendations!</p>
              <p className="text-blue-400 font-semibold">Try tracking new symptoms daily for smarter health alerts.</p>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="text-xs text-gray-400 pl-2">NeuroDetect v1.0</div>
      </SidebarFooter>
    </Sidebar>
  );
}
