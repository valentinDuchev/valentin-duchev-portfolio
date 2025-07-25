import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { downloadCV } from "@/utils/generateCV";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiRedis,
  SiSocketdotio,
  SiVite,
  SiRadixui,
  SiZod,
  SiReacthookform,
  SiReactrouter,
  SiTanstackquery,
} from "react-icons/si";

interface LanguageProps {
  name: string;
  flag: string;
  progress: number;
}

const technologies = [
  { name: "JavaScript", icon: <SiJavascript className="w-6 h-6 text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 text-blue-500" /> },
  { name: "React", icon: <SiReact className="w-6 h-6 text-sky-400" /> },
  { name: "React Native", icon: <SiReact className="w-6 h-6 text-sky-300" /> },
  { name: "Angular", icon: <SiAngular className="w-6 h-6 text-red-600" /> },
  { name: "Node.js", icon: <SiNodedotjs className="w-6 h-6 text-green-500" /> },
  { name: "Express", icon: <SiExpress className="w-6 h-6 text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-green-600" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6 text-blue-400" /> },
  { name: "Prisma", icon: <SiPrisma className="w-6 h-6 text-indigo-400" /> },
  { name: "HTML5", icon: <SiHtml5 className="w-6 h-6 text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="w-6 h-6 text-blue-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" /> },
  { name: "Git", icon: <SiGit className="w-6 h-6 text-orange-600" /> },
  { name: "Redis", icon: <SiRedis className="w-6 h-6 text-red-500" /> },
  { name: "Socket.io", icon: <SiSocketdotio className="w-6 h-6 text-gray-100" /> },
];

const Language = ({ name, flag, progress }: LanguageProps) => (
  <div className="flex flex-col items-center">
    <span className="text-2xl mb-1">{flag}</span>
    <div className="w-8 h-1 bg-muted rounded-full overflow-hidden">
      <div 
        className="h-full bg-primary transition-all duration-300" 
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);

const Header = () => {
  const languages = [
    { name: "English", flag: "🇺🇸", progress: 100 },
    { name: "Bulgarian", flag: "🇧🇬", progress: 100 },
    { name: "German", flag: "🇩🇪", progress: 50 }
  ];

  return (
    <Card className="section-card mb-8 relative">
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <Dialog>
            <DialogTrigger asChild>
              <Avatar className="w-24 h-24 glow-effect cursor-pointer hover:scale-105 transition-transform duration-200">
                <AvatarImage src="https://res.cloudinary.com/dnqsyelol/image/upload/v1753401550/Screenshot_2025-07-25_014747_pxlu0x.png" alt="Valentin Duchev" />
                <AvatarFallback className="text-xl bg-muted">VD</AvatarFallback>
              </Avatar>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] p-0 border-0 bg-transparent">
              <div className="relative flex items-center justify-center">
                <img 
                  src="https://res.cloudinary.com/dnqsyelol/image/upload/v1753401550/Screenshot_2025-07-25_014747_pxlu0x.png" 
                  alt="Valentin Duchev - Full Size"
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Personal Info */}
        <div className="flex-1 space-y-3">
          <div>
            <h1 className="text-3xl font-bold text-primary">Valentin Duchev</h1>
            <p className="text-lg text-muted-foreground">Age: 23</p>
          </div>
          
          <div className="space-y-1 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Varna, Bulgaria</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>valentinducev77@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>0899921106</span>
            </div>
          </div>
        </div>

        {/* Social Links & CV Download - Top Right */}
        <div className="flex gap-3">
          <Button
            onClick={downloadCV}
            className="glow-effect p-2 rounded-lg bg-primary hover:bg-primary/80 text-primary-foreground"
            size="sm"
          >
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
          <a 
            href="https://github.com/valentinDuchev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glow-effect p-2 rounded-lg bg-accent hover:bg-accent/80"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/valentin-duchev-b747b1266/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glow-effect p-2 rounded-lg bg-accent hover:bg-accent/80"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Languages - Bottom Right Corner (above technologies) */}
      <div className="absolute bottom-44 right-6 flex gap-3">
        {languages.map((lang) => (
          <Language key={lang.name} {...lang} />
        ))}
      </div>
      {/* Technologies section at the bottom */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="overflow-hidden">
          <div className="flex gap-4 animate-scroll-right">
            <TooltipProvider>
              {/* Duplicate the technologies array to create seamless loop */}
              {[...technologies, ...technologies].map((tech, index) => (
                <Tooltip key={`${tech.name}-${index}`}>
                  <TooltipTrigger asChild>
                    <div className="glow-effect p-3 rounded-lg bg-accent/50 hover:bg-accent/80 transition-all duration-300 cursor-pointer group flex-shrink-0">
                      <div className="tech-icon group-hover:scale-110 transition-transform duration-200">
                        {tech.icon}
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="bg-card border-border">
                    <p className="font-medium">{tech.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Header;