"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Github, ExternalLink, Stethoscope, Bot, MessageCircle, Palette } from "lucide-react";
import InteractiveCard from "@/components/ui/InteractiveCard";

/* ── Project Data ── */
interface Project {
    title: string;
    description: string;
    highlights: string[];
    tech: string[];
    githubUrl: string;
    liveUrl?: string;
    icon: React.ReactNode;
}

const projects: Project[] = [
    {
        title: "Multi-Tenant EMR System",
        description:
            "Full-stack healthcare platform managing patients, doctors, consultations, and medical records across multiple clinics with strict data isolation.",
        highlights: [
            "Multi-tenant architecture with per-tenant data isolation",
            "Role-based access control across clinic roles",
            "Real-time consultation workflows via Socket.io",
        ],
        tech: ["Next.js", "NestJS", "Prisma", "MongoDB", "AWS", "Socket.io"],
        githubUrl: "#",
        liveUrl: "#",
        icon: <Stethoscope className="h-5 w-5 text-indigo-400" />,
    },
    {
        title: "AI Integration Platform",
        description:
            "Modular platform for integrating conversational AI and automation capabilities into applications via an API-driven architecture.",
        highlights: [
            "API-driven, extensible plugin system",
            "Scalable backend for AI model orchestration",
            "Production-ready prompt management",
        ],
        tech: ["Next.js", "NestJS", "Prisma", "OpenAI API", "MongoDB"],
        githubUrl: "#",
        icon: <Bot className="h-5 w-5 text-violet-400" />,
    },
    {
        title: "Real-Time Chat Platform",
        description:
            "Communication platform with text chat, media sharing, and audio/video calling — built for real-time collaboration.",
        highlights: [
            "Bi-directional real-time messaging",
            "Audio & video calling with LiveKit",
            "Cloud-based media management",
        ],
        tech: ["MERN Stack", "Socket.IO", "Cloudinary", "LiveKit"],
        githubUrl: "#",
        icon: <MessageCircle className="h-5 w-5 text-cyan-400" />,
    },
    {
        title: "Text-to-Image Generator",
        description:
            "AI-powered application that generates images from text prompts, with cloud storage and a clean rendering interface.",
        highlights: [
            "Natural language prompt processing",
            "External AI API integration",
            "Cloud image storage & delivery",
        ],
        tech: ["React", "Node.js", "AI APIs", "Cloud Storage"],
        githubUrl: "#",
        icon: <Palette className="h-5 w-5 text-emerald-400" />,
    },
];

/* ── Animation Variants ── */
const sectionVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const },
    },
};

const cardVariant = {
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: "easeOut" as const },
    },
};

export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    return (
        <section
            id="projects"
            ref={sectionRef}
            aria-label="Personal Projects"
            className="relative w-full overflow-hidden bg-[#0b0b0f] px-6 pt-20 sm:px-12 lg:px-24"
        >
            {/* ── Background ── */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-cyan-600/6 blur-[120px]" />
                <div className="absolute bottom-1/4 left-0 h-[350px] w-[350px] rounded-full bg-indigo-600/5 blur-[100px]" />
            </div>

            <motion.div
                variants={sectionVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="mx-auto max-w-7xl"
            >
                {/* ── Header ── */}
                <motion.div variants={fadeUp}>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-xs font-medium tracking-wide text-cyan-300">
                        <Rocket className="h-3 w-3" />
                        Projects
                    </span>

                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Systems I&apos;ve{" "}
                        <span className="gradient-text">designed & built</span>
                    </h2>

                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
                        Independent projects that demonstrate end-to-end system design,
                        from architecture to deployment.
                    </p>
                </motion.div>

                {/* ── Projects Grid ── */}
                <div className="mt-16 grid gap-6 sm:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div key={index} variants={cardVariant}>
                            <InteractiveCard as="article" className="flex h-full flex-col">
                                {/* Header with icon */}
                                <div className="flex items-start justify-between p-6 pb-0 sm:p-8 sm:pb-0">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03]">
                                        {project.icon}
                                    </div>
                                    <div className="flex gap-2">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-gray-400 transition-colors hover:border-white/15 hover:text-white"
                                            aria-label="GitHub"
                                        >
                                            <Github className="h-4 w-4" />
                                        </a>
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-gray-400 transition-colors hover:border-white/15 hover:text-white"
                                                aria-label="Live Demo"
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-1 flex-col p-6 sm:p-8">
                                    <h3 className="text-lg font-bold text-white">
                                        {project.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                                        {project.description}
                                    </p>

                                    {/* Highlights */}
                                    <div className="mt-4 space-y-2">
                                        {project.highlights.map((h, i) => (
                                            <div key={i} className="flex items-start gap-2.5">
                                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400/60" />
                                                <span className="text-xs leading-relaxed text-gray-300">
                                                    {h}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Spacer */}
                                    <div className="flex-1" />

                                    {/* Divider + Tech */}
                                    <div className="mt-6 border-t border-white/[0.06] pt-4">
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tech.map((t, i) => (
                                                <span
                                                    key={i}
                                                    className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 text-[11px] font-medium text-gray-500 transition-colors hover:text-gray-300"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </InteractiveCard>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
