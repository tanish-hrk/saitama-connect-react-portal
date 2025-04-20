
import React from "react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import { Home, Calendar, File, MessageSquare, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menu = [
  { path: "/doctor", label: "Dashboard", icon: Home },
  { path: "/doctor/patients", label: "My Patients", icon: Users },
  { path: "/doctor/appointments", label: "Appointments", icon: Calendar },
  { path: "/doctor/prescriptions", label: "Prescriptions", icon: File },
  { path: "/doctor/messages", label: "Messages", icon: MessageSquare },
];

export default function DoctorSidebar() {
  const location = useLocation();
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <img src="/favicon.ico" className="w-7 h-7 rounded" alt="Logo"/>
          <span className="font-bold text-lg text-blue-700">Saitama</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Doctor Tools</SidebarGroupLabel>
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
          <SidebarGroupLabel>Quick Stats</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="p-3 rounded-lg bg-purple-100 text-purple-800 text-xs space-y-1">
              <div>👨‍⚕️ Patients Today: <b>14</b></div>
              <div>🕒 Appointments: <b>8</b></div>
              <div>🧑‍💻 Open Reports: <b>3</b></div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="text-xs text-gray-400 pl-2">Care made simple.</div>
      </SidebarFooter>
    </Sidebar>
  );
}
