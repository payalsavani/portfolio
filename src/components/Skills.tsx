import { skills } from "@/data/profile";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
        Skills
      </h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-neutral-200 px-4 py-2 text-sm dark:border-neutral-800"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
