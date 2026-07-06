import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-6 pb-16 pt-20 sm:pt-28">
      <p className="mb-3 text-sm font-medium text-neutral-500 dark:text-neutral-400">
        Hi, I&apos;m
      </p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        {profile.name}
      </h1>
      <h2 className="mt-3 text-xl text-neutral-600 dark:text-neutral-300">
        {profile.title}
      </h2>
      <p className="mt-6 max-w-xl text-neutral-600 dark:text-neutral-300">
        {profile.tagline}
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-neutral-950"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
