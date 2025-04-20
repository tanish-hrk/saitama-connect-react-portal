
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const tabs = ["Overview", "Symptoms", "Recommendations"];

const OverviewTabs = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="mb-4">
      <div className="flex gap-3 mb-2">
        {tabs.map((tab, i) => (
          <Button
            key={tab}
            onClick={() => setActive(i)}
            variant={active === i ? "default" : "ghost"}
            className="rounded-full"
          >
            {tab}
          </Button>
        ))}
      </div>
      <div className="p-4 rounded-lg bg-gray-50 min-h-[60px]">
        {active === 0 && (
          <span>Your recent stats, appointments, and reports summary appears here!</span>
        )}
        {active === 1 && (
          <ul className="text-sm pl-4 list-disc">
            <li>Headaches (active)</li>
            <li>Vision changes (active)</li>
            <li>Fatigue (active)</li>
          </ul>
        )}
        {active === 2 && (
          <ol className="text-sm pl-4 list-decimal space-y-1">
            <li>Stay hydrated & take regular breaks.</li>
            <li>Book a follow-up if symptoms persist beyond 5 days.</li>
            <li>Keep your records current for best recommendations.</li>
          </ol>
        )}
      </div>
    </div>
  );
};

export default OverviewTabs;
