import { jsPDF } from 'jspdf';

interface CVData {
  personal: {
    name: string;
    title: string;
    age: number;
    location: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
  summary: string;
  experience: Array<{
    title: string;
    company: string;
    location: string;
    period: string;
    type: string;
    description: string;
    responsibilities: string[];
  }>;
  education: Array<{
    degree: string;
    institution: string;
    location: string;
    period: string;
    status: string;
  }>;
  projects: Array<{
    name: string;
    description: string;
    technologies: string[];
    year: string;
    status: string;
  }>;
  courses: Array<{
    name: string;
    provider: string;
    period: string;
  }>;
  technologies: Array<{
    name: string;
    category: string;
  }>;
  languages: Array<{
    name: string;
    level: string;
    progress: number;
  }>;
}

export const downloadCV = (): void => {
  const link = document.createElement('a');
  link.href = '/Duchev_CV.pdf';
  link.download = 'Valentin_Duchev_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const generateCV = (): void => {
  const cvData: CVData = {
    personal: {
      name: "Valentin Duchev",
      title: "Software Developer",
      age: 23,
      location: "Varna, Bulgaria",
      email: "valentinducev77@gmail.com",
      phone: "0899921106",
      github: "https://github.com/valentinDuchev",
      linkedin: "https://www.linkedin.com/in/valentin-duchev-b747b1266/"
    },
    summary: "I am a dedicated Software Engineering student with a strong drive to learn and grow while contributing to a company's success. My experience spans software development, personal projects, and hands-on collaboration with various technologies. I am passionate about learning new things and have experience with diverse tools and frameworks. I believe that the eagerness to learn matters more than merely knowing how to apply.",
    experience: [
      {
        title: "Customer Support Representative",
        company: "Taxback International",
        location: "Remote",
        period: "December 2022 - Present",
        type: "Part-time",
        description: "Providing comprehensive customer support for tax refund services",
        responsibilities: [
          "Handle customer inquiries via email, chat, and phone",
          "Process tax refund applications and documentation",
          "Provide technical support for online platforms",
          "Maintain detailed customer interaction records"
        ]
      },
      {
        title: "Restaurant Manager",
        company: "Summer Work & Travel Program",
        location: "United States",
        period: "Summer 2022 & 2023",
        type: "Seasonal",
        description: "Managed restaurant operations during summer work and travel programs",
        responsibilities: [
          "Supervised daily restaurant operations and staff",
          "Managed inventory and supply chain logistics",
          "Ensured food safety and quality standards",
          "Handled customer service and complaint resolution"
        ]
      }
    ],
    education: [
      {
        degree: "Master's Degree in Computer Science",
        institution: "Technical University of Varna",
        location: "Varna, Bulgaria",
        period: "2025 - 2027",
        status: "In Progress"
      },
      {
        degree: "Bachelor's Degree in Computer Science",
        institution: "Technical University of Varna",
        location: "Varna, Bulgaria",
        period: "2021 - 2025",
        status: "Completed"
      },
      {
        degree: "High School Diploma",
        institution: "Language School \"Geo Milev\"",
        location: "Dobrich, Bulgaria",
        period: "2016 - 2020",
        status: "Completed"
      }
    ],
    projects: [
      {
        name: "Delta Football",
        description: "Football management platform with real-time features",
        technologies: ["ReactJS", "NodeJS", "Prisma", "PostgreSQL", "Redis", "Socket.io"],
        year: "2024",
        status: "Completed"
      },
      {
        name: "Betlix",
        description: "Cross-platform betting application",
        technologies: ["ReactJS", "React Native", "MongoDB", "PostgreSQL", "Prisma", "NodeJS"],
        year: "2024",
        status: "In Progress"
      },
      {
        name: "PhysioHome",
        description: "Physiotherapy management system",
        technologies: ["ReactJS", "TailwindCSS", "CSS", "HTML"],
        year: "2024",
        status: "In Progress"
      },
      {
        name: "My CookBook",
        description: "Recipe management application",
        technologies: ["Angular", "NodeJS", "HTML", "CSS"],
        year: "2022",
        status: "Completed"
      }
    ],
    courses: [
      {
        name: "Full JS Path",
        provider: "SoftUni",
        period: "2021"
      },
      {
        name: "ReactJS",
        provider: "SoftUni",
        period: "2021"
      },
      {
        name: "Angular",
        provider: "SoftUni",
        period: "2021"
      },
      {
        name: "HTML & CSS",
        provider: "SoftUni",
        period: "2021"
      }
    ],
    technologies: [
      { name: "JavaScript", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "React", category: "Frontend" },
      { name: "React Native", category: "Mobile" },
      { name: "Angular", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "Express", category: "Backend" },
      { name: "MongoDB", category: "Database" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Prisma", category: "Database" },
      { name: "HTML5", category: "Frontend" },
      { name: "CSS3", category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "Git", category: "Tools" },
      { name: "Redis", category: "Database" },
      { name: "Socket.io", category: "Backend" }
    ],
    languages: [
      { name: "English", level: "Proficient", progress: 100 },
      { name: "Bulgarian", level: "Native", progress: 100 },
      { name: "German", level: "Advanced", progress: 50 }
    ]
  };

  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  let yPosition = 20;

  // Helper functions
  const addText = (text: string, x: number, y: number, options: any = {}) => {
    doc.setFontSize(options.fontSize || 10);
    doc.setFont(doc.getFont().fontName, options.fontStyle || 'normal');
    doc.text(text, x, y);
  };

  const addSection = (title: string, y: number): number => {
    doc.setFillColor(64, 64, 64);
    doc.rect(10, y - 5, pageWidth - 20, 10, 'F');
    doc.setTextColor(255, 255, 255);
    addText(title.toUpperCase(), 12, y + 1, { fontSize: 12, fontStyle: 'bold' });
    doc.setTextColor(0, 0, 0);
    return y + 15;
  };

  const checkPageBreak = (requiredSpace: number): number => {
    if (yPosition + requiredSpace > pageHeight - 20) {
      doc.addPage();
      return 20;
    }
    return yPosition;
  };

  // Header with personal info
  doc.setFillColor(245, 245, 245);
  doc.rect(0, 0, pageWidth, 50, 'F');
  
  addText(cvData.personal.name, 15, 20, { fontSize: 24, fontStyle: 'bold' });
  addText(cvData.personal.title, 15, 30, { fontSize: 14 });
  
  // Contact info on the right
  const contactX = pageWidth - 70;
  addText(`+${cvData.personal.phone}`, contactX, 15, { fontSize: 10 });
  addText(cvData.personal.email, contactX, 22, { fontSize: 10 });
  addText(cvData.personal.location, contactX, 29, { fontSize: 10 });
  addText('GitHub', contactX, 36, { fontSize: 10 });
  addText('LinkedIn', contactX, 43, { fontSize: 10 });

  yPosition = 60;

  // Summary
  yPosition = addSection('Summary', yPosition);
  const summaryLines = doc.splitTextToSize(cvData.summary, pageWidth - 30);
  doc.text(summaryLines, 15, yPosition);
  yPosition += summaryLines.length * 5 + 10;

  // Experience
  yPosition = checkPageBreak(30);
  yPosition = addSection('Experience', yPosition);
  
  cvData.experience.forEach((exp) => {
    yPosition = checkPageBreak(40);
    addText(`${exp.title} - ${exp.company}`, 15, yPosition, { fontSize: 12, fontStyle: 'bold' });
    addText(`${exp.period} | ${exp.location}`, pageWidth - 80, yPosition, { fontSize: 10 });
    yPosition += 8;
    
    const descLines = doc.splitTextToSize(exp.description, pageWidth - 30);
    doc.text(descLines, 15, yPosition);
    yPosition += descLines.length * 5 + 5;
    
    exp.responsibilities.slice(0, 4).forEach((resp) => {
      yPosition = checkPageBreak(5);
      const respLines = doc.splitTextToSize(`• ${resp}`, pageWidth - 35);
      doc.text(respLines, 20, yPosition);
      yPosition += respLines.length * 4 + 2;
    });
    yPosition += 5;
  });

  // Education
  yPosition = checkPageBreak(30);
  yPosition = addSection('Education', yPosition);
  
  cvData.education.forEach((edu) => {
    yPosition = checkPageBreak(15);
    addText(`${edu.degree}`, 15, yPosition, { fontSize: 11, fontStyle: 'bold' });
    addText(edu.period, pageWidth - 50, yPosition, { fontSize: 10 });
    yPosition += 6;
    addText(`${edu.institution}, ${edu.location}`, 15, yPosition, { fontSize: 10 });
    yPosition += 10;
  });

  // Projects
  yPosition = checkPageBreak(30);
  yPosition = addSection('Projects', yPosition);
  
  cvData.projects.forEach((project) => {
    yPosition = checkPageBreak(20);
    addText(`${project.name} (${project.year})`, 15, yPosition, { fontSize: 11, fontStyle: 'bold' });
    addText(project.status, pageWidth - 40, yPosition, { fontSize: 9 });
    yPosition += 6;
    
    const projLines = doc.splitTextToSize(project.description, pageWidth - 30);
    doc.text(projLines, 15, yPosition);
    yPosition += projLines.length * 4 + 3;
    
    addText(`Technologies: ${project.technologies.join(', ')}`, 15, yPosition, { fontSize: 9 });
    yPosition += 8;
  });

  // Industry Expertise (Technologies)
  yPosition = checkPageBreak(40);
  yPosition = addSection('Industry Expertise', yPosition);
  
  const techsByCategory = cvData.technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) acc[tech.category] = [];
    acc[tech.category].push(tech.name);
    return acc;
  }, {} as Record<string, string[]>);

  Object.entries(techsByCategory).forEach(([category, techs]) => {
    yPosition = checkPageBreak(10);
    addText(`${category}:`, 15, yPosition, { fontSize: 10, fontStyle: 'bold' });
    yPosition += 5;
    addText(techs.join(', '), 15, yPosition, { fontSize: 9 });
    yPosition += 8;
  });

  // Courses
  yPosition = checkPageBreak(25);
  yPosition = addSection('Courses', yPosition);
  
  cvData.courses.forEach((course) => {
    yPosition = checkPageBreak(8);
    addText(`${course.name} - ${course.provider}`, 15, yPosition, { fontSize: 10 });
    addText(course.period, pageWidth - 30, yPosition, { fontSize: 9 });
    yPosition += 6;
  });

  // Languages
  yPosition = checkPageBreak(20);
  yPosition = addSection('Languages', yPosition);
  
  cvData.languages.forEach((lang) => {
    yPosition = checkPageBreak(6);
    addText(`${lang.name}`, 15, yPosition, { fontSize: 10, fontStyle: 'bold' });
    addText(lang.level, 60, yPosition, { fontSize: 10 });
    
    // Progress bar
    doc.setFillColor(200, 200, 200);
    doc.rect(100, yPosition - 3, 50, 3, 'F');
    doc.setFillColor(100, 100, 100);
    doc.rect(100, yPosition - 3, (50 * lang.progress) / 100, 3, 'F');
    
    yPosition += 8;
  });

  // References
  yPosition = checkPageBreak(15);
  yPosition = addSection('References', yPosition);
  addText('Hristiyan Vasilev (Steven Harris)', 15, yPosition, { fontSize: 10, fontStyle: 'bold' });
  addText('sherris@expresss.com', 15, yPosition + 6, { fontSize: 10 });

  // Save the PDF
  doc.save('Valentin_Duchev_CV.pdf');
};