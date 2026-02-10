"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Monitor, Server, Cloud, Wrench } from "lucide-react";
import InteractiveCard from "@/components/ui/InteractiveCard";

/* ── Skill Categories ── */
interface SkillCategory {
    name: string;
    icon: React.ReactNode;
    skills: string[];
}

const skillCategories: SkillCategory[] = [
    {
        name: "Frontend",
        icon: <Monitor className="h-4 w-4 text-indigo-400" />,
        skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
        name: "Backend",
        icon: <Server className="h-4 w-4 text-violet-400" />,
        skills: ["Node.js", "NestJS", "Express.js", "REST APIs", "GraphQL"],
    },
    {
        name: "Databases & Cloud",
        icon: <Cloud className="h-4 w-4 text-cyan-400" />,
        skills: ["MongoDB", "DynamoDB", "SQL", "Prisma ORM", "AWS S3", "AWS Lambda", "AWS SQS"],
    },
    {
        name: "Tools & DevOps",
        icon: <Wrench className="h-4 w-4 text-emerald-400" />,
        skills: ["Git", "GitHub", "Postman", "VS Code", "Docker", "CI/CD"],
    },
];

/* ── Animation Variants ── */
const sectionVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
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
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
};

export default function Skills() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    return (
        <section
            id="skills"
            ref={sectionRef}
            aria-label="Technical Skills"
            className="relative w-full overflow-hidden px-6 pt-20 sm:px-12 lg:px-24"
            style={{
                background:
                    "linear-gradient(180deg, #0b0b0f 0%, #0d0d15 50%, #0b0b0f 100%)",
            }}
        >
            {/* Background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/5 blur-[120px]" />
            </div>

            <motion.div
                variants={sectionVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="mx-auto max-w-7xl"
            >
                {/* Header */}
                <motion.div variants={fadeUp}>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-xs font-medium tracking-wide text-violet-300">
                        <Zap className="h-3 w-3" />
                        Tech Stack
                    </span>

                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Technologies I{" "}
                        <span className="gradient-text">work with</span>
                    </h2>

                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
                        A focused toolkit for building production-grade, full-stack
                        applications — from pixel-perfect UIs to scalable cloud backends.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="mt-16 grid gap-6 sm:grid-cols-2">
                    {skillCategories.map((category, index) => (
                        <motion.div key={index} variants={cardVariant}>
                            <InteractiveCard className="p-6 sm:p-8">
                                {/* Category header */}
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03]">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-base font-bold text-white">
                                        {category.name}
                                    </h3>
                                </div>

                                {/* Skills as chips */}
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {category.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-gray-400 transition-colors hover:border-white/12 hover:text-gray-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </InteractiveCard>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
