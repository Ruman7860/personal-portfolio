"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const footerLinks = [
    { label: "Home", href: "#hero" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="relative w-full border-t border-white/[0.06] px-6 py-10 sm:px-12 lg:px-24"
            style={{ background: "#08080c" }}
        >
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
                {/* Logo */}
                <div className="flex flex-col items-center gap-1 sm:items-start">
                    <a href="#hero" className="text-lg font-bold tracking-tight">
                        <span className="gradient-text">Md Ruman</span>
                        <span className="text-white/40">.</span>
                    </a>
                    <p className="text-xs text-gray-600">
                        &copy; {currentYear} All rights reserved.
                    </p>
                </div>

                {/* Nav */}
                <nav className="flex flex-wrap justify-center gap-6">
                    {footerLinks.map((link) => (
                        <motion.a
                            key={link.href}
                            href={link.href}
                            whileHover={{ y: -1 }}
                            className="text-sm text-gray-500 transition-colors hover:text-gray-300"
                        >
                            {link.label}
                        </motion.a>
                    ))}
                </nav>

                {/* Social */}
                <div className="flex items-center gap-3">
                    <a
                        href="https://github.com/your-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-gray-500 transition-colors hover:text-white"
                        aria-label="GitHub"
                    >
                        <Github className="h-3.5 w-3.5" />
                    </a>
                    <a
                        href="https://linkedin.com/in/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-gray-500 transition-colors hover:text-white"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="h-3.5 w-3.5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
