import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";
import WorkflowDiagram from "@/components/WorkflowDiagram";

interface WorkflowStep {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  type: "action" | "system" | "database" | "process";
}

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  progress: number;
  status: "finished" | "in-progress";
  link?: string;
  year?: string;
  details: string;
  isPrivate?: boolean;
  logo?: string;
  featured?: boolean;
  liveUsers?: string;
  workflow?: WorkflowStep[];
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: "delta-football",
      name: "Delta Football League",
      description: "Complete management system for 6-a-side amateur football leagues",
      technologies: ["ReactJS", "NodeJS", "Express", "Prisma", "PostgreSQL", "Redis", "Socket.io", "HTML", "CSS"],
      progress: 100,
      status: "finished",
      link: "https://deltafootballbg.com",
      year: "2025",
      liveUsers: "200+ active users daily",
      details: "Fully deployed and actively used by 200+ players daily. Covers team management, player statistics tracking, league tables, and live match updates. Built with a modern full-stack architecture and optimised for real-time performance.",
      isPrivate: false,
      logo: "https://res.cloudinary.com/dnqsyelol/image/upload/v1751560243/Delta_png_qt7fip.png",
      featured: true,
      workflow: [
        {
          id: "add-data",
          title: "Add a player/team/match",
          type: "action",
          description: "Admin initiates the process by adding new data through the interface"
        },
        {
          id: "admin-app",
          title: "Admin app",
          subtitle: "delta.admin.app",
          type: "system",
          description: "Administrative interface for managing all football data and operations"
        },
        {
          id: "node-server",
          title: "Node.js server",
          subtitle: "(Render)",
          type: "system",
          description: "Backend server processes requests and handles business logic"
        },
        {
          id: "data-verification",
          title: "Info verified and recorded in DB",
          type: "process",
          description: "Data validation and storage in PostgreSQL database"
        },
        {
          id: "railway-db",
          title: "Railway DB",
          subtitle: "(Postgres)",
          type: "database",
          description: "Primary database storing all application data"
        },
        {
          id: "match-start",
          title: "Start a live match",
          type: "process",
          description: "Initiate real-time match tracking and data collection"
        },
        {
          id: "live-data",
          title: "Live match data recorded in DB every 2 mins",
          type: "process",
          description: "Continuous data updates during active matches"
        },
        {
          id: "redis",
          title: "Redis",
          type: "database",
          description: "Caching layer for real-time data and session management"
        },
        {
          id: "match-end",
          title: "Match ends, data saved, Redis cleared",
          type: "process",
          description: "Final data persistence and cache cleanup after match completion"
        }
      ]
    },
    {
      id: "sideby",
      name: "SideBy",
      description: "Sports tournament management platform",
      technologies: ["NextJS", "TypeScript", "NestJS", "PostgreSQL", "Redis", "React Native"],
      progress: 35,
      status: "in-progress",
      year: "2026",
      details: "A comprehensive sports tournament management platform featuring player management, tournament brackets, statistics tracking, and financial tools. MVP scheduled for May 2026.",
      isPrivate: true,
      logo: "/logos/sideby-logo.png"
    },
    {
      id: "forego",
      name: "ForeGo",
      description: "Risk-free betting platform with admin panel & mobile app",
      technologies: ["ReactJS", "React Native", "NodeJS", "MongoDB"],
      progress: 95,
      status: "in-progress",
      link: "https://forego.app",
      year: "2025",
      details: "Risk-free betting platform with a full admin panel and mobile experience. Designed the full-stack architecture including authentication, admin controls, and core business logic. Mobile app is finalising — ready to deploy to TestFlight (March 2026). All data and core features complete.",
      isPrivate: true,
      logo: "https://res.cloudinary.com/dnqsyelol/image/upload/v1753399520/Screenshot_2025-07-25_022507_dz6iix.png"
    },
    {
      id: "physio-home",
      name: "PhysioHome",
      description: "Physiotherapy clinic management system",
      technologies: ["ReactJS", "NodeJS", "Express", "TailwindCSS", "CSS", "HTML"],
      progress: 100,
      status: "finished",
      link: "https://physiohomebg.com",
      year: "2025",
      details: "A digital platform for a physiotherapy clinic to manage patient appointments, treatment plans, and progress tracking. Delivered as part of a 3-month client project sprint.",
      logo: "https://res.cloudinary.com/dnqsyelol/image/upload/v1753399770/Screenshot_2025-07-25_022919_xi2dag.png"
    },
    {
      id: "solofit",
      name: "SoloFit",
      description: "Gym website with integrated custom CMS",
      technologies: ["ReactJS", "NodeJS", "Express", "shadcn/ui", "TailwindCSS"],
      progress: 100,
      status: "finished",
      link: "https://solofit.bg",
      year: "2025",
      details: "Client website for a gym, built with a custom CMS allowing the owner to manage content, schedules, and offers without developer involvement. Delivered as part of a 3-month client project sprint.",
      logo: "/logos/solofit-logo.png"
    },
    {
      id: "tonga3",
      name: "Tonga3",
      description: "Real estate agency website",
      technologies: ["ReactJS", "NodeJS", "Express", "shadcn/ui", "TailwindCSS"],
      progress: 100,
      status: "finished",
      link: "https://tonga3.bg",
      year: "2025",
      details: "Client website for a real estate agency, focused on performance, usability, and business goals. Delivered as part of a 3-month client project sprint.",
      logo: "/logos/tonga3-logo.png"
    },
    {
      id: "pdr-dobrich",
      name: "PDR Dobrich",
      description: "Car tuning & repair shop website",
      technologies: ["ReactJS", "NodeJS", "Express", "shadcn/ui", "TailwindCSS"],
      progress: 100,
      status: "finished",
      link: "https://pdrdobrich.com",
      year: "2025",
      details: "Client website for a car tuning & repair shop, focused on performance, usability, and showcasing services. Delivered as part of a 3-month client project sprint.",
      logo: "/logos/pdr-dobrich-logo.png"
    },
    {
      id: "cookies-review",
      name: "Cookies",
      description: "Cookie review and rating platform",
      technologies: ["ReactJS", "TailwindCSS", "HTML", "CSS"],
      progress: 100,
      status: "finished",
      link: "https://cookies-review.vercel.app/",
      year: "2024",
      details: "A fun and interactive platform for reviewing and rating different types of cookies. Users can browse cookie reviews, add their own ratings, and discover new cookie varieties.",
      logo: "https://res.cloudinary.com/dnqsyelol/image/upload/v1753399691/ChatGPT_Image_Jul_25_2025_02_28_00_AM_oykvof.png"
    },
    {
      id: "cookbook",
      name: "My CookBook",
      description: "Recipe management application",
      technologies: ["Angular", "NodeJS", "HTML", "CSS"],
      progress: 100,
      status: "finished",
      year: "2022",
      details: "A personal recipe management application where users can store, organise, and share their favourite recipes. Features include ingredient lists, cooking instructions, and meal planning."
    },
    {
      id: "quizzer",
      name: "Quizzer",
      description: "Interactive quiz platform",
      technologies: ["ReactJS", "NodeJS", "HTML", "CSS"],
      progress: 100,
      status: "finished",
      year: "2022",
      details: "An interactive quiz platform for creating and taking custom quizzes. Features multiple question types, scoring system, and result analytics."
    }
  ];

  const getTechIcon = (tech: string) => {
    const icons: { [key: string]: string } = {
      "ReactJS": "⚛️",
      "React Native": "📱",
      "NodeJS": "🟢",
      "NestJS": "🦁",
      "NextJS": "▲",
      "Angular": "🅰️",
      "MongoDB": "🍃",
      "PostgreSQL": "🐘",
      "Prisma": "🔷",
      "Redis": "🔴",
      "Socket.io": "🔌",
      "Express": "🚂",
      "HTML": "🌐",
      "CSS": "🎨",
      "TailwindCSS": "💨",
      "TypeScript": "📘",
      "shadcn/ui": "🎭",
    };
    return icons[tech] || "🔧";
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary mb-6">Projects</h2>

      <div className="grid gap-6">
        {projects.map((project) => (
          <Dialog key={project.id}>
            <DialogTrigger asChild>
              <Card className={`section-card cursor-pointer ${
                project.featured
                  ? 'relative bg-gradient-to-br from-card via-card to-card/50 border-2 border-primary/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transform hover:scale-[1.02] transition-all duration-300'
                  : ''
              }`}>
                {project.featured && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <Badge className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg">
                      ⭐ Featured
                    </Badge>
                  </div>
                )}
                <CardHeader className={project.featured ? 'pb-4' : ''}>
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex-1 min-w-0">
                      <CardTitle className={`text-primary flex items-center gap-2 flex-wrap ${
                        project.featured ? 'text-xl' : ''
                      }`}>
                        {project.logo && (
                          <img
                            src={project.logo}
                            alt={`${project.name} logo`}
                            className={`object-contain rounded flex-shrink-0 ${
                              project.featured ? 'w-8 h-8' : 'w-6 h-6'
                            }`}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        )}
                        {project.name}
                        {project.link && (
                          <ExternalLink className="w-4 h-4" />
                        )}
                        {project.isPrivate && (
                          <Badge variant="secondary" className="text-xs">Private</Badge>
                        )}
                      </CardTitle>
                      <p className={`text-muted-foreground mt-1 ${
                        project.featured ? 'text-base' : 'text-sm'
                      }`}>
                        {project.description} • {project.year}
                      </p>
                      {project.liveUsers && (
                        <div className="mt-2">
                          <Badge className="bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-semibold">
                            🟢 {project.liveUsers}
                          </Badge>
                        </div>
                      )}
                    </div>
                    <Badge variant={project.status === "finished" ? "default" : "secondary"} className="flex-shrink-0">
                      {project.status === "finished" ? "Completed" : "In Progress"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <div key={tech} className="flex items-center gap-1 bg-accent px-2 py-1 rounded text-sm">
                          <span>{getTechIcon(tech)}</span>
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>

                    {/* Progress Bar */}
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className={`progress-bar ${project.featured ? 'h-3' : ''}`}>
                        <div
                          className={`progress-fill ${
                            project.featured && project.progress === 100
                              ? 'bg-gradient-to-r from-primary to-primary/80'
                              : ''
                          }`}
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Link */}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 text-primary hover:underline ${
                          project.featured
                            ? 'font-medium text-base bg-primary/10 px-3 py-1 rounded-lg hover:bg-primary/20 transition-colors duration-200'
                            : ''
                        }`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit Project
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>

            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-primary flex items-center gap-2">
                  {project.logo && (
                    <img
                      src={project.logo}
                      alt={`${project.name} logo`}
                      className="w-6 h-6 object-contain rounded"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  )}
                  {project.name}
                  {project.liveUsers && (
                    <Badge className="bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-semibold ml-2">
                      🟢 {project.liveUsers}
                    </Badge>
                  )}
                </DialogTitle>
              </DialogHeader>

              {project.workflow ? (
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="workflow">System Workflow</TabsTrigger>
                    <TabsTrigger value="tech">Technologies</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-4 mt-6">
                    <p className="text-muted-foreground">{project.details}</p>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold">Status</h4>
                        <p className="text-sm text-muted-foreground capitalize">{project.status === "finished" ? "Completed" : "In Progress"}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Completion</h4>
                        <p className="text-sm text-muted-foreground">{project.progress}%</p>
                      </div>
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit Project
                      </a>
                    )}
                  </TabsContent>

                  <TabsContent value="workflow" className="mt-6">
                    <WorkflowDiagram
                      steps={project.workflow}
                      title="Delta Football System Architecture & Data Flow"
                    />
                  </TabsContent>

                  <TabsContent value="tech" className="space-y-4 mt-6">
                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="flex items-center gap-1">
                            <span>{getTechIcon(tech)}</span>
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              ) : (
                <div className="space-y-4">
                  <p className="text-muted-foreground">{project.details}</p>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="flex items-center gap-1">
                          <span>{getTechIcon(tech)}</span>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold">Status</h4>
                      <p className="text-sm text-muted-foreground capitalize">{project.status === "finished" ? "Completed" : "In Progress"}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Completion</h4>
                      <p className="text-sm text-muted-foreground">{project.progress}%</p>
                    </div>
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Project
                    </a>
                  )}
                </div>
              )}
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default Projects;
