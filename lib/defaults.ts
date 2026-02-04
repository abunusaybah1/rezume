import { PortfolioData } from "./types";

export const DEFAULT_DATA: PortfolioData = {
  fullName: "",
  role: "",
  location: "",
  email: "",
  summary: "",
  github: "",
  linkedin: "",
  about:
    "",
  skills: [],
  projects: [
    {
      id: "",
      title: "",
      description: "",
      link: "",
      tech: "",
    },
  ],
  theme: "light",
};
