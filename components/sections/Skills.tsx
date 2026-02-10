/* ───────────────────────────────────────────────────────────────
   Skills Section
   Grouped technical skills without ratings or progress bars.
─────────────────────────────────────────────────────────────── */

interface SkillCategory {
    name: string;
    skills: string[];
}

const skillCategories: SkillCategory[] = [
    {
        name: "Frontend",
        skills: ["React", "Next.js", "HTML", "CSS", "JavaScript", "TypeScript"],
    },
    {
        name: "Backend",
        skills: ["Node.js", "Express.js", "NestJS", "REST APIs"],
    },
    {
        name: "Databases & Cloud",
        skills: ["MongoDB", "SQL", "Prisma ORM", "AWS (S3, Lambda, SQS)"],
    },
    {
        name: "Tools",
        skills: ["Git", "GitHub", "Postman", "VS Code"],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            aria-label="Technical Skills"
            className="w-full bg-zinc-50 px-6 py-20 dark:bg-zinc-900 sm:px-12 lg:px-24"
        >
            <div className="mx-auto max-w-5xl">
                {/* Section Header */}
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                    Skills
                </h2>

                {/* Skills Grid */}
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {skillCategories.map((category, index) => (
                        <div key={index}>
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                {category.name}
                            </h3>
                            <ul className="mt-4 space-y-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <li
                                        key={skillIndex}
                                        className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
