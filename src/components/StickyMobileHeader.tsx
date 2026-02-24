import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

interface Props {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const SCROLL_THRESHOLD = 180; // px — approx. past the regular nav + start of header

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
];

const StickyMobileHeader = ({ activeTab, onTabChange }: Props) => {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > SCROLL_THRESHOLD;
      setVisible(past);
      if (!past) setMenuOpen(false); // auto-close when back at top
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleTabChange = (id: string) => {
    onTabChange(id);
    setMenuOpen(false);
  };

  return (
    // sm:hidden — mobile only. fixed so it sits above everything.
    <div
      className={`
        fixed top-0 left-0 right-0 z-50 sm:hidden
        transition-transform duration-300 ease-in-out
        ${visible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      {/* ── Compact bar ─────────────────────────────────── */}
      <div
        className="bg-card/90 backdrop-blur-md border-b border-border shadow-lg px-5 py-3.5 flex items-center justify-between"
        style={{ paddingTop: 'calc(env(safe-area-inset-top) + 0.875rem)' }}
      >
        {/* Left: avatar + name */}
        <div className="flex items-center gap-3">
          <img
            src="https://res.cloudinary.com/dnqsyelol/image/upload/v1753401550/Screenshot_2025-07-25_014747_pxlu0x.png"
            alt="Valentin Duchev"
            className="w-10 h-10 rounded-full object-cover ring-1 ring-primary/40 flex-shrink-0"
          />
          <span className="font-bold text-primary text-base leading-none">
            Valentin Duchev
          </span>
        </div>

        {/* Right: theme toggle + hamburger */}
        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="p-2 rounded-lg bg-accent hover:bg-accent/80 transition-colors duration-200"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Nav dropdown ─────────────────────────────────── */}
      <div
        className={`
          bg-card/90 backdrop-blur-md border-b border-border shadow-lg
          overflow-hidden transition-all duration-300 ease-in-out
          ${menuOpen ? "max-h-64 pb-3" : "max-h-0"}
        `}
      >
        <nav className="flex flex-col gap-1 px-4 pt-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`w-full text-left px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-accent/60 text-accent-foreground hover:bg-accent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default StickyMobileHeader;
