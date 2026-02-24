import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Briefcase, Calendar } from "lucide-react";
import { experiences } from "@/data/experiences";

const Experience = () => {

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
