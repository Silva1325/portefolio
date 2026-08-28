"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { ThemeToggle } from "@/components/ThemeToggle";
import { projectHighlights } from "@/lib/content";

export function ProjectHighlights() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const urls = [
      ...projectHighlights.mobile.screens.flatMap((screen) => [
        screen.src,
        screen.darkSrc,
      ]),
      projectHighlights.dashboard.image.src,
      projectHighlights.dashboard.darkImage.src,
    ];
    urls.forEach((url) => {
      const img = new window.Image();
      img.src = url;
    });
  }, []);

  const dashboardImage = isDark
    ? projectHighlights.dashboard.darkImage
    : projectHighlights.dashboard.image;

  return (
    <section className="flex flex-col gap-md">
      <Reveal className="flex items-center justify-between">
        <SectionLabel>Project Highlights</SectionLabel>
        <ThemeToggle isDark={isDark} onToggle={() => setIsDark((d) => !d)} />
      </Reveal>

      <div className="flex flex-col gap-3xl">
        <Reveal className="flex flex-col gap-lg">
          <p className="text-body text-text-primary">
            {projectHighlights.mobile.caption}
          </p>
          <div className="grid grid-cols-1 gap-lg rounded-[20px] bg-[#F8F9FA] px-lg py-2xl md:grid-cols-2 lg:grid-cols-4">
            {projectHighlights.mobile.screens.map((screen) => (
              <Image
                key={screen.src}
                src={isDark ? screen.darkSrc : screen.src}
                alt=""
                width={screen.width}
                height={screen.height}
                sizes="(min-width: 1024px) 220px, (min-width: 768px) 45vw, 80vw"
                className="mx-auto h-auto w-full max-w-[220px] rounded-sm"
              />
            ))}
          </div>
        </Reveal>

        <Reveal className="flex flex-col gap-lg">
          <p className="text-body text-text-primary">
            {projectHighlights.dashboard.caption}
          </p>
          <div className="rounded-[20px] bg-[#F8F9FA] px-lg py-2xl">
            <Image
              src={dashboardImage.src}
              alt=""
              width={dashboardImage.width}
              height={dashboardImage.height}
              className="h-auto w-full rounded-sm"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
