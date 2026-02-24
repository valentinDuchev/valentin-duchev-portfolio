import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
  ];

  const handleTabChange = (id: string) => {
    onTabChange(id);
    setMenuOpen(false);
  };

  const activeLabel = tabs.find((t) => t.id === activeTab)?.label ?? "Overview";

  return (
    <div className="flex justify-center mb-8 relative z-20">
      {/* Desktop nav */}
      <Card className="section-card w-fit hidden sm:block">
        <nav className="flex flex-wrap gap-2 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
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

      {/* Mobile nav */}
      <div className="sm:hidden w-full">
        <Card className="section-card">
          <div className="flex items-center justify-between px-1 py-1">
            <span className="font-medium text-primary text-sm px-2">{activeLabel}</span>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="p-2 rounded-lg bg-accent hover:bg-accent/80 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {menuOpen && (
            <nav className="flex flex-col gap-1 mt-2 border-t border-border pt-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent text-accent-foreground hover:bg-accent/80"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Navigation;
