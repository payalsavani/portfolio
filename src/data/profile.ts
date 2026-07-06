export const profile = {
  name: "Your Name",
  title: "Full-Stack Developer",
  tagline: "I build clean, fast, and reliable web applications.",
  location: "India",
  email: "harsh@fuselioautomation.com",
  socials: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    twitter: "",
  },
  about:
    "I'm a developer who enjoys turning ideas into simple, well-crafted products. I care about clean code, thoughtful UX, and shipping things that actually get used.",
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A short description of what this project does and the problem it solves.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "",
    repo: "",
  },
  {
    title: "Project Two",
    description:
      "A short description of what this project does and the problem it solves.",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "",
    repo: "",
  },
  {
    title: "Project Three",
    description:
      "A short description of what this project does and the problem it solves.",
    tags: ["Python", "FastAPI"],
    link: "",
    repo: "",
  },
];

export const skills: string[] = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Python",
  "SQL",
  "Git",
];
