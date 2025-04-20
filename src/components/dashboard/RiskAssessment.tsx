
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle } from 'lucide-react';

const RiskAssessment = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5" />
          Risk Assessment
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Based on your symptoms and medical history
          </p>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="font-semibold text-yellow-800 mb-1">Moderate Risk</div>
            <p className="text-sm text-yellow-700">
              Your reported symptoms suggest a moderate risk level. We recommend consulting with a specialist for further evaluation.
            </p>
          </div>

          <Button className="w-full">Schedule Consultation</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskAssessment;
