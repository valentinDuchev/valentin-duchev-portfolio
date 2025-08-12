import { useState } from "react";
import Header from "@/components/Header";
// import TechnologiesSection from "@/components/TechnologiesSection";
import Navigation from "@/components/Navigation";
import Overview from "@/components/sections/Overview";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
// import About from "@/components/sections/About";

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
      case "about":
        return <div>About section coming soon</div>;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        <Header />
        {/* <TechnologiesSection /> */}
        {renderContent()}
      </div>
    </div>
  );
};

export default Index;
