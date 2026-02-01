export type Theme = "light" | "dark"

export interface Project{
    id: string;
    title: string;
    description: string;
    link: string;
    tech: string;
}

export interface PortfolioData{
    fullName: string;
    role: string;
    location: string;
    email: string;
    linkedin: string;
    about: string;
    skills: string[];
    projects: Project[];
    theme: Theme;
}