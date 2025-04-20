
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Calendar, EyeIcon, Share2, FileUp } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

const reports = [
  { id: 1, name: 'MRI Scan Results', date: '2025-04-10', doctor: 'Dr. Sarah Johnson', type: 'Brain Scan', status: 'New' },
  { id: 2, name: 'Blood Test Results', date: '2025-04-05', doctor: 'Dr. Michael Chen', type: 'Lab Work', status: 'Reviewed' },
  { id: 3, name: 'Neurological Assessment', date: '2025-03-28', doctor: 'Dr. Sarah Johnson', type: 'Assessment', status: 'Reviewed' },
  { id: 4, name: 'CT Scan Results', date: '2025-03-15', doctor: 'Dr. James Wilson', type: 'Brain Scan', status: 'Archived' },
];

const PatientReports = () => {
  const { toast } = useToast();
  
  const handleReportAction = (id: number, action: string) => {
    toast({
      title: `${action} Report`,
      description: `You've ${action.toLowerCase()}ed report #${id}`,
    });
  };

  const handleUploadReport = () => {
    toast({
      title: "Upload Report",
      description: "This feature would allow you to upload external medical reports.",
    });
  };

  return (
    <DashboardLayout portalType="patient">
      <div className="space-y-6 animate-[slide-in-top_0.4s_ease-out]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">Medical Reports</h1>
            <p className="text-muted-foreground">Access and manage all your medical reports</p>
          </div>
          <Button onClick={handleUploadReport}>
            <FileUp size={16} className="mr-2" /> Upload External Report
          </Button>
        </div>

        <Card>
          <CardHeader className="bg-slate-50 rounded-t-lg">
            <CardTitle>Your Medical Reports</CardTitle>
            <CardDescription>
              Review reports from your healthcare providers
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Report Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Doctor</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell className="font-medium flex items-center gap-2">
                      <FileText className="text-blue-500" size={16} />
                      {report.name}
                      {report.status === 'New' && (
                        <span className="px-2 py-0.5 text-xs bg-blue-100 text-blue-800 rounded-full">New</span>
                      )}
                    </TableCell>
                    <TableCell>{report.date}</TableCell>
                    <TableCell>{report.doctor}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        report.type === 'Brain Scan' ? 'bg-purple-100 text-purple-800' :
                        report.type === 'Lab Work' ? 'bg-green-100 text-green-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {report.type}
                      </span>
                    </TableCell>
                    <TableCell>{report.status}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" onClick={() => handleReportAction(report.id, "View")}>
                        <EyeIcon size={14} className="mr-1" /> View
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleReportAction(report.id, "Download")}>
                        <Download size={14} />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleReportAction(report.id, "Share")}>
                        <Share2 size={14} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="bg-slate-50 rounded-b-lg">
            <p className="text-sm text-muted-foreground">All reports are securely stored and encrypted</p>
          </CardFooter>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Brain Scans</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded flex items-center justify-center">
                    <FileText size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">MRI Scan Results</h4>
                    <p className="text-sm text-muted-foreground">April 10, 2025</p>
                    <Button variant="link" className="p-0 h-auto text-sm" onClick={() => handleReportAction(1, "View")}>
                      View Details
                    </Button>
                  </div>
                </div>
                
                <div className="p-4 border rounded flex items-center gap-4">
                  <div className="w-16 h-16 bg-purple-100 rounded flex items-center justify-center">
                    <FileText size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">CT Scan Results</h4>
                    <p className="text-sm text-muted-foreground">March 15, 2025</p>
                    <Button variant="link" className="p-0 h-auto text-sm" onClick={() => handleReportAction(4, "View")}>
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Tests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded flex items-center gap-4">
                  <div className="w-16 h-16 bg-green-100 rounded flex items-center justify-center">
                    <Calendar size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Follow-up MRI Scan</h4>
                    <p className="text-sm text-muted-foreground">May 15, 2025 at 10:00 AM</p>
                    <p className="text-sm text-muted-foreground">City Medical Center</p>
                  </div>
                </div>
                
                <div className="p-4 border rounded flex items-center gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded flex items-center justify-center">
                    <Calendar size={24} className="text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Blood Tests</h4>
                    <p className="text-sm text-muted-foreground">May 20, 2025 at 8:30 AM</p>
                    <p className="text-sm text-muted-foreground">City Medical Center</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PatientReports;
