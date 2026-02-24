import { useState } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import StickyMobileHeader from "@/components/StickyMobileHeader";
import Overview from "@/components/sections/Overview";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <Overview />;
      case "projects":
        return <Projects />;
      case "education":
        return <Education />;
      case "experience":
        return <Experience />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky compact header — mobile only, appears on scroll */}
      <StickyMobileHeader activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        <Header />
        {renderContent()}
      </div>
    </div>
  );
};

export default Index;
