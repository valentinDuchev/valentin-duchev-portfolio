import { useState } from "react";
import { Card } from "@/components/ui/card";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "about", label: "About Me" }
  ];

  return (
    <div className="flex justify-center mb-8">
      <Card className="section-card w-fit">
        <nav className="flex flex-wrap gap-2 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                  : "bg-accent text-accent-foreground hover:bg-accent/80 glow-effect"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </Card>
    </div>
  );
};

export default Navigation;