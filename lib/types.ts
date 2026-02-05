export interface Project{
    id: string;
    title: string;
    description: string;
    link: string;
}

export interface PortfolioData{
    fullName: string;
    role: string;
    location: string;
    email: string;
    yoe: number;
    phone: number;
    portfolio: string;
    linkedin: string;
    github: string;
    about: string;
    skills: string[];
    languages: string[];
    projects: Project[];
    summary: string;   
}

export interface BuilderProps{
    data: PortfolioData;
    onChange: (data:PortfolioData) => void;
}

export interface ResumePreviewProps{
    data: PortfolioData;
    template?: "classic" | "modern";
}

export interface Fields{
    label: string;
  children: React.ReactNode;
}