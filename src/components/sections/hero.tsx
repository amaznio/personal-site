import { ArrowDown } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { MonoLabel } from "@/components/ui-extras/mono-label";
import { profile } from "@/config/profile";

export function Hero() {
  return (
    <section id="top" className="pt-[72px] pb-24">
      <Container className="flex flex-col gap-7">
        <div className="flex items-center gap-2.5">
          <span aria-hidden className="size-2 rounded-full bg-primary" />
          <MonoLabel className="tracking-wide">{profile.role}</MonoLabel>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xl text-secondary-foreground">
            Hey there{" "}
            <span aria-hidden className="inline-block origin-[70%_70%] animate-wave">
              👋
            </span>
          </p>
          <h1 className="font-heading text-[clamp(2.75rem,8vw,6rem)] leading-[1.02] font-bold tracking-[-0.035em]">
            I&apos;m <span className="text-primary">{profile.firstName}</span>.
          </h1>
        </div>
        <p className="max-w-[640px] text-xl text-secondary-foreground">{profile.intro}</p>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="#projects" className={buttonVariants({ size: "lg" })}>
            See my work <ArrowDown data-icon="inline-end" />
          </Link>
          <Link href="#about" className={buttonVariants({ size: "lg", variant: "outline" })}>
            About me
          </Link>
        </div>
        {profile.currently && (
          <MonoLabel className="pt-2">Currently: {profile.currently}</MonoLabel>
        )}
      </Container>
    </section>
  );
}
