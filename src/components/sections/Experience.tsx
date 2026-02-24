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
      id: "dxc",
      title: "Junior Software Developer",
      company: "DXC Technology",
      location: "Varna, Bulgaria",
      period: "September 2025 – Present",
      status: "current",
      type: "Full-time",
      description: "Developing and maintaining enterprise insurance systems using GraphTalk, a proprietary domain-specific language for the insurance industry.",
      responsibilities: [
        "Developing and maintaining enterprise insurance systems using GraphTalk",
        "Collaborating with senior engineers on large-scale codebases",
        "Translating complex insurance business requirements into technical specifications",
        "Writing and reviewing code to meet enterprise-grade quality standards",
        "Participating in agile ceremonies and sprint planning"
      ],
      skills: ["GraphTalk", "Enterprise Systems", "Insurance Domain", "Agile", "Team Collaboration", "Code Review"]
    },
    {
      id: "own-projects",
      title: "Full-Stack Developer",
      company: "Self-Employed / Personal Projects",
      location: "Remote",
      period: "2020 – Present",
      status: "current",
      type: "Full-time",
      description: "Designing and building full-stack web applications and mobile apps from scratch, taking products from idea to live deployment. Delivered 4 client websites across healthcare, automotive, real estate, and fitness industries.",
      responsibilities: [
        "Full-stack web and mobile development using modern technologies",
        "Project planning, architecture design, and client communication",
        "Delivered 4 client websites in 3 months for local businesses",
        "Building and deploying production apps with real users",
        "Database design and management",
        "Deployment and ongoing maintenance of applications"
      ],
      skills: ["Full-Stack Development", "React", "Node.js", "React Native", "Project Management", "Client Relations", "Deployment"]
    },
    {
      id: "taxback",
      title: "Customer Service Representative",
      company: "Taxback / Sprintax",
      location: "Varna, Bulgaria",
      period: "December 2022 – September 2025",
      status: "completed",
      type: "Part-time",
      description: "Supporting non-US residents with U.S. tax return preparation and navigating Sprintax software. Guided users step by step, answered complex tax-related questions, ensuring accurate on-time filings.",
      responsibilities: [
        "Supporting non-US residents with U.S. tax return preparation",
        "Navigating and explaining Sprintax software to customers",
        "Answering complex tax-related questions accurately",
        "Ensuring on-time filings and customer satisfaction",
        "Maintaining detailed customer interaction records",
        "Collaborating with international teams across different time zones"
      ],
      skills: ["Customer Service", "Communication", "Tax Knowledge", "Sprintax", "Problem Solving", "Multi-tasking"]
    },
    {
      id: "summer-work",
      title: "Restaurant Manager",
      company: "Tony Harpers",
      location: "Old Forge, NY, USA",
      period: "May 2023 – November 2023",
      status: "completed",
      type: "Seasonal",
      description: "Led a team of 25+ staff in a fast-paced U.S. restaurant, managing daily operations, scheduling, and team coordination.",
      responsibilities: [
        "Led a team of 25+ staff in daily restaurant operations",
        "Managed scheduling, inventory, and supply chain logistics",
        "Ensured food safety and quality standards",
        "Handled customer service and complaint resolution",
        "Trained new staff members on procedures and standards",
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
                  <div className="flex flex-wrap justify-between items-start gap-3">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <Briefcase className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div className="min-w-0">
                        <CardTitle className="text-primary">{experience.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {experience.company} • {experience.location}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Calendar className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{experience.period}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 flex-shrink-0">
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
