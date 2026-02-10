"use client";

import Image from "next/image";

/* ───────────────────────────────────────────────────────────────
   Projects Section
   Independent/Personal projects showcasing system design skills.
─────────────────────────────────────────────────────────────── */

interface Project {
    title: string;
    description: string;
    highlights: string[];
    role?: string;
    techStack: string[];
    githubUrl: string;
    liveUrl?: string;
    imagePlaceholder: string;
}

const projects: Project[] = [
    {
        title: "Multi-Tenant Electronic Medical Record (EMR) System",
        description:
            "A full-stack, multi-tenant healthcare system designed to manage patients, doctors, consultations, and medical records across multiple clinics.",
        highlights: [
            "Multi-tenant architecture",
            "Role-based access control",
            "Data isolation per tenant",
            "Real-world domain complexity",
        ],
        role: "Designed and implemented both frontend and backend systems with a focus on scalability, data separation, and real-time workflows.",
        techStack: ["Next.js", "NestJS", "Prisma", "MongoDB", "AWS", "Socket.io"],
        githubUrl: "#",
        liveUrl: "#",
        imagePlaceholder: "/project-emr.png",
    },
    {
        title: "AI Integration Platform",
        description:
            "A platform designed to integrate and manage AI capabilities such as conversational AI and automation for different applications.",
        highlights: [
            "API-driven architecture",
            "Modular and extensible design",
            "Real-world AI usage",
        ],
        role: "Built backend services, database models, and frontend interfaces to support scalable AI interactions.",
        techStack: ["Next.js", "NestJS", "Prisma", "OpenAI API", "MongoDB"],
        githubUrl: "#",
        imagePlaceholder: "/project-ai.png",
    },
    {
        title: "Real-Time Chat Application with Audio & Video",
        description:
            "A real-time communication platform supporting text chat, media sharing, and audio/video calls.",
        highlights: ["Real-time messaging", "Media uploads", "Audio/video calling"],
        techStack: ["MERN Stack", "Socket.IO", "Cloudinary", "LiveKit"],
        githubUrl: "#",
        imagePlaceholder: "/project-chat.png",
    },
    {
        title: "Text-to-Image Generator",
        description:
            "An AI-based application that generates images from user prompts using external AI APIs.",
        highlights: [
            "Prompt handling",
            "API integration",
            "Image rendering and storage",
        ],
        techStack: ["React", "Node.js", "AI APIs", "Cloud Storage"],
        githubUrl: "#",
        imagePlaceholder: "/project-image-gen.png",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            aria-label="Personal Projects"
            className="w-full bg-white px-6 py-20 dark:bg-zinc-950 sm:px-12 lg:px-24"
        >
            <div className="mx-auto max-w-5xl">
                {/* Section Header */}
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                    Projects
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                    A selection of independent projects that demonstrate my ability to
                    design, build, and deliver complete systems.
                </p>

                {/* Projects Grid */}
                <div className="mt-12 grid gap-8 sm:grid-cols-2">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
            {/* Image Placeholder */}
            <div className="relative aspect-video w-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                <Image
                    src={project.imagePlaceholder}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                        e.currentTarget.style.display = "none";
                    }}
                />
                {/* Fallback for missing images */}
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 dark:text-zinc-600">
                    <ProjectPlaceholderIcon />
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    {project.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {project.description}
                </p>

                {/* Highlights */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.highlights.map((highlight, index) => (
                        <span
                            key={index}
                            className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                        >
                            {highlight}
                        </span>
                    ))}
                </div>

                {/* Role if present */}
                {project.role && (
                    <p className="mt-3 text-xs italic leading-relaxed text-zinc-500 dark:text-zinc-500">
                        {project.role}
                    </p>
                )}

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="rounded border border-zinc-200 bg-white px-2 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="mt-auto flex gap-3 pt-5">
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
                    >
                        <GitHubIcon />
                        GitHub
                    </a>
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
                        >
                            <ExternalLinkIcon />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

/* ───────────────────────────────────────────────────────────────
   Icons
─────────────────────────────────────────────────────────────── */

function GitHubIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
            aria-hidden="true"
        >
            <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.138 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"
                clipRule="evenodd"
            />
        </svg>
    );
}

function ExternalLinkIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
            aria-hidden="true"
        >
            <path
                fillRule="evenodd"
                d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                clipRule="evenodd"
            />
            <path
                fillRule="evenodd"
                d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                clipRule="evenodd"
            />
        </svg>
    );
}

function ProjectPlaceholderIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-12 w-12"
            aria-hidden="true"
        >
            <path
                fillRule="evenodd"
                d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z"
                clipRule="evenodd"
            />
        </svg>
    );
}
