
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpIcon, Heart } from 'lucide-react';

const HealthSummary = () => {
  const recentActivities = [
    {
      activity: "MRI scan completed",
      date: "June 15, 2023"
    },
    {
      activity: "Reported new symptoms",
      date: "June 10, 2023"
    },
    {
      activity: "Appointment with Dr. Johnson",
      date: "June 5, 2023"
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl">Health Summary</CardTitle>
          <Heart className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
              <ul className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <ArrowUpIcon className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <p className="font-medium">{activity.activity}</p>
                      <p className="text-sm text-muted-foreground">{activity.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Next Steps</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Complete your medical history</li>
                <li>Schedule follow-up appointment</li>
                <li>Track your symptoms daily</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HealthSummary;
