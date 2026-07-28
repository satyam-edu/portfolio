import { ArrowUpRight } from "lucide-react";

import { profile } from "@/data/profile";

const socialLinks = [
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "GitHub", href: profile.links.github },
  { label: "Codolio", href: profile.links.codolio },
].filter((link) => link.href);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>

        {socialLinks.length > 0 && (
          <nav className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
              >
                {link.label}
                <ArrowUpRight className="size-3.5" />
              </a>
            ))}
          </nav>
        )}
      </div>
    </footer>
  );
}
