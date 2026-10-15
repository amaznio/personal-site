import { ArrowDown } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 left-1/2 -z-10 size-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
      />
      <p className="mb-4 text-lg text-muted-foreground">
        Hey there <span className="inline-block origin-[70%_70%] animate-wave">👋</span>
      </p>
      <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-6xl">
        I&apos;m <span className="text-primary">{siteConfig.name}</span>.
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">{siteConfig.tagline}</p>
      <div className="mt-8 flex gap-3">
        <Link href="#projects" className={buttonVariants({ size: "lg" })}>
          See my work <ArrowDown data-icon="inline-end" />
        </Link>
        <Link href="#about" className={buttonVariants({ size: "lg", variant: "outline" })}>
          About me
        </Link>
      </div>
    </section>
  );
}
