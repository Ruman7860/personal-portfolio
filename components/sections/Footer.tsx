/* ───────────────────────────────────────────────────────────────
   Footer
   Simple, professional footer with copyright.
─────────────────────────────────────────────────────────────── */

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-zinc-200 bg-zinc-50 px-6 py-8 dark:border-zinc-800 dark:bg-zinc-900 sm:px-12 lg:px-24">
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {currentYear} Md Ruman. All rights reserved.
                </p>
                <nav className="flex gap-6">
                    <a
                        href="#hero"
                        className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                    >
                        Home
                    </a>
                    <a
                        href="#experience"
                        className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                    >
                        Experience
                    </a>
                    <a
                        href="#projects"
                        className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                    >
                        Contact
                    </a>
                </nav>
            </div>
        </footer>
    );
}
