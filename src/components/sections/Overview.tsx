import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/experiences";

// Only show the top 3 experience items in the overview
const overviewExperiences = experiences.slice(0, 3);

const ExperienceModal = ({ experience }: { experience: typeof experiences[0] }) => (
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
);

const Overview = () => {
  return (
    <div className="space-y-6">
      <Card className="section-card">
        <CardHeader>
          <CardTitle className="text-primary">Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            Full-stack developer with a Computer Science degree and a track record of shipping real products.
            I've built and deployed live platforms used by real users, and I'm now gaining enterprise experience
            at DXC Technology. I work comfortably across React, Node.js, TypeScript, PostgreSQL, and React Native
            — solo or in a team.
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="section-card">
          <CardHeader>
            <CardTitle className="text-primary">Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold">Bachelor's Degree</h4>
              <p className="text-sm text-muted-foreground">Computer Science</p>
              <p className="text-sm text-muted-foreground">Technical University of Varna</p>
              <p className="text-sm text-muted-foreground">2020 – 2025</p>
            </div>
            <div>
              <h4 className="font-semibold">High School Diploma</h4>
              <p className="text-sm text-muted-foreground">Language School "Geo Milev"</p>
              <p className="text-sm text-muted-foreground">Dobrich, Bulgaria</p>
              <p className="text-sm text-muted-foreground">2016 – 2020</p>
            </div>
          </CardContent>
        </Card>

        <Card className="section-card">
          <CardHeader>
            <CardTitle className="text-primary">Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {overviewExperiences.map((exp) => (
              <Dialog key={exp.id}>
                <DialogTrigger asChild>
                  <div
                    className={`group cursor-pointer rounded-lg px-3 py-2.5 transition-all duration-200 hover:bg-accent/60 ${
                      exp.id === "dxc"
                        ? "border-l-2 border-primary bg-primary/5 hover:bg-primary/10"
                        : "border-l-2 border-transparent"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h4 className={`font-semibold text-sm ${exp.id === "dxc" ? "text-primary" : ""}`}>
                        {exp.title}
                      </h4>
                      {exp.id === "dxc" && (
                        <span className="flex items-center gap-1 text-xs text-green-400 font-medium flex-shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                    <p className="text-xs text-muted-foreground/70 mt-0.5">{exp.period}</p>
                  </div>
                </DialogTrigger>
                <ExperienceModal experience={exp} />
              </Dialog>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="section-card">
        <CardHeader>
          <CardTitle className="text-primary">Skills Highlights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Frontend</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• React.js / Next.js</li>
                <li>• React Native</li>
                <li>• Angular</li>
                <li>• TypeScript / JavaScript</li>
                <li>• HTML5 & CSS3</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Backend</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Node.js / NestJS / Express</li>
                <li>• PostgreSQL / MongoDB</li>
                <li>• Prisma ORM</li>
                <li>• Redis</li>
                <li>• REST APIs / WebSockets</li>
                <li>• GraphTalk</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Tools & Others</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Git / GitHub</li>
                <li>• Docker</li>
                <li>• Vercel / Netlify</li>
                <li>• Jira / Trello / Postman</li>
                <li>• Responsive Design / SEO</li>
                <li>• Agile / Scrum</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Overview;
