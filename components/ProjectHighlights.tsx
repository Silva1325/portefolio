"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { ThemeToggle } from "@/components/ThemeToggle";
import { projectHighlights } from "@/lib/content";

const crossfadeTransition = { duration: 0.35, ease: [0.4, 0, 0.2, 1] as const };

function CrossfadeImage({
  src,
  darkSrc,
  isDark,
  width,
  height,
  sizes,
  className,
}: {
  src: string;
  darkSrc: string;
  isDark: boolean;
  width: number;
  height: number;
  sizes?: string;
  className: string;
}) {
  return (
    <div className={`relative ${className}`} style={{ aspectRatio: `${width} / ${height}` }}>
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: isDark ? 0 : 1 }}
        transition={crossfadeTransition}
      >
        <Image src={src} alt="" fill sizes={sizes} className="rounded-sm object-cover" />
      </motion.div>
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: isDark ? 1 : 0 }}
        transition={crossfadeTransition}
      >
        <Image src={darkSrc} alt="" fill sizes={sizes} className="rounded-sm object-cover" />
      </motion.div>
    </div>
  );
}

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
              <CrossfadeImage
                key={screen.src}
                src={screen.src}
                darkSrc={screen.darkSrc}
                isDark={isDark}
                width={screen.width}
                height={screen.height}
                sizes="(min-width: 1024px) 220px, (min-width: 768px) 45vw, 80vw"
                className="mx-auto w-full max-w-[220px]"
              />
            ))}
          </div>
        </Reveal>

        <Reveal className="flex flex-col gap-lg">
          <p className="text-body text-text-primary">
            {projectHighlights.dashboard.caption}
          </p>
          <div className="rounded-[20px] bg-[#F8F9FA] px-lg py-2xl">
            <CrossfadeImage
              src={projectHighlights.dashboard.image.src}
              darkSrc={projectHighlights.dashboard.darkImage.src}
              isDark={isDark}
              width={projectHighlights.dashboard.image.width}
              height={projectHighlights.dashboard.image.height}
              sizes="(min-width: 1024px) 953px, 100vw"
              className="w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
