import { Zap, Monitor, Server, Cloud, Wrench } from "lucide-react";

interface SkillCategory {
    name: string;
    icon: React.ReactNode;
    skills: string[];
}

export const SKILLCATEGORY: SkillCategory[] = [
    {
        name: "Frontend",
        icon: <Monitor className="h-4 w-4 text-indigo-400" />,
        skills: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Redux Toolkit",
            "React Query (TanStack Query)",
            "Framer Motion",
            "ShadCN UI",
            "i18next",
            "Atom",
            "NextAuth",
            "React Hook Form",
            "Zod",
        ],
    },
    {
        name: "Backend",
        icon: <Server className="h-4 w-4 text-violet-400" />,
        skills: [
            "Node.js",
            "NestJS",
            "Express.js",
            "REST APIs",
            "GraphQL",
            "Python",
            "FastAPI",
            "JWT Authentication",
            "OAuth",
            "WebSockets",
            "Socket.io",
            "Rate Limiting"
        ],
    },
    {
        name: "Databases & Cloud",
        icon: <Cloud className="h-4 w-4 text-cyan-400" />,
        skills: [
            "MongoDB",
            "DynamoDB",
            "SQL",
            "Prisma ORM",
            "AWS S3",
            "AWS Lambda",
            "AWS SQS",
            "PostgreSQL",
            "MySQL",
            "AWS EC2",
            "AWS ECS",
            "AWS API Gateway",
            "AWS CloudWatch",
            "AWS SNS",
            "AWS Lambda",
            "AWS EventBridge Scheduler",
            "Terraform",
            "AWS IAM",
            "Cloudinary"
        ],
    },
    {
        name: "Tools & DevOps",
        icon: <Wrench className="h-4 w-4 text-emerald-400" />,
        skills: [
            "Git",
            "GitHub",
            "Postman",
            "VS Code",
            "Docker",
            "CI/CD",
            "Cursor",
            "Antigravity",
            "AugmentAI",
            "Zed",
            "Roo Code",
            "Linux",
            "Nginx",
            "GitHub Actions",
        ],
    },
];