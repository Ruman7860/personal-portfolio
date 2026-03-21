/* ── Experience Data ── */
export interface ExperienceEntry {
    company: string;
    role: string;
    duration: string;
    badge?: string;
    description: string;
    highlights: string[];
    tech: string[];
    metrics?: string[];
}

export const EXPERIENCE_DATA: ExperienceEntry[] = [
    {
        company: "Incresco",
        role: "Full-Stack Web Developer",
        duration: "Jan 2025 — Present",
        badge: "Intern → Full-Time",
        description:
            "Owning end-to-end development of scalable education platforms used by multiple institutions — from dynamic form engines to cloud-native integrations.",
        highlights: [
            "Architected a configurable multi-tenant form system serving multiple colleges with dynamic validations and conditional rendering",
            "Built production APIs with NestJS and integrated Salesforce for real-time student data synchronisation",
            "Designed document processing pipelines using AWS S3, Lambda, and SQS handling thousands of submissions",
            "Delivered features across the full stack — from responsive Next.js UIs to cloud infrastructure",
        ],
        tech: [
            "Next.js",
            "NestJS",
            "TypeScript",
            "AWS",
            "Salesforce",
            "DynamoDB",
            "S3",
            "Lambda",
            "SQS",
        ],
        metrics: ["Multi-tenant", "Production-grade", "1000s of submissions"],
    },
    {
        company: "MotionCut Video Studio",
        role: "Web Development Intern",
        duration: "Nov 2023 — Dec 2023",
        badge: "Internship",
        description:
            "Completed a 1-month internship focused on web development fundamentals, contributing to building responsive interfaces and strengthening core frontend and problem-solving skills.",
        highlights: [
            "Developed responsive web pages using HTML, CSS, and JavaScript with a focus on clean UI/UX",
            "Collaborated on small-scale projects to understand real-world development workflows",
            "Strengthened fundamentals of web development including DOM manipulation and layout design",
            "Demonstrated strong learning ability, dedication, and consistency throughout the internship",
        ],
        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "UI/UX",
        ],
        metrics: ["1 Month Internship", "Frontend Focused"],
    }
];
