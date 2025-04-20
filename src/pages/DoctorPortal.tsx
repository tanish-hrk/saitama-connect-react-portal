
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DoctorPortal = () => {
  // Mock data for dashboard stats
  const stats = [
    { title: "Today's Appointments", value: "8", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
    { title: "Patients", value: "164", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
    { title: "Pending Reports", value: "12", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
    { title: "Messages", value: "18", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  ];

  // Mock data for upcoming appointments
  const appointments = [
    { 
      id: 1, 
      patient: "John Doe", 
      time: "9:00 AM", 
      purpose: "Annual Checkup", 
      status: "Confirmed" 
    },
    { 
      id: 2, 
      patient: "Sarah Johnson", 
      time: "10:30 AM", 
      purpose: "Follow-up", 
      status: "In Room" 
    },
    { 
      id: 3, 
      patient: "Robert Smith", 
      time: "11:45 AM", 
      purpose: "Lab Results", 
      status: "Confirmed" 
    },
    { 
      id: 4, 
      patient: "Emily Clark", 
      time: "2:15 PM", 
      purpose: "New Patient", 
      status: "Confirmed" 
    }
  ];

  return (
    <DashboardLayout portalType="doctor">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Welcome, Dr. Chen!</h1>
          <p className="text-muted-foreground">Here's your practice overview for today.</p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <svg 
                  className="h-4 w-4 text-muted-foreground" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stat.icon}></path>
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Appointments</CardTitle>
            <CardDescription>April 20, 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {appointments.map((appointment) => {
                let statusColor;
                switch(appointment.status) {
                  case "In Room":
                    statusColor = "bg-green-100 text-green-800";
                    break;
                  case "Confirmed":
                    statusColor = "bg-blue-100 text-blue-800";
                    break;
                  default:
                    statusColor = "bg-gray-100 text-gray-800";
                }
                
                return (
                  <div 
                    key={appointment.id} 
                    className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center"
                  >
                    <div>
                      <div className="flex items-center">
                        <h4 className="font-semibold text-blue-700">{appointment.patient}</h4>
                        <span className={`ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor}`}>
                          {appointment.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{appointment.purpose}</p>
                      <p className="text-sm font-medium">{appointment.time}</p>
                    </div>
                    <div className="mt-3 md:mt-0 w-full md:w-auto flex flex-wrap gap-2">
                      <Button size="sm">Start Visit</Button>
                      <Button size="sm" variant="outline">View Records</Button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 text-center">
              <Button asChild>
                <Link to="/doctor/appointments">View Full Schedule</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Recent Activities and Messages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Your latest actions</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="border-b border-gray-100 pb-3">
                  <p className="font-medium">Updated medical records for <span className="text-blue-600">Emily Clark</span></p>
                  <span className="text-sm text-gray-500">1 hour ago</span>
                </li>
                <li className="border-b border-gray-100 pb-3">
                  <p className="font-medium">Prescribed medication for <span className="text-blue-600">Robert Smith</span></p>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </li>
                <li>
                  <p className="font-medium">Reviewed lab results for <span className="text-blue-600">Sarah Johnson</span></p>
                  <span className="text-sm text-gray-500">Yesterday</span>
                </li>
              </ul>
              <div className="mt-4 text-center">
                <Button asChild variant="outline">
                  <Link to="/doctor/activity">View All Activity</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Messages</CardTitle>
              <CardDescription>Communications requiring your attention</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="border-b border-gray-100 pb-3 flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-gray-600 truncate">I'm experiencing some side effects from the medication...</p>
                    <span className="text-xs text-gray-500">30 minutes ago</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Pharmacy</p>
                    <p className="text-sm text-gray-600 truncate">Request for clarification on prescription for Sarah Johnson...</p>
                    <span className="text-xs text-gray-500">1 hour ago</span>
                  </div>
                </li>
              </ul>
              <div className="mt-4 text-center">
                <Button asChild variant="outline">
                  <Link to="/doctor/messages">View All Messages</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DoctorPortal;
