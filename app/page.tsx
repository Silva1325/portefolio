import { CVEntry } from "@/components/CVEntry";
import { Divider } from "@/components/Divider";
import { Hero, HeroDesktop } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { education, employment, info, technicalSkills } from "@/lib/content";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-[953px] flex-col gap-2xl px-lg py-2xl md:px-2xl lg:px-3xl lg:py-3xl">
      <Reveal className="pt-2xl pb-md xl:pb-2xl">
        <Hero />
        <HeroDesktop />
      </Reveal>

      <Reveal>
        <section className="flex flex-col gap-md">
          <SectionLabel>Info</SectionLabel>
          <p className="text-body text-text-primary">{info.lead}</p>
          {info.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-body text-text-secondary">
              {paragraph}
            </p>
          ))}
        </section>
      </Reveal>

      <Divider />

      <Reveal>
        <section className="flex flex-col gap-md">
          <SectionLabel>Education</SectionLabel>
          <div className="flex flex-col gap-lg">
            {education.map((entry) => (
              <CVEntry key={entry.title} {...entry} />
            ))}
          </div>
        </section>
      </Reveal>

      <Divider />

      <Reveal>
        <section className="flex flex-col gap-md">
          <SectionLabel>Professional Journey</SectionLabel>
          <div className="flex flex-col gap-lg">
            {employment.map((entry) => (
              <CVEntry key={`${entry.title}-${entry.date}`} {...entry} />
            ))}
          </div>
        </section>
      </Reveal>

      <Divider />

      <Reveal>
        <section className="flex flex-col gap-md">
          <SectionLabel>Technical Skills</SectionLabel>
          <div className="grid grid-cols-1 gap-lg md:grid-cols-2">
            {technicalSkills.map(({ category, items }) => (
              <div key={category} className="flex flex-col gap-xs">
                <p className="font-bold text-body text-text-primary">
                  {category}
                </p>
                <p className="text-body text-text-secondary">{items}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>
    </div>
  );
}
