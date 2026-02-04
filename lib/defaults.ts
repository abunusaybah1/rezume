import { PortfolioData } from "./types";

export const DEFAULT_DATA: PortfolioData = {
  fullName: "Your Name",
  role: "Frontend Developer",
  location: "Lagos, Nigeria",
  email: "you@example.com",
  summary: "A brief summary about yourself.",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  about:
    "I build clean and responsive web interfaces. I enjoy turning ideas into usable products.",
  skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
  projects: [
    {
      id: "p1",
      title: "Portfolio Builder",
      description: "A nextjs web app that generates a portfolio from user inputs.",
      link: "https://localhost:3000",
      tech: "Next.js, TypeScript, tailwind",
    },
  ],
  theme: "light",
};
