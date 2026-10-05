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
    line: "Parametric insurance with automated claims and fraud checks.",
    detail:
      "Pulls in live data, runs claim workflows in the background on Celery and Redis, flags fraud, and prices risk with a model. Packaged in Docker.",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Celery", "Redis", "Docker", "ML"],
    live: "https://hustle-guard-ai.vercel.app",
    repo: "https://github.com/Karunesh-18/HustleGuard-AI",
  },
  {
    id: "rescueiq",
    name: "RescueIQ",
    port: "P2",
    cable: "var(--green)",
    line: "Predicts surplus food and matches it to NGOs.",
    detail:
      "Donors describe a donation in plain language. NGOs find it and track pickups on a live map. Logins are role-based, and the prediction model retrains on a schedule.",
    stack: ["React", "FastAPI", "PostgreSQL (Supabase)", "XGBoost", "Ollama"],
    live: "https://rescue-iq.vercel.app",
    repo: "https://github.com/Karunesh-18/RescueIQ",
  },
  {
    id: "voxmentor",
    name: "VoxMentor",
    port: "P3",
    cable: "var(--orange)",
    line: "A coding tutor you can talk to.",
    detail:
      "Lessons laid out as skill trees, daily challenges, AI feedback on the code you submit, and step-by-step algorithm visualizers. XP and streaks track progress, and you can speak to it through ElevenLabs.",
    stack: ["React + Vite", "FastAPI", "MongoDB", "OpenRouter", "ElevenLabs"],
    live: "https://vox-mentor.vercel.app",
    repo: "https://github.com/Karunesh-18/VoxMentor",
  },
  {
    id: "thiran",
    name: "Thiran",
    port: "P4",
    cable: "var(--yellow)",
    line: "Registration and operations for a large technical event.",
    detail:
      "One app for sign-ups, participant engagement and the organisers' workflow. Deployed with HTTPS, then monitored and debugged while the event was running.",
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
      "Builds and maintains web apps from first commit to deployment.",
      "Debugs and tunes several projects, and helps fix issues in production.",
    ],
  },
];

export const education = [
  { when: "2024 – 2028", what: "B.E. Computer Science and Engineering", where: "Sri Eshwar College of Engineering" },
  { when: "2022 – 2024", what: "HSC", where: "Bharatiya Vidhya Mandir Matric Hr. Sec. School" },
  { when: "2020 – 2022", what: "SSLC", where: "Shanthi Niketan Matric School" },
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

export const gallery = [
  { file: "gallery-workspace.svg", caption: "Workspace" },
  { file: "gallery-event.svg", caption: "Thiran event day" },
  { file: "gallery-hackathon.svg", caption: "Hackathon" },
  { file: "gallery-team.svg", caption: "Team" },
  { file: "gallery-whiteboard.svg", caption: "Whiteboard session" },
  { file: "gallery-setup.svg", caption: "Dev setup" },
];

// Counts taken straight from the resume.
export const facts = [
  { what: "Live projects", value: "4" },
  { what: "LeetCode solved", value: "155+" },
  { what: "SkillRack solved", value: "900+" },
];
