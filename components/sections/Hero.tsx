import Image from "next/image";

/* ───────────────────────────────────────────────────────────────
   Hero Section
   A professional, clean, and minimal hero for a Full-Stack Developer portfolio.
   - Semantic HTML structure
   - Responsive layout (mobile-first)
   - Neutral color palette for recruiter audiences
─────────────────────────────────────────────────────────────── */

interface HeroProps {
    name?: string;
    role?: string;
    tagline?: string;
    supportingText?: string;
    profileImageSrc?: string;
    resumeHref?: string;
}

export default function Hero({
    name = "Md Ruman",
    role = "Full-Stack Web Developer",
    tagline = "I build scalable, production-ready web applications using modern frontend, backend, and cloud technologies.",
    supportingText = "Currently working as a Full-Stack Developer at Incresco, contributing to real-world systems used by multiple institutions.",
    profileImageSrc = "/profile-placeholder.svg",
    resumeHref = "/resume.pdf",
}: HeroProps) {
    return (
        <section
            id="hero"
            aria-label="Introduction"
            className="relative flex min-h-screen w-full items-center justify-center bg-white px-6 py-20 dark:bg-zinc-950 sm:px-12 lg:px-24"
        >
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
                {/* ───────────────── Text Content ───────────────── */}
                <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
                    {/* Name */}
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl lg:text-6xl">
                        {name}
                    </h1>

                    {/* Role Badge */}
                    <p className="mt-3 text-lg font-medium text-zinc-600 dark:text-zinc-400 sm:text-xl">
                        {role}
                    </p>

                    {/* Primary Tagline */}
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-lg">
                        {tagline}
                    </p>

                    {/* Supporting Line */}
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-base">
                        {supportingText}
                    </p>

                    {/* Call-to-Action Buttons */}
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                        <a
                            href="#experience"
                            className="inline-flex h-11 items-center justify-center rounded-md bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus-visible:ring-zinc-50"
                        >
                            View Experience
                        </a>
                        <a
                            href="#projects"
                            className="inline-flex h-11 items-center justify-center rounded-md border border-zinc-300 bg-transparent px-6 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800 dark:focus-visible:ring-zinc-50"
                        >
                            View Projects
                        </a>
                        <a
                            href={resumeHref}
                            download
                            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-zinc-300 bg-transparent px-6 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800 dark:focus-visible:ring-zinc-50"
                        >
                            <DownloadIcon />
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* ───────────────── Profile Image ───────────────── */}
                <div className="relative shrink-0">
                    <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-zinc-200 bg-zinc-100 shadow-lg dark:border-zinc-800 dark:bg-zinc-900 sm:h-64 sm:w-64 lg:h-72 lg:w-72">
                        <Image
                            src={profileImageSrc}
                            alt={`${name} — ${role}`}
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                    {/* Subtle decorative ring */}
                    <div className="absolute -inset-3 -z-10 rounded-full border border-zinc-200/50 dark:border-zinc-800/50" />
                </div>
            </div>
        </section>
    );
}

/* ───────────────────────────────────────────────────────────────
   Download Icon (inline SVG for simplicity)
─────────────────────────────────────────────────────────────── */
function DownloadIcon() {
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
                d="M10 3a.75.75 0 01.75.75v7.59l2.22-2.22a.75.75 0 111.06 1.06l-3.5 3.5a.75.75 0 01-1.06 0l-3.5-3.5a.75.75 0 111.06-1.06l2.22 2.22V3.75A.75.75 0 0110 3zM3.75 13a.75.75 0 01.75.75v1.5c0 .414.336.75.75.75h9.5a.75.75 0 00.75-.75v-1.5a.75.75 0 111.5 0v1.5a2.25 2.25 0 01-2.25 2.25h-9.5A2.25 2.25 0 013 15.25v-1.5a.75.75 0 01.75-.75z"
                clipRule="evenodd"
            />
        </svg>
    );
}
