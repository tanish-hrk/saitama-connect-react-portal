
import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Plus, FileText, Calendar, Brain, Filter, User, MoreVertical } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

const patients = [
  { 
    id: 1, 
    name: 'John Doe', 
    age: 45,
    gender: 'Male',
    diagnosis: 'Glioblastoma',
    status: 'Critical',
    lastVisit: '2025-04-10',
    nextAppointment: '2025-04-25'
  },
  { 
    id: 2, 
    name: 'Jane Smith', 
    age: 38,
    gender: 'Female',
    diagnosis: 'Meningioma',
    status: 'Stable',
    lastVisit: '2025-04-05',
    nextAppointment: '2025-05-15'
  },
  { 
    id: 3, 
    name: 'Robert Johnson', 
    age: 62,
    gender: 'Male',
    diagnosis: 'Acoustic Neuroma',
    status: 'Improving',
    lastVisit: '2025-04-02',
    nextAppointment: '2025-05-02'
  },
  { 
    id: 4, 
    name: 'Emily Davis', 
    age: 29,
    gender: 'Female',
    diagnosis: 'Pituitary Tumor',
    status: 'Stable',
    lastVisit: '2025-03-28',
    nextAppointment: '2025-04-28'
  },
  { 
    id: 5, 
    name: 'Michael Wilson', 
    age: 55,
    gender: 'Male',
    diagnosis: 'Glioma',
    status: 'Critical',
    lastVisit: '2025-03-25',
    nextAppointment: '2025-04-20'
  },
];

const DoctorPatients = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();
  
  const filteredPatients = patients.filter(patient => 
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.diagnosis.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddPatient = () => {
    toast({
      title: "Add Patient",
      description: "This feature would open a form to add a new patient.",
    });
  };

  const handlePatientAction = (id: number, action: string) => {
    toast({
      title: `${action}`,
      description: `You've selected to ${action.toLowerCase()} for patient #${id}`,
    });
  };

  return (
    <DashboardLayout portalType="doctor">
      <div className="space-y-6 animate-[slide-in-top_0.4s_ease-out]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">My Patients</h1>
            <p className="text-muted-foreground">Manage and monitor your patients</p>
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
              <input
                type="text"
                placeholder="Search patients..."
                className="pl-9 pr-4 py-2 border rounded-md w-full md:w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button onClick={handleAddPatient}>
              <Plus size={16} className="mr-2" /> Add Patient
            </Button>
          </div>
        </div>

        <div className="flex justify-between mb-4">
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter size={14} className="mr-1" /> Filter
            </Button>
            <Button variant="outline" size="sm">All Patients</Button>
            <Button variant="outline" size="sm" className="bg-blue-50 border-blue-200 text-blue-700">Critical</Button>
            <Button variant="outline" size="sm">New</Button>
          </div>
          <div>
            <Button variant="ghost" size="sm">
              Export List
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader className="bg-slate-50 rounded-t-lg">
            <CardTitle>Patient Directory</CardTitle>
            <CardDescription>
              View and manage your patient information
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient</TableHead>
                  <TableHead>Diagnosis</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Visit</TableHead>
                  <TableHead>Next Appointment</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPatients.map((patient) => (
                  <TableRow key={patient.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <User size={18} className="text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">{patient.name}</p>
                          <p className="text-sm text-muted-foreground">{patient.age} yrs, {patient.gender}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="font-medium">{patient.diagnosis}</span>
                    </TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        patient.status === 'Critical' ? 'bg-red-100 text-red-800' :
                        patient.status === 'Stable' ? 'bg-green-100 text-green-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {patient.status}
                      </span>
                    </TableCell>
                    <TableCell>{patient.lastVisit}</TableCell>
                    <TableCell>{patient.nextAppointment}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" onClick={() => handlePatientAction(patient.id, "View Profile")}>
                        Profile
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handlePatientAction(patient.id, "View Scans")}>
                        <Brain size={14} />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handlePatientAction(patient.id, "View Records")}>
                        <FileText size={14} />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handlePatientAction(patient.id, "Schedule")}>
                        <Calendar size={14} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="bg-slate-50 rounded-b-lg">
            <p className="text-sm text-muted-foreground">Showing {filteredPatients.length} of {patients.length} patients</p>
          </CardFooter>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Patient Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Total Patients</span>
                  <span className="font-bold text-xl">{patients.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Critical Patients</span>
                  <span className="font-bold text-xl text-red-600">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>New This Month</span>
                  <span className="font-bold text-xl text-blue-600">3</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Diagnosis Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-40 bg-slate-100 rounded flex items-center justify-center">
                <p className="text-muted-foreground">Diagnosis chart would appear here</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="text-sm text-red-800">
                    <span className="font-semibold">John Doe</span> - MRI results require urgent review
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <span className="font-semibold">Jane Smith</span> - New symptom report submitted
                  </p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    <span className="font-semibold">Robert Johnson</span> - Treatment showing positive results
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DoctorPatients;
