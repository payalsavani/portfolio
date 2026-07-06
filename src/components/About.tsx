import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
        About
      </h2>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-700 dark:text-neutral-200">
        {profile.about}
      </p>
      <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
        Based in {profile.location}
      </p>
    </section>
  );
}
