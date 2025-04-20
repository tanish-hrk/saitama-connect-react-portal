
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface PortalCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkTo: string;
  buttonText: string;
  image: string;
  animation?: string;
}

const PortalCard: React.FC<PortalCardProps> = ({ 
  title, 
  description, 
  icon, 
  linkTo, 
  buttonText, 
  image,
  animation = "",
}) => {
  return (
    <Card className={`h-full flex flex-col border-2 border-blue-100 glass shadow-xl ${animation}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-fuchsia-100 flex items-center justify-center shadow">{icon}</span>
          <img src={image} alt={title} className="w-20 h-14 object-cover rounded-lg border-2 border-white shadow" />
        </div>
        <CardTitle className="text-2xl font-bold text-gray-900">{title}</CardTitle>
        <CardDescription className="text-gray-700 max-w-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm mt-2">
          <li className="flex items-center gap-2">
            <span className="w-4 h-4 bg-green-200 rounded-full flex items-center justify-center mr-1">
              <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            </span>
            Secure access to medical records
          </li>
          <li className="flex items-center gap-2">
            <span className="w-4 h-4 bg-yellow-100 rounded-full flex items-center justify-center mr-1">
              <svg className="w-3 h-3 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            </span>
            Easy appointment scheduling
          </li>
          <li className="flex items-center gap-2">
            <span className="w-4 h-4 bg-fuchsia-100 rounded-full flex items-center justify-center mr-1">
              <svg className="w-3 h-3 text-fuchsia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            </span>
            24/7 support & resources
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-fuchsia-600 hover:bg-blue-700 shadow text-base">
          <Link to={linkTo}>{buttonText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PortalCard;
