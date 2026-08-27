import { Divider } from "@/components/Divider";
import { ProjectHighlights } from "@/components/ProjectHighlights";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { processOfDevelopment, project } from "@/lib/content";

export default function ProjectsPage() {
  return (
    <div className="mx-auto flex max-w-[953px] flex-col gap-2xl px-lg py-2xl md:px-2xl lg:px-3xl lg:py-3xl">
      <Reveal>
        <SectionLabel>Projects</SectionLabel>
      </Reveal>

      <Reveal>
        <section className="flex flex-col gap-xl">
          <div className="flex flex-col gap-sm">
            <h1 className="font-display text-display-md text-text-primary xl:text-display-lg">
              {project.title}
            </h1>
            <p className="font-display text-heading-md text-text-secondary">
              {project.subtitle}
            </p>
          </div>

          <Divider />

          <div className="flex flex-col gap-md">
            {project.description.map((paragraph) => (
              <p key={paragraph} className="text-body text-text-primary">
                {paragraph}
              </p>
            ))}
          </div>

          <Divider />

          <div className="grid grid-cols-2 gap-x-2xl gap-y-lg lg:grid-cols-4">
            {project.meta.map((entry) => (
              <div key={entry.label} className="flex flex-col gap-sm">
                <p className="font-bold text-body text-text-primary">
                  {entry.label}
                </p>
                {entry.values.map((value) => (
                  <p key={value} className="text-body text-text-secondary">
                    {value}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Divider />

      <section className="flex flex-col gap-md">
        <Reveal>
          <SectionLabel>Process of Development</SectionLabel>
        </Reveal>
        <div className="flex flex-col">
          {processOfDevelopment.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.12}>
              <div className="flex flex-col gap-xs py-lg lg:flex-row lg:gap-[40px]">
                <p className="font-bold text-body text-text-primary lg:w-[280px] lg:shrink-0">
                  {step.title}
                </p>
                <div className="flex flex-col gap-xs">
                  <p className="text-body text-text-primary">
                    {step.subtitle}
                  </p>
                  <p className="text-body text-text-secondary">
                    {step.body}
                  </p>
                </div>
              </div>
              {index < processOfDevelopment.length - 1 && <Divider />}
            </Reveal>
          ))}
        </div>
      </section>

      <Divider />

      <ProjectHighlights />
    </div>
  );
}
