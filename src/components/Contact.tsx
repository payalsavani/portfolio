import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
        Contact
      </h2>
      <p className="mt-4 max-w-xl text-lg text-neutral-700 dark:text-neutral-200">
        Have a project in mind or just want to say hi? My inbox is open.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-6 inline-block rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-neutral-950"
      >
        {profile.email}
      </a>
      <div className="mt-6 flex gap-4 text-sm text-neutral-500 dark:text-neutral-400">
        {profile.socials.github && (
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-950 dark:hover:text-white"
          >
            GitHub
          </a>
        )}
        {profile.socials.linkedin && (
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-950 dark:hover:text-white"
          >
            LinkedIn
          </a>
        )}
        {profile.socials.twitter && (
          <a
            href={profile.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-950 dark:hover:text-white"
          >
            Twitter
          </a>
        )}
      </div>
    </section>
  );
}
