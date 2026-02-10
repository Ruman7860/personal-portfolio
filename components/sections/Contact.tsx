"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Github, Send, ArrowRight } from "lucide-react";
import InteractiveCard from "@/components/ui/InteractiveCard";

/* ── Contact Links ── */
interface ContactLink {
    label: string;
    href: string;
    icon: React.ReactNode;
    description: string;
}

const contactLinks: ContactLink[] = [
    {
        label: "Email",
        href: "mailto:your.email@example.com",
        icon: <Mail className="h-5 w-5" />,
        description: "Drop me a line anytime",
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/your-profile",
        icon: <Linkedin className="h-5 w-5" />,
        description: "Let's connect professionally",
    },
    {
        label: "GitHub",
        href: "https://github.com/your-username",
        icon: <Github className="h-5 w-5" />,
        description: "Check out my code",
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
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
};

export default function Contact() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    return (
        <section
            id="contact"
            ref={sectionRef}
            aria-label="Contact Information"
            className="relative w-full overflow-hidden px-6 py-24 sm:px-12 lg:px-24"
            style={{
                background:
                    "linear-gradient(180deg, #0b0b0f 0%, #0e0e1a 50%, #0b0b0f 100%)",
            }}
        >
            {/* Background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/6 blur-[140px]" />
            </div>

            <motion.div
                variants={sectionVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="mx-auto max-w-7xl"
            >
                {/* Header */}
                <motion.div variants={fadeUp} className="text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-xs font-medium tracking-wide text-indigo-300">
                        <Send className="h-3 w-3" />
                        Get in Touch
                    </span>

                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Let&apos;s build{" "}
                        <span className="gradient-text">something together</span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
                        Interested in full-stack roles where I can work on real-world
                        systems and challenging problems. Always open to great
                        opportunities.
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <div className="mx-auto mt-16 grid max-w-3xl gap-4 sm:grid-cols-3">
                    {contactLinks.map((link, index) => (
                        <motion.div key={index} variants={cardVariant}>
                            <InteractiveCard
                                as="a"
                                href={link.href}
                                target={link.label !== "Email" ? "_blank" : undefined}
                                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                                className="flex flex-col items-center gap-3 px-6 py-8 text-center"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] text-gray-400 transition-colors group-hover:text-white">
                                    {link.icon}
                                </div>

                                <h3 className="text-sm font-bold text-white">{link.label}</h3>
                                <p className="text-xs text-gray-500">{link.description}</p>
                            </InteractiveCard>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    variants={fadeUp}
                    className="mt-12 flex justify-center"
                >
                    <motion.a
                        href="mailto:your.email@example.com"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="btn-glow inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-600 px-8 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-shadow hover:shadow-xl hover:shadow-indigo-500/30"
                    >
                        Say Hello
                        <ArrowRight className="h-4 w-4" />
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
}
