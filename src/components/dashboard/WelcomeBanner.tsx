
import React from "react";

interface WelcomeBannerProps {
  name?: string;
}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ name = "John Doe" }) => (
  <div className="animate-fade-in bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-4 shadow">
    <div>
      <h1 className="text-2xl font-bold mb-1 text-blue-800">Welcome back, {name}!</h1>
      <p className="text-muted-foreground">Here's an overview of your health status.</p>
    </div>
    <div className="flex items-center gap-4 mt-2 md:mt-0">
      <span className="rounded-lg bg-green-100 text-green-700 px-3 py-1 text-sm font-semibold hover-scale cursor-pointer">
        💡 Health AI: Stay hydrated!
      </span>
    </div>
  </div>
);

export default WelcomeBanner;
