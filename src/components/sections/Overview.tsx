import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold">Junior Software Developer</h4>
              <p className="text-sm text-muted-foreground">DXC Technology</p>
              <p className="text-sm text-muted-foreground">September 2025 – Present</p>
            </div>
            <div>
              <h4 className="font-semibold">Full-Stack Developer</h4>
              <p className="text-sm text-muted-foreground">Self-Employed / Personal Projects</p>
              <p className="text-sm text-muted-foreground">2020 – Present</p>
            </div>
            <div>
              <h4 className="font-semibold">Customer Service Representative</h4>
              <p className="text-sm text-muted-foreground">Taxback / Sprintax</p>
              <p className="text-sm text-muted-foreground">December 2022 – September 2025</p>
            </div>
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
