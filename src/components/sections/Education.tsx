import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Award } from "lucide-react";

interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  location: string;
  period: string;
  status: "completed" | "in-progress";
  details: string;
}

interface Course {
  id: string;
  name: string;
  provider: string;
  period: string;
  status: "completed";
  details: string;
}

const Education = () => {
  const education: EducationItem[] = [
    {
      id: "masters",
      institution: "Technical University of Varna",
      degree: "Master's Degree in Computer Science",
      location: "Varna, Bulgaria",
      period: "2025 - 2027",
      status: "in-progress",
      details: "Advanced studies in computer science focusing on software engineering, algorithms, and modern development practices."
    },
    {
      id: "bachelor",
      institution: "Technical University of Varna",
      degree: "Bachelor's Degree in Computer Science",
      location: "Varna, Bulgaria",
      period: "2021 - 2025",
      status: "completed",
      details: "Comprehensive study of computer science fundamentals including programming, data structures, algorithms, databases, software engineering, and web development. Graduated with strong knowledge in modern web technologies."
    },
    {
      id: "highschool",
      institution: "Language School \"Geo Milev\"",
      degree: "High School Diploma",
      location: "Dobrich, Bulgaria",
      period: "2016 - 2020",
      status: "completed",
      details: "Specialized in German and English languages. Developed strong communication skills and cultural awareness through intensive language study."
    }
  ];

  const courses: Course[] = [
    {
      id: "programming-basics",
      name: "Programming Basics",
      provider: "SoftUni",
      period: "January 2021",
      status: "completed",
      details: "Introduction to programming fundamentals including variables, conditional statements, loops, and basic problem-solving techniques."
    },
    {
      id: "programming-fundamentals-js",
      name: "Programming Fundamentals with JS",
      provider: "SoftUni",
      period: "May 2021",
      status: "completed",
      details: "Core programming concepts using JavaScript including data types, functions, arrays, objects, and algorithmic thinking."
    },
    {
      id: "js-advanced",
      name: "JS Advanced",
      provider: "SoftUni",
      period: "September 2021",
      status: "completed",
      details: "Advanced JavaScript concepts including closures, prototypes, asynchronous programming, and modern ES6+ features."
    },
    {
      id: "js-applications",
      name: "JS Applications",
      provider: "SoftUni",
      period: "October 2021",
      status: "completed",
      details: "Building dynamic web applications with JavaScript, DOM manipulation, HTTP requests, and client-server communication."
    },
    {
      id: "js-backend",
      name: "JS Back-End",
      provider: "SoftUni",
      period: "January 2022",
      status: "completed",
      details: "Server-side development with Node.js, Express.js, database integration, and REST API development."
    },
    {
      id: "angular",
      name: "Angular",
      provider: "SoftUni",
      period: "March 2022",
      status: "completed",
      details: "Comprehensive Angular framework course covering components, services, routing, forms, HTTP client, and application architecture."
    },
    {
      id: "html-css",
      name: "HTML&CSS",
      provider: "SoftUni",
      period: "January 2023",
      status: "completed",
      details: "Modern HTML5 and CSS3 development including semantic markup, responsive design, flexbox, grid, and web accessibility."
    },
    {
      id: "react",
      name: "ReactJS",
      provider: "SoftUni",
      period: "February 2023",
      status: "completed",
      details: "In-depth React course covering hooks, state management, component lifecycle, routing, and modern React development patterns."
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary mb-6">Education & Courses</h2>
      
      <Tabs defaultValue="education" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="education" className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            Education
          </TabsTrigger>
          <TabsTrigger value="courses" className="flex items-center gap-2">
            <Award className="w-4 h-4" />
            Courses
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="education" className="space-y-4 mt-6">
          {education.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="section-card cursor-pointer">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-primary">{item.degree}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.institution} • {item.location}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.period}
                        </p>
                      </div>
                      <Badge variant={item.status === "completed" ? "default" : "secondary"}>
                        {item.status === "completed" ? "Completed" : "In Progress"}
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              </DialogTrigger>
              
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-primary">{item.degree}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <h4 className="font-semibold">Institution</h4>
                      <p className="text-sm text-muted-foreground">{item.institution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-sm text-muted-foreground">{item.location}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Period</h4>
                      <p className="text-sm text-muted-foreground">{item.period}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Details</h4>
                    <p className="text-muted-foreground">{item.details}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </TabsContent>
        
        <TabsContent value="courses" className="space-y-4 mt-6">
          <Card className="section-card">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Award className="w-5 h-5" />
                SoftUni Courses (2021)
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Professional software development courses covering modern web technologies
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {courses.map((course) => (
                  <Dialog key={course.id}>
                    <DialogTrigger asChild>
                      <div className="flex justify-between items-center p-4 rounded-lg bg-accent glow-effect cursor-pointer">
                        <div>
                          <h4 className="font-medium">{course.name}</h4>
                          <p className="text-sm text-muted-foreground">{course.provider} • {course.period}</p>
                        </div>
                        <Badge variant="default">Completed</Badge>
                      </div>
                    </DialogTrigger>
                    
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="text-primary">{course.name}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold">Provider</h4>
                            <p className="text-sm text-muted-foreground">{course.provider}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">Completed</h4>
                            <p className="text-sm text-muted-foreground">{course.period}</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Course Details</h4>
                          <p className="text-muted-foreground">{course.details}</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Education;