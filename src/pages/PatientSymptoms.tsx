
import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, ArrowRight, Edit, Trash2, AlertCircle, Check } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

const symptoms = [
  { id: 1, name: 'Headache', severity: 'Moderate', date: '2025-04-15', status: 'Active', notes: 'Usually in the morning' },
  { id: 2, name: 'Blurred Vision', severity: 'Mild', date: '2025-04-10', status: 'Active', notes: 'When reading for extended periods' },
  { id: 3, name: 'Dizziness', severity: 'Severe', date: '2025-04-05', status: 'Resolved', notes: 'After standing up quickly' },
  { id: 4, name: 'Nausea', severity: 'Moderate', date: '2025-04-02', status: 'Active', notes: 'After meals' },
];

const PatientSymptoms = () => {
  const [selectedSymptom, setSelectedSymptom] = useState<number | null>(null);
  const { toast } = useToast();

  const handleAddSymptom = () => {
    toast({
      title: "Add Symptom",
      description: "This feature would open a form to add a new symptom.",
    });
  };

  const handleReportSymptom = () => {
    toast({
      title: "Report Generated",
      description: "Your symptom report has been generated and shared with your doctor.",
    });
  };

  const handleSymptomAction = (id: number, action: string) => {
    toast({
      title: `${action} Symptom`,
      description: `You ${action.toLowerCase()}ed symptom #${id}`,
    });
  };

  return (
    <DashboardLayout portalType="patient">
      <div className="space-y-6 animate-[slide-in-top_0.4s_ease-out]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">Symptom Tracking</h1>
            <p className="text-muted-foreground">Track and manage your symptoms over time</p>
          </div>
          <div className="flex gap-3">
            <Button onClick={handleAddSymptom}>
              <Plus size={16} className="mr-1" /> Add Symptom
            </Button>
            <Button variant="outline" onClick={handleReportSymptom}>
              Generate Report <ArrowRight size={16} className="ml-1" />
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader className="bg-slate-50 rounded-t-lg">
            <CardTitle>Recent Symptoms</CardTitle>
            <CardDescription>
              Review and update your recorded symptoms
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead>Reported Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Notes</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {symptoms.map((symptom) => (
                  <TableRow key={symptom.id} className={selectedSymptom === symptom.id ? "bg-blue-50" : ""}>
                    <TableCell className="font-medium">{symptom.name}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        symptom.severity === 'Severe' ? 'bg-red-100 text-red-800' :
                        symptom.severity === 'Moderate' ? 'bg-orange-100 text-orange-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {symptom.severity}
                      </span>
                    </TableCell>
                    <TableCell>{symptom.date}</TableCell>
                    <TableCell>
                      <span className={`flex items-center gap-1 ${
                        symptom.status === 'Active' ? 'text-blue-600' : 'text-green-600'
                      }`}>
                        {symptom.status === 'Active' ? <AlertCircle size={14} /> : <Check size={14} />}
                        {symptom.status}
                      </span>
                    </TableCell>
                    <TableCell>{symptom.notes}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="ghost" size="sm" onClick={() => handleSymptomAction(symptom.id, "Edit")}>
                        <Edit size={14} />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleSymptomAction(symptom.id, "Delete")}>
                        <Trash2 size={14} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="bg-slate-50 rounded-b-lg">
            <p className="text-sm text-muted-foreground">Symptoms are automatically shared with your healthcare provider</p>
          </CardFooter>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Symptom History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Tracking your symptoms over time helps identify patterns and improve treatment.</p>
                <div className="h-40 bg-slate-100 rounded flex items-center justify-center">
                  <p className="text-muted-foreground">Symptom history chart would appear here</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>AI Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Our AI analyzes your symptom patterns to provide insights.</p>
                <div className="p-4 rounded border bg-blue-50">
                  <h4 className="font-semibold">Pattern Detected:</h4>
                  <p className="text-sm">Headaches are more frequent in the morning hours and may be related to sleep position.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PatientSymptoms;
