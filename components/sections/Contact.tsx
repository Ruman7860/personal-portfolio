/* ───────────────────────────────────────────────────────────────
   Contact Section
   Simple, professional contact information for recruiters.
─────────────────────────────────────────────────────────────── */

interface ContactLink {
    label: string;
    href: string;
    icon: React.ReactNode;
}

const contactLinks: ContactLink[] = [
    {
        label: "Email",
        href: "mailto:your.email@example.com",
        icon: <EmailIcon />,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/your-profile",
        icon: <LinkedInIcon />,
    },
    {
        label: "GitHub",
        href: "https://github.com/your-username",
        icon: <GitHubIcon />,
    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            aria-label="Contact Information"
            className="w-full bg-white px-6 py-20 dark:bg-zinc-950 sm:px-12 lg:px-24"
        >
            <div className="mx-auto max-w-5xl">
                {/* Section Header */}
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                    Contact
                </h2>

                <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Interested in full-stack roles where I can work on real-world systems
                    and challenging problems.
                </p>

                {/* Contact Links */}
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
                    {contactLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target={link.label !== "Email" ? "_blank" : undefined}
                            rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center gap-3 rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                        >
                            {link.icon}
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ───────────────────────────────────────────────────────────────
   Icons
─────────────────────────────────────────────────────────────── */

function EmailIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
        >
            <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
            <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
        >
            <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm1.336 9.763H3.667V7.75h2.674v8.588zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
        </svg>
    );
}

function GitHubIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
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
