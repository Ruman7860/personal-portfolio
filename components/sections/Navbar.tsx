"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { label: "Home", href: "#hero" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("#hero");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close mobile menu on resize
    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setMobileOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled
                        ? "glass shadow-lg shadow-black/20"
                        : "bg-transparent"
                    }`}
            >
                <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
                    {/* Logo */}
                    <a
                        href="#hero"
                        className="relative text-xl font-bold tracking-tight"
                        onClick={() => setActiveLink("#hero")}
                    >
                        <span className="gradient-text">Md Ruman</span>
                        <span className="text-white/60">.</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden items-center gap-1 md:flex">
                        {NAV_LINKS.map((link) => (
                            <NavLink
                                key={link.href}
                                href={link.href}
                                label={link.label}
                                isActive={activeLink === link.href}
                                onClick={() => setActiveLink(link.href)}
                            />
                        ))}

                        {/* CTA */}
                        <a
                            href="/resume.pdf"
                            download
                            className="btn-glow ml-4 inline-flex h-9 items-center rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-5 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-indigo-500/25"
                        >
                            Resume
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="relative flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-white/5 md:hidden"
                        aria-label="Toggle menu"
                    >
                        <div className="flex flex-col items-center justify-center gap-[5px]">
                            <motion.span
                                animate={
                                    mobileOpen
                                        ? { rotate: 45, y: 7 }
                                        : { rotate: 0, y: 0 }
                                }
                                transition={{ duration: 0.25 }}
                                className="block h-[2px] w-5 rounded-full bg-white"
                            />
                            <motion.span
                                animate={
                                    mobileOpen ? { opacity: 0 } : { opacity: 1 }
                                }
                                transition={{ duration: 0.15 }}
                                className="block h-[2px] w-5 rounded-full bg-white"
                            />
                            <motion.span
                                animate={
                                    mobileOpen
                                        ? { rotate: -45, y: -7 }
                                        : { rotate: 0, y: 0 }
                                }
                                transition={{ duration: 0.25 }}
                                className="block h-[2px] w-5 rounded-full bg-white"
                            />
                        </div>
                    </button>
                </nav>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed inset-0 top-16 z-40 flex flex-col gap-1 bg-[#0b0b0f]/95 px-6 pt-8 backdrop-blur-xl md:hidden"
                    >
                        {NAV_LINKS.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.06, duration: 0.3 }}
                                onClick={() => {
                                    setMobileOpen(false);
                                    setActiveLink(link.href);
                                }}
                                className={`rounded-xl px-4 py-3 text-lg font-medium transition-colors ${activeLink === link.href
                                        ? "bg-white/5 text-white"
                                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <a
                            href="/resume.pdf"
                            download
                            onClick={() => setMobileOpen(false)}
                            className="mt-4 inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-base font-medium text-white"
                        >
                            Download Resume
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

/* ── Nav Link with Hover Underline ── */
function NavLink({
    href,
    label,
    isActive,
    onClick,
}: {
    href: string;
    label: string;
    isActive: boolean;
    onClick: () => void;
}) {
    return (
        <a
            href={href}
            onClick={onClick}
            className="group relative px-3 py-2 text-sm font-medium transition-colors"
        >
            <span
                className={`transition-colors ${isActive ? "text-white" : "text-gray-400 group-hover:text-white"
                    }`}
            >
                {label}
            </span>
            {/* Animated Underline */}
            {isActive && (
                <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
            )}
        </a>
    );
}
