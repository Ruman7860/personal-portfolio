"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

/* ── Rotating Keywords ── */
const ROTATING_WORDS = ["Scalable", "Performant", "Intelligent", "Beautiful"];

/* ── Animation Variants ── */
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const },
    },
};

const fadeUpSlow = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" as const },
    },
};

export default function Hero() {
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="hero"
            aria-label="Introduction"
            className="noise-overlay relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 sm:px-12 lg:px-24"
        >
            {/* ── Background Gradient Mesh ── */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                {/* Base gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.15),transparent)]" />

                {/* Animated Blobs */}
                <div className="animate-blob absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[120px]" />
                <div className="animate-blob-reverse absolute -bottom-40 right-1/4 h-[400px] w-[400px] rounded-full bg-violet-600/15 blur-[120px]" />
                <div className="animate-blob absolute right-1/3 top-1/3 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]" />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* ── Main Content ── */}
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-16 pt-20 lg:flex-row lg:items-center lg:gap-20">
                {/* ── Left Column: Text ── */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left"
                >
                    {/* Badge */}
                    <motion.div variants={fadeUp}>
                        <span className="animate-reveal inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-[family-name:var(--font-mono)] text-xs font-medium tracking-wide text-indigo-300">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400 animate-glow-pulse" />
                            Full-Stack Developer
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={fadeUp}
                        className="mt-8 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
                    >
                        Building{" "}
                        <span className="relative inline-block">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={ROTATING_WORDS[wordIndex]}
                                    initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="gradient-text inline-block"
                                >
                                    {ROTATING_WORDS[wordIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                        <br />
                        Web Experiences
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={fadeUp}
                        className="mt-6 max-w-lg text-base leading-relaxed text-gray-400 sm:text-lg"
                    >
                        I craft production-ready web applications using modern frontend,
                        backend, and cloud technologies — delivering systems that scale.
                    </motion.p>

                    {/* Supporting text */}
                    <motion.p
                        variants={fadeUp}
                        className="mt-3 max-w-lg text-sm leading-relaxed text-gray-500"
                    >
                        Currently contributing as a Full-Stack Developer at Incresco,
                        building real-world systems used by multiple institutions.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={fadeUp}
                        className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
                    >
                        <motion.a
                            href="#experience"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="btn-glow inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-600 px-8 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-shadow hover:shadow-xl hover:shadow-indigo-500/30"
                        >
                            View Experience
                            <ArrowRight className="h-4 w-4" />
                        </motion.a>

                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-8 text-sm font-semibold text-gray-300 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                        >
                            View Projects
                        </motion.a>
                    </motion.div>

                    {/* Stats / Social Proof */}
                    <motion.div
                        variants={fadeUp}
                        className="mt-12 flex items-center gap-8 text-sm text-gray-500"
                    >
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-white">2+</span>
                            <span>Years Exp.</span>
                        </div>
                        <div className="h-8 w-px bg-white/10" />
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-white">10+</span>
                            <span>Projects</span>
                        </div>
                        <div className="h-8 w-px bg-white/10" />
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-white">5+</span>
                            <span>Technologies</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* ── Right Column: Abstract Visual ── */}
                <motion.div
                    variants={fadeUpSlow}
                    initial="hidden"
                    animate="visible"
                    className="relative hidden flex-1 items-center justify-center lg:flex"
                >
                    {/* Outer ring */}
                    <div className="relative flex h-[420px] w-[420px] items-center justify-center xl:h-[480px] xl:w-[480px]">
                        {/* Rotating ring */}
                        <div className="absolute inset-0 rounded-full border border-white/[0.06]" />
                        <div
                            className="absolute inset-4 rounded-full border border-white/[0.04]"
                            style={{ animation: "spin 30s linear infinite" }}
                        />
                        <div className="absolute inset-8 rounded-full border border-dashed border-white/[0.05]" />

                        {/* Central glow orb */}
                        <div className="relative flex h-48 w-48 items-center justify-center xl:h-56 xl:w-56">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-cyan-500/10 blur-2xl animate-glow-pulse" />
                            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-indigo-600/20 to-violet-600/10 backdrop-blur-sm" />
                            <div className="absolute inset-0 rounded-full border border-white/[0.08]" />

                            {/* Code symbol */}
                            <span className="relative font-[family-name:var(--font-mono)] text-3xl font-bold text-white/80 xl:text-4xl">
                                {"</>"}
                            </span>
                        </div>

                        {/* Floating nodes */}
                        <FloatingNode
                            label="React"
                            position="top-4 left-1/2 -translate-x-1/2"
                            delay={0}
                        />
                        <FloatingNode
                            label="Node.js"
                            position="bottom-4 left-1/2 -translate-x-1/2"
                            delay={0.5}
                        />
                        <FloatingNode
                            label="AWS"
                            position="left-0 top-1/2 -translate-y-1/2"
                            delay={1}
                        />
                        <FloatingNode
                            label="TypeScript"
                            position="right-0 top-1/2 -translate-y-1/2"
                            delay={1.5}
                        />

                        {/* Corner accents */}
                        <div className="absolute -right-2 top-1/4 h-2 w-2 rounded-full bg-indigo-400/60 animate-glow-pulse" />
                        <div className="absolute -left-2 bottom-1/4 h-2 w-2 rounded-full bg-cyan-400/60 animate-glow-pulse" style={{ animationDelay: "1s" }} />
                        <div className="absolute bottom-12 right-12 h-1.5 w-1.5 rounded-full bg-violet-400/60 animate-glow-pulse" style={{ animationDelay: "2s" }} />
                    </div>
                </motion.div>
            </div>

            {/* ── Scroll Indicator ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-xs font-medium tracking-widest text-gray-500 uppercase">
                        Scroll
                    </span>
                    <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/10 p-1">
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="h-1.5 w-1 rounded-full bg-white/40"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}

/* ── Floating Tech Node ── */
function FloatingNode({
    label,
    position,
    delay,
}: {
    label: string;
    position: string;
    delay: number;
}) {
    return (
        <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
            }}
            className={`absolute ${position}`}
        >
            <div className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-gray-300 backdrop-blur-sm transition-colors hover:border-white/20 hover:text-white">
                {label}
            </div>
        </motion.div>
    );
}
