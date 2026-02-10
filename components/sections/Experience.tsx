/* ───────────────────────────────────────────────────────────────
   Experience Section
   Professional work experience with company projects.
─────────────────────────────────────────────────────────────── */

interface CompanyProject {
    title: string;
    description: string[];
}

interface ExperienceData {
    company: string;
    role: string;
    timeline: string;
    transitionNote: string;
    companyDescription: string;
    responsibilities: string[];
    projects: CompanyProject[];
}

const experienceData: ExperienceData = {
    company: "Incresco",
    role: "Full-Stack Web Developer",
    timeline: "Jan 2025 – Present",
    transitionNote: "Intern → Full-Time",
    companyDescription:
        "Incresco builds scalable digital platforms for education and enterprise use cases, handling complex workflows and integrations.",
    responsibilities: [
        "Developed dynamic, multi-step form systems used by multiple colleges and institutions.",
        "Built end-to-end features using Next.js (frontend) and NestJS (backend).",
        "Designed REST APIs and handled frontend-backend integration.",
        "Integrated AWS services such as S3, Lambda, and SQS for document handling and background processing.",
        "Worked on Salesforce-integrated systems to sync application and user data.",
        "Contributed to production deployments, bug fixes, and feature enhancements in live systems.",
    ],
    projects: [
        {
            title: "GUS Form Management Platform",
            description: [
                "Built a configurable form management system supporting multiple colleges and application workflows.",
                "Implemented dynamic validations, conditional rendering, and backend-driven configurations.",
                "Integrated AWS services and Salesforce to support real-time data synchronization and document workflows.",
            ],
        },
    ],
};

export default function Experience() {
    return (
        <section
            id="experience"
            aria-label="Work Experience"
            className="w-full bg-zinc-50 px-6 py-20 dark:bg-zinc-900 sm:px-12 lg:px-24"
        >
            <div className="mx-auto max-w-5xl">
                {/* Section Header */}
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                    Experience
                </h2>

                {/* Experience Card */}
                <div className="mt-12 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:p-8">
                    {/* Company Header */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                                {experienceData.company}
                            </h3>
                            <p className="mt-1 text-lg text-zinc-700 dark:text-zinc-300">
                                {experienceData.role}
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-1 sm:items-end">
                            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                                {experienceData.timeline}
                            </span>
                            <span className="inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                                {experienceData.transitionNote}
                            </span>
                        </div>
                    </div>

                    {/* Company Description */}
                    <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {experienceData.companyDescription}
                    </p>

                    {/* Divider */}
                    <hr className="my-6 border-zinc-200 dark:border-zinc-800" />

                    {/* Responsibilities */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                            Key Contributions
                        </h4>
                        <ul className="mt-4 space-y-3">
                            {experienceData.responsibilities.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
                                >
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Divider */}
                    <hr className="my-6 border-zinc-200 dark:border-zinc-800" />

                    {/* Company Projects */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                            Key Projects at Incresco
                        </h4>
                        <div className="mt-4 space-y-6">
                            {experienceData.projects.map((project, index) => (
                                <div
                                    key={index}
                                    className="rounded-lg border border-zinc-100 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900"
                                >
                                    <h5 className="font-semibold text-zinc-900 dark:text-zinc-50">
                                        {project.title}
                                    </h5>
                                    <ul className="mt-3 space-y-2">
                                        {project.description.map((desc, descIndex) => (
                                            <li
                                                key={descIndex}
                                                className="flex items-start gap-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                                            >
                                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
