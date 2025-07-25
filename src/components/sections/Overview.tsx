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
            Passionate Software Developer with expertise in full-stack web development. 
            Experienced in modern JavaScript frameworks, database management, and creating 
            scalable web applications. Currently pursuing Master's degree in Computer Science 
            while working as a Customer Support Representative. Strong background in both 
            frontend and backend technologies with a focus on React ecosystem and Node.js.
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
              <p className="text-sm text-muted-foreground">2021 - 2025</p>
            </div>
            <div>
              <h4 className="font-semibold">High School Diploma</h4>
              <p className="text-sm text-muted-foreground">Language School "Geo Milev"</p>
              <p className="text-sm text-muted-foreground">Dobrich, Bulgaria</p>
              <p className="text-sm text-muted-foreground">2016 - 2020</p>
            </div>
          </CardContent>
        </Card>

        <Card className="section-card">
          <CardHeader>
            <CardTitle className="text-primary">Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold">Customer Support Representative</h4>
              <p className="text-sm text-muted-foreground">Taxback International</p>
              <p className="text-sm text-muted-foreground">December 2022 - Present</p>
            </div>
            <div>
              <h4 className="font-semibold">Restaurant Manager</h4>
              <p className="text-sm text-muted-foreground">Summer Work & Travel Program, US</p>
              <p className="text-sm text-muted-foreground">Summer 2022 & 2023</p>
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
                <li>• React.js & React Native</li>
                <li>• Angular</li>
                <li>• HTML5 & CSS3</li>
                <li>• TailwindCSS</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Backend</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Node.js & Express</li>
                <li>• MongoDB & PostgreSQL</li>
                <li>• Prisma ORM</li>
                <li>• Socket.io & Redis</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Tools & Others</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Git Version Control</li>
                <li>• RESTful APIs</li>
                <li>• Real-time Applications</li>
                <li>• Responsive Design</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Overview;