"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, TrendingUp } from "lucide-react";
import InteractiveCard from "@/components/ui/InteractiveCard";
import { EXPERIENCE_DATA, ExperienceEntry } from "@/constants/experience-section-constants";


const experiences = EXPERIENCE_DATA;

/* ── Animation Variants ── */
const sectionVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
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
    hidden: { opacity: 0, y: 36 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: "easeOut" as const },
    },
};

export default function Experience() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    return (
        <section
            id="experience"
            ref={sectionRef}
            aria-label="Work Experience"
            className="relative w-full overflow-hidden px-6 pt-20 sm:px-12 lg:px-24"
            style={{
                background:
                    "linear-gradient(180deg, #0b0b0f 0%, #0f0f18 50%, #0b0b0f 100%)",
            }}
        >
            {/* ── Background Accents ── */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-indigo-600/8 blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 h-[350px] w-[350px] rounded-full bg-violet-600/6 blur-[100px]" />
                <div
                    className="absolute inset-0 opacity-[0.015]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <motion.div
                variants={sectionVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="mx-auto max-w-7xl"
            >
                {/* ── Section Header ── */}
                <motion.div variants={fadeUp}>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-1.5 font-mono text-xs font-medium tracking-wide text-indigo-300">
                        <Briefcase className="h-3 w-3" />
                        Experience
                    </span>

                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Building real-world systems{" "}
                        <span className="gradient-text">that scale</span>
                    </h2>

                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
                        Production-grade engineering across frontend, backend, and cloud —
                        focused on ownership, impact, and shipping systems that matter.
                    </p>
                </motion.div>

                {/* ── Timeline (Left-Oriented) ── */}
                <div className="relative mt-16">
                    {/* Vertical timeline line */}
                    <div className="absolute left-4 top-0 hidden h-full w-px sm:block">
                        <div className="h-full w-full bg-linear-to-b from-indigo-500/30 via-violet-500/20 to-transparent" />
                    </div>

                    {/* Experience Cards */}
                    <div className="flex flex-col gap-12">
                        {experiences.map((exp, index) => (
                            <TimelineCard
                                key={index}
                                experience={exp}
                                index={index}
                                isInView={isInView}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

/* ── Timeline Card (Left-Oriented) ── */
function TimelineCard({
    experience,
    index,
    isInView,
}: {
    experience: ExperienceEntry;
    index: number;
    isInView: boolean;
}) {
    return (
        <motion.div
            variants={cardVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: index * 0.15 }}
            className="relative flex gap-8 sm:pl-12"
        >
            {/* Timeline dot */}
            <div className="absolute left-2.5 top-3 z-10 hidden sm:block">
                <div className="relative flex h-3.5 w-3.5 items-center justify-center">
                    <div className="absolute h-3.5 w-3.5 rounded-full bg-indigo-500/20 animate-glow-pulse" />
                    <div className="h-2 w-2 rounded-full border-2 border-indigo-400 bg-[#0b0b0f]" />
                </div>
            </div>

            {/* Card */}
            <InteractiveCard className="w-full p-6 sm:p-8">
                {/* Header row */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-white sm:text-2xl">
                            {experience.company}
                        </h3>
                        <p className="mt-1 text-base font-medium text-indigo-300">
                            {experience.role}
                        </p>
                    </div>
                    <div className="flex flex-col items-start gap-1.5 sm:items-end">
                        <span className="text-sm font-medium text-gray-400">
                            {experience.duration}
                        </span>
                        {experience.badge && (
                            <span className="inline-flex rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-0.5 text-xs font-medium text-indigo-300">
                                {experience.badge}
                            </span>
                        )}
                    </div>
                </div>

                {/* Description */}
                <p className="mt-5 text-sm leading-relaxed text-gray-400">
                    {experience.description}
                </p>

                {/* Highlights */}
                <div className="mt-6 space-y-3">
                    {experience.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400/60" />
                            <span className="text-sm leading-relaxed text-gray-300">
                                {item}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Metrics */}
                {experience.metrics && experience.metrics.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-3">
                        {experience.metrics.map((metric, i) => (
                            <span
                                key={i}
                                className="inline-flex items-center gap-1.5 rounded-lg border border-white/6 bg-white/2 px-3 py-1.5 text-xs font-medium text-gray-300"
                            >
                                <TrendingUp className="h-3 w-3 text-indigo-400" />
                                {metric}
                            </span>
                        ))}
                    </div>
                )}

                {/* Divider */}
                <div className="my-6 h-px bg-linear-to-r from-white/6 via-white/3 to-transparent" />

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    {experience.tech.map((t, i) => (
                        <span
                            key={i}
                            className="rounded-md border border-white/6 bg-white/2 px-2.5 py-1 text-xs font-medium text-gray-400 transition-colors hover:border-white/10 hover:text-gray-300"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </InteractiveCard>
        </motion.div>
    );
}
