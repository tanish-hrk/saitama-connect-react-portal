
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Activity, Calendar, FileText, ThermometerIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardOverview = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Profile Completion Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Profile Completion</CardTitle>
            <ThermometerIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">66%</div>
            <Progress value={66} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              Complete your profile to get better recommendations
            </p>
          </CardContent>
        </Card>

        {/* Upcoming Appointment Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Next Appointment</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="font-semibold">Dr. Sarah Johnson</div>
            <div className="text-sm text-muted-foreground">Tomorrow, 10:00 AM</div>
            <Button asChild variant="link" className="px-0 mt-2">
              <Link to="/patient/appointments">View All Appointments</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Recent Reports Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Recent Reports</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <div className="text-sm text-muted-foreground">MRI scan results available</div>
            <Button asChild variant="link" className="px-0 mt-2">
              <Link to="/patient/reports">View Reports</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Symptom Tracking Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Symptoms</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <div className="text-sm text-muted-foreground">Headaches, vision changes, fatigue</div>
            <Button asChild variant="link" className="px-0 mt-2">
              <Link to="/patient/symptoms">Track Symptoms</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;
