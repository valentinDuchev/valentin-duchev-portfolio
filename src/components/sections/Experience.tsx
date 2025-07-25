import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  status: "current" | "completed";
  type: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      id: "own-projects",
      title: "Working on my own projects",
      company: "Self-Employed",
      location: "Remote",
      period: "October 2021 - Present",
      status: "current",
      type: "Full-time",
      description: "Please visit the Projects tab for more details",
      responsibilities: [
        "Full-stack web development using modern technologies",
        "Project planning and architecture design",
        "Client communication and requirement gathering",
        "Code optimization and performance improvement",
        "Database design and management",
        "Deployment and maintenance of applications"
      ],
      skills: ["Full-Stack Development", "Project Management", "Client Relations", "Problem Solving", "Independent Work", "Continuous Learning"]
    },
    {
      id: "taxback",
      title: "Customer Support Representative",
      company: "Taxback International",
      location: "Remote",
      period: "December 2022 - Present",
      status: "current",
      type: "Part-time",
      description: "Providing comprehensive customer support for tax refund services, handling client inquiries, and ensuring customer satisfaction through effective communication and problem-solving.",
      responsibilities: [
        "Handle customer inquiries via email, chat, and phone",
        "Process tax refund applications and documentation",
        "Provide technical support for online platforms",
        "Maintain detailed customer interaction records",
        "Collaborate with international teams across different time zones",
        "Ensure compliance with tax regulations and company policies"
      ],
      skills: ["Customer Service", "Communication", "Problem Solving", "Tax Knowledge", "Multi-tasking", "Documentation"]
    },
    {
      id: "summer-work",
      title: "Restaurant Manager",
      company: "Summer Work & Travel Program",
      location: "United States",
      period: "Summer 2022 & 2023",
      status: "completed",
      type: "Seasonal",
      description: "Managed restaurant operations during summer work and travel programs in the United States, developing leadership skills and cross-cultural communication abilities.",
      responsibilities: [
        "Supervised daily restaurant operations and staff",
        "Managed inventory and supply chain logistics",
        "Ensured food safety and quality standards",
        "Handled customer service and complaint resolution",
        "Trained new staff members on procedures and standards",
        "Coordinated with suppliers and vendors",
        "Managed cash flow and daily financial reporting"
      ],
      skills: ["Leadership", "Team Management", "Customer Service", "Inventory Management", "Cross-cultural Communication", "Problem Solving"]
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary mb-6">Professional Experience</h2>
      
      <div className="space-y-4">
        {experiences.map((experience) => (
          <Dialog key={experience.id}>
            <DialogTrigger asChild>
              <Card className="section-card cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <CardTitle className="text-primary">{experience.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {experience.company} • {experience.location}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{experience.period}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge variant={experience.status === "current" ? "default" : "secondary"}>
                        {experience.status === "current" ? "Current" : "Completed"}
                      </Badge>
                      <Badge variant="outline">{experience.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{experience.description}</p>
                </CardContent>
              </Card>
            </DialogTrigger>
            
            <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-primary flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  {experience.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold">Company</h4>
                    <p className="text-sm text-muted-foreground">{experience.company}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-sm text-muted-foreground">{experience.location}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Period</h4>
                    <p className="text-sm text-muted-foreground">{experience.period}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Type</h4>
                    <p className="text-sm text-muted-foreground">{experience.type}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Description</h4>
                  <p className="text-muted-foreground">{experience.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Skills Developed</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default Experience;