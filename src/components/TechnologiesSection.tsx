import { Card } from "@/components/ui/card";

interface TechItem {
  name: string;
  icon: string;
  color: string;
}

const TechnologiesSection = () => {
  const technologies: TechItem[] = [
    { name: "JavaScript", icon: "🟨", color: "text-yellow-400" },
    { name: "ReactJS", icon: "⚛️", color: "text-blue-400" },
    { name: "React Native", icon: "📱", color: "text-blue-400" },
    { name: "Angular", icon: "🅰️", color: "text-red-400" },
    { name: "NodeJS", icon: "🟢", color: "text-green-400" },
    { name: "Express", icon: "🚂", color: "text-gray-400" },
    { name: "MongoDB", icon: "🍃", color: "text-green-400" },
    { name: "PostgreSQL", icon: "🐘", color: "text-blue-400" },
    { name: "Prisma", icon: "🔷", color: "text-blue-400" },
    { name: "HTML", icon: "🌐", color: "text-orange-400" },
    { name: "CSS", icon: "🎨", color: "text-blue-400" },
    { name: "TailwindCSS", icon: "💨", color: "text-cyan-400" },
    { name: "GIT", icon: "📚", color: "text-orange-400" },
    { name: "Redis", icon: "🔴", color: "text-red-400" },
    { name: "Socket.io", icon: "🔌", color: "text-gray-400" }
  ];

  return (
    <Card className="section-card mb-8">
      <h2 className="text-2xl font-bold text-primary mb-6">Technologies</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {technologies.map((tech) => (
          <div 
            key={tech.name}
            className="flex flex-col items-center p-4 rounded-lg bg-accent glow-effect cursor-pointer"
          >
            <span className="text-3xl mb-2">{tech.icon}</span>
            <span className="text-sm text-center font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TechnologiesSection;