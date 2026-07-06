import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-black/5 py-8 dark:border-white/10">
      <div className="mx-auto max-w-4xl px-6 text-sm text-neutral-500 dark:text-neutral-400">
        © {year} {profile.name}. Built with Next.js & Tailwind CSS.
      </div>
    </footer>
  );
}
