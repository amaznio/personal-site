import { Section } from "@/components/layout/section";
import { DefinitionList } from "@/components/ui-extras/definition-list";
import { profile } from "@/config/profile";

export function AboutSection() {
  const { about, facts } = profile;

  return (
    <Section id="about" title="About">
      <div className="flex max-w-[620px] flex-col gap-5">
        <p className="text-xl leading-[1.55]">{about.lead}</p>
        <p className="text-[17px] leading-[1.6] text-secondary-foreground">{about.body}</p>
        {facts.length > 0 && (
          <div className="mt-2">
            <DefinitionList items={facts} />
          </div>
        )}
      </div>
    </Section>
  );
}
