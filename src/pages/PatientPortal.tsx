
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PatientPortal = () => {
  // Mock data for dashboard stats
  const stats = [
    { title: "Upcoming Appointments", value: "2", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
    { title: "Unread Messages", value: "4", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
    { title: "Prescriptions", value: "3", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
    { title: "Medical Records", value: "12", icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  ];

  // Mock data for upcoming appointments
  const appointments = [
    { 
      id: 1, 
      doctor: "Dr. Sarah Johnson", 
      specialty: "Cardiologist", 
      date: "April 25, 2025", 
      time: "10:30 AM", 
      location: "Main Hospital, Room 305"
    },
    { 
      id: 2, 
      doctor: "Dr. Robert Chen", 
      specialty: "Dermatologist", 
      date: "May 3, 2025", 
      time: "2:15 PM", 
      location: "West Wing Clinic, Room 110"
    },
  ];

  return (
    <DashboardLayout portalType="patient">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Welcome, John!</h1>
          <p className="text-muted-foreground">Here's an overview of your health.</p>
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
        
        {/* Upcoming Appointments */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
            <CardDescription>Your schedule for the coming weeks.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div 
                  key={appointment.id} 
                  className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center"
                >
                  <div>
                    <h4 className="font-semibold text-blue-700">{appointment.doctor}</h4>
                    <p className="text-sm text-gray-600">{appointment.specialty}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {appointment.date}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {appointment.time}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 md:mt-0 w-full md:w-auto flex flex-wrap gap-2">
                    <Button size="sm" variant="outline">Reschedule</Button>
                    <Button size="sm" variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700">
                      Cancel
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button asChild>
                <Link to="/patient/appointments">View All Appointments</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Health Summary Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Records</CardTitle>
              <CardDescription>Your latest health entries</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="border-b border-gray-100 pb-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Blood Pressure</span>
                    <span className="text-blue-600">120/80 mmHg</span>
                  </div>
                  <span className="text-sm text-gray-500">April 15, 2025</span>
                </li>
                <li className="border-b border-gray-100 pb-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Weight</span>
                    <span className="text-blue-600">168 lbs</span>
                  </div>
                  <span className="text-sm text-gray-500">April 10, 2025</span>
                </li>
                <li>
                  <div className="flex justify-between">
                    <span className="font-medium">Blood Sugar (Fasting)</span>
                    <span className="text-blue-600">95 mg/dL</span>
                  </div>
                  <span className="text-sm text-gray-500">April 5, 2025</span>
                </li>
              </ul>
              <div className="mt-4 text-center">
                <Button asChild variant="outline">
                  <Link to="/patient/records">View All Records</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Messages</CardTitle>
              <CardDescription>Updates from your healthcare team</CardDescription>
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
                    <p className="font-medium">Dr. Sarah Johnson</p>
                    <p className="text-sm text-gray-600 truncate">Your test results are in. Everything looks normal...</p>
                    <span className="text-xs text-gray-500">2 hours ago</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Appointment Reminder</p>
                    <p className="text-sm text-gray-600 truncate">This is a reminder for your upcoming appointment...</p>
                    <span className="text-xs text-gray-500">Yesterday</span>
                  </div>
                </li>
              </ul>
              <div className="mt-4 text-center">
                <Button asChild variant="outline">
                  <Link to="/patient/messages">View All Messages</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PatientPortal;
