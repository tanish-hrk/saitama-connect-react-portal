
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Upload } from 'lucide-react';

const BrainScanAnalysis = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Brain Scan Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Latest AI-powered analysis results. Upload your latest MRI scan for instant AI analysis.
          </p>
          
          <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
            <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
            <p className="text-sm font-medium">Drop your MRI scan here or</p>
            <Button variant="link" className="mt-1">
              browse files
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BrainScanAnalysis;
