export interface ExperienceItem {
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

export const experiences: ExperienceItem[] = [
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
