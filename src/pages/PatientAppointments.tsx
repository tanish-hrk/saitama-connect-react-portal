
import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, User, Plus, Video, Phone, X, CheckCircle } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

const appointments = [
  { 
    id: 1, 
    doctor: 'Dr. Sarah Johnson', 
    specialty: 'Neurologist',
    date: '2025-04-25', 
    time: '10:00 AM',
    type: 'In-Person',
    location: 'City Medical Center',
    status: 'Confirmed'
  },
  { 
    id: 2, 
    doctor: 'Dr. Michael Chen', 
    specialty: 'Oncologist',
    date: '2025-05-05', 
    time: '2:30 PM',
    type: 'Video',
    location: 'Virtual',
    status: 'Confirmed'
  },
  { 
    id: 3, 
    doctor: 'Dr. James Wilson', 
    specialty: 'Radiologist',
    date: '2025-05-15', 
    time: '11:15 AM',
    type: 'In-Person',
    location: 'City Medical Center',
    status: 'Pending'
  },
  { 
    id: 4, 
    doctor: 'Dr. Emily Davis', 
    specialty: 'Neurologist',
    date: '2025-03-15', 
    time: '9:00 AM',
    type: 'Phone',
    location: 'Virtual',
    status: 'Completed'
  },
];

const PatientAppointments = () => {
  const { toast } = useToast();
  
  const handleScheduleAppointment = () => {
    toast({
      title: "Schedule Appointment",
      description: "This feature would open a form to schedule a new appointment.",
    });
  };

  const handleAppointmentAction = (id: number, action: string) => {
    toast({
      title: `${action} Appointment`,
      description: `You've ${action.toLowerCase()}ed appointment #${id}`,
    });
  };

  return (
    <DashboardLayout portalType="patient">
      <div className="space-y-6 animate-[slide-in-top_0.4s_ease-out]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">My Appointments</h1>
            <p className="text-muted-foreground">Schedule and manage your healthcare appointments</p>
          </div>
          <Button onClick={handleScheduleAppointment}>
            <Plus size={16} className="mr-2" /> Schedule Appointment
          </Button>
        </div>

        <Card className="mb-8">
          <CardHeader className="bg-blue-50 rounded-t-lg">
            <CardTitle className="text-blue-800">Next Appointment</CardTitle>
            <CardDescription className="text-blue-600">
              Your upcoming appointment details
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <User className="text-blue-600" size={20} />
                  <div>
                    <p className="font-semibold text-lg">Dr. Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Neurologist</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="text-blue-600" size={20} />
                  <div>
                    <p className="font-medium">April 25, 2025</p>
                    <p className="text-sm text-muted-foreground">Friday</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="text-blue-600" size={20} />
                  <p className="font-medium">10:00 AM</p>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="text-blue-600" size={20} />
                  <div>
                    <p className="font-medium">City Medical Center</p>
                    <p className="text-sm text-muted-foreground">Floor 3, Room 302</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-800 flex items-center gap-1 mb-2">
                    <CheckCircle size={16} />
                    Appointment Confirmed
                  </h4>
                  <p className="text-sm text-green-700">Please arrive 15 minutes before your scheduled time.</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => handleAppointmentAction(1, "Reschedule")}>
                    Reschedule
                  </Button>
                  <Button variant="outline" onClick={() => handleAppointmentAction(1, "Cancel")}>
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-slate-50 rounded-t-lg">
            <CardTitle>All Appointments</CardTitle>
            <CardDescription>
              View and manage your past and upcoming appointments
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Doctor</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {appointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{appointment.doctor}</p>
                        <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-muted-foreground" />
                        <span>{appointment.date}</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Clock size={14} className="text-muted-foreground" />
                        <span>{appointment.time}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {appointment.type === 'Video' ? (
                          <Video size={14} className="text-blue-600" />
                        ) : appointment.type === 'Phone' ? (
                          <Phone size={14} className="text-purple-600" />
                        ) : (
                          <User size={14} className="text-green-600" />
                        )}
                        <span>{appointment.type}</span>
                      </div>
                    </TableCell>
                    <TableCell>{appointment.location}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        appointment.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                        appointment.status === 'Pending' ? 'bg-orange-100 text-orange-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {appointment.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      {appointment.status !== 'Completed' && (
                        <>
                          <Button variant="ghost" size="sm" onClick={() => handleAppointmentAction(appointment.id, "Reschedule")}>
                            Reschedule
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-500" onClick={() => handleAppointmentAction(appointment.id, "Cancel")}>
                            <X size={14} />
                          </Button>
                        </>
                      )}
                      {appointment.status === 'Completed' && (
                        <Button variant="ghost" size="sm" onClick={() => handleAppointmentAction(appointment.id, "ViewDetails")}>
                          View Details
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="bg-slate-50 rounded-b-lg justify-between">
            <p className="text-sm text-muted-foreground">Showing all appointments</p>
            <Button variant="outline" size="sm" onClick={handleScheduleAppointment}>
              Schedule New Appointment
            </Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default PatientAppointments;
