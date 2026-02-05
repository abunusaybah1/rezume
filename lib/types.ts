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
    yoe: string;
    phone: string;
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
}

export interface Fields{
    label: string;
  children: React.ReactNode;
}



