import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-4", className)}>
      {siteConfig.socials.map((social) => (
        <li key={social.href}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            {social.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
