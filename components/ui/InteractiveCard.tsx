"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";

interface InteractiveCardProps {
    children: ReactNode;
    className?: string;
    as?: "div" | "article" | "a";
    href?: string;
    target?: string;
    rel?: string;
    /** Gradient accent colour — tailwind classes, e.g. "from-indigo-500/20 to-violet-500/20" */
    glowColor?: string;
}

/**
 * Card with cursor-tracking tilt + gradient-border spotlight.
 * On hover the card tilts subtly toward the cursor and a radial glow follows
 * the pointer along the card border / surface.
 */
export default function InteractiveCard({
    children,
    className = "",
    as = "div",
    href,
    target,
    rel,
    glowColor = "from-indigo-500/20 via-violet-500/10 to-cyan-500/20",
}: InteractiveCardProps) {
    const cardRef = useRef<HTMLElement>(null);
    const [glow, setGlow] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

    function handleMouseMove(e: MouseEvent<HTMLElement>) {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setGlow({ x, y });

        // Subtle tilt — max ±4deg
        const tiltX = ((y - 50) / 50) * -4;
        const tiltY = ((x - 50) / 50) * 4;
        setTilt({ rotateX: tiltX, rotateY: tiltY });
    }

    function handleMouseLeave() {
        setIsHovered(false);
        setTilt({ rotateX: 0, rotateY: 0 });
    }

    const MotionTag = as === "a" ? motion.a : as === "article" ? motion.article : motion.div;
    const linkProps = as === "a" ? { href, target, rel } : {};

    return (
        <MotionTag
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ref={cardRef as any}
            onMouseMove={handleMouseMove as any}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            animate={{
                rotateX: tilt.rotateX,
                rotateY: tilt.rotateY,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ transformPerspective: 800, transformStyle: "preserve-3d" }}
            className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-white/[0.15] hover:shadow-lg hover:shadow-indigo-500/[0.04] ${className}`}
            {...linkProps}
        >
            {/* Gradient border spotlight that follows cursor */}
            <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: isHovered
                        ? `radial-gradient(600px circle at ${glow.x}% ${glow.y}%, rgba(99,102,241,0.12), rgba(139,92,246,0.06) 40%, transparent 70%)`
                        : "none",
                }}
            />

            {/* Inner surface glow */}
            <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: isHovered
                        ? `radial-gradient(400px circle at ${glow.x}% ${glow.y}%, rgba(99,102,241,0.06), transparent 60%)`
                        : "none",
                }}
            />

            {/* Top edge gradient line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {children}
        </MotionTag>
    );
}
