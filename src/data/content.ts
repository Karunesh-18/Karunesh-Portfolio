// Every fact here comes from Karunesh's resume (public/Karunesh-A-R-Resume.pdf)
// or the public GitHub repos. Nothing is estimated.

export const person = {
  name: "Karunesh A R",
  email: "karunesh.ar2024cse@sece.ac.in",
  github: "https://github.com/Karunesh-18",
  linkedin: "https://www.linkedin.com/in/karuneshar/",
  leetcode: "https://leetcode.com/u/KaruneshAR/",
  resume: "/Karunesh-A-R-Resume.pdf",
};

export type Project = {
  id: string;
  name: string;
  port: string;
  cable: string; // css var name
  line: string;
  detail: string;
  stack: string[];
  live?: string;
  repo: string;
};

export const projects: Project[] = [
  {
    id: "hustleguard",
    name: "HustleGuard AI",
    port: "P1",
    cable: "var(--cobalt)",
    line: "Parametric insurance platform with automated claims and fraud detection.",
    detail:
      "Real-time data ingestion, background processing for claim workflows, fraud detection and risk-based pricing models, packaged in Docker with environment-driven configuration.",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Celery", "Redis", "Docker", "ML"],
    live: "https://hustle-guard-ai.vercel.app",
    repo: "https://github.com/Karunesh-18/HustleGuard-AI",
  },
  {
    id: "rescueiq",
    name: "RescueIQ",
    port: "P2",
    cable: "var(--green)",
    line: "Predicts surplus food and routes it to NGOs through automated matching.",
    detail:
      "JWT auth with role-based access, live location tracking and mapping, NGO discovery, donation creation from plain language, impact analytics, and scheduled model retraining.",
    stack: ["React", "FastAPI", "PostgreSQL (Supabase)", "XGBoost", "Ollama"],
    live: "https://rescue-iq.vercel.app",
    repo: "https://github.com/Karunesh-18/RescueIQ",
  },
  {
    id: "voxmentor",
    name: "VoxMentor",
    port: "P3",
    cable: "var(--orange)",
    line: "AI coding mentor you can talk to: lessons, practice, and algorithm visualizers.",
    detail:
      "Skill-tree learning modules, daily challenges, AI feedback on submitted code, step-by-step algorithm visualization, XP and streak tracking, and voice in and out through speech-to-text and text-to-speech.",
    stack: ["React + Vite", "FastAPI", "MongoDB", "OpenRouter", "ElevenLabs"],
    live: "https://vox-mentor.vercel.app",
    repo: "https://github.com/Karunesh-18/VoxMentor",
  },
  {
    id: "thiran",
    name: "Thiran",
    port: "P4",
    cable: "var(--yellow)",
    line: "Event management platform built for a large technical event.",
    detail:
      "Registrations, participant engagement and operations in one app. Deployed to a server with SSL/TLS for HTTPS, then monitored and debugged while the event was running.",
    stack: ["React", "Node.js", "Express", "MongoDB", "SSL/TLS"],
    live: "https://thiran-two.vercel.app",
    repo: "https://github.com/Karunesh-18/thiran",
  },
];

export const experience = [
  {
    when: "May 2026 – now",
    role: "Full Stack Developer",
    org: "EFIQ Solutions",
    points: [
      "Builds and maintains web applications from development through deployment.",
      "Debugs and optimizes across several projects; helps with deployment and production fixes.",
    ],
  },
  {
    when: "March 2026",
    role: "MERN Stack Developer (internship)",
    org: "Better Tomorrow",
    points: [
      "Built full-stack apps on MongoDB, Express, React and Node with auth and database integration.",
      "Designed REST APIs, CRUD flows and performance fixes.",
    ],
  },
];

export const education = [
  { when: "2024 – 2028", what: "B.E. Computer Science and Engineering", where: "Sri Eshwar College of Engineering", score: "CGPA 7.5" },
  { when: "2022 – 2024", what: "HSC", where: "Bharatiya Vidhya Mandir Matric Hr. Sec. School", score: "79%" },
  { when: "2020 – 2022", what: "SSLC", where: "Shanthi Niketan Matric School", score: "75%" },
];

export const skills: { layer: string; items: string[] }[] = [
  { layer: "Languages", items: ["C", "C++", "Python", "SQL", "Java", "JavaScript", "Kotlin"] },
  { layer: "Web", items: ["React.js", "Node.js", "Express.js", "Django", "Spring Boot", "REST APIs"] },
  { layer: "Data", items: ["MySQL", "MongoDB"] },
  { layer: "Cloud", items: ["AWS EC2", "S3", "IAM", "VPC", "EBS", "CloudWatch", "Linux", "Docker", "CI/CD", "IaC"] },
  { layer: "Network", items: ["TCP/IP", "DNS", "DHCP", "HTTP/HTTPS", "SSL/TLS", "Subnetting", "Routing and switching", "Load balancing"] },
  { layer: "Tools", items: ["Git", "GitHub", "VS Code", "Postman", "MongoDB Compass", "MySQL Workbench", "Cisco Packet Tracer"] },
];

export const practice = [
  { what: "LeetCode", how: "155+ problems solved", href: "https://leetcode.com/u/KaruneshAR/" },
  { what: "SkillRack", how: "900+ problems, 8+ certificates", href: undefined },
  { what: "CodeChef", how: "Bronze badge", href: undefined },
];

export const certificates = [
  "Data Structures and Algorithms using C and C++ (Udemy)",
  "SQL Advanced (HackerRank)",
  "Oracle Java Course (Oracle)",
  "Introduction to Gen AI (IBM)",
];
