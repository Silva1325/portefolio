import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import { profile } from "@/lib/content";

function HeroFogImage({
  src,
  alt = "",
  width,
  height,
  className,
}: {
  src: string;
  alt?: string;
  width: number;
  height: number;
  className: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-sm ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-full w-full object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/80" />
    </div>
  );
}

export function Hero() {
  return (
    <div className="flex flex-col gap-lg xl:hidden">
      <Image
        src={withBasePath("/images/hero-2.webp")}
        alt={`${profile.firstName} ${profile.lastName}`}
        width={1000}
        height={1500}
        className="h-[300px] w-full rounded-sm object-cover md:h-[380px]"
        priority
      />
      <div className="flex flex-col gap-xs">
        <p className="font-display text-display-md text-text-primary">
          {profile.firstName} {profile.lastName}
        </p>
        <p className="font-display text-heading-md text-text-secondary">
          {profile.role}
        </p>
      </div>
    </div>
  );
}

export function HeroDesktop() {
  return (
    <div className="hidden xl:block">
      <div className="relative">
        <p className="relative z-10 font-display text-hero leading-none text-text-primary">
          {profile.firstName}
        </p>
        <p className="relative z-10 mt-sm font-display text-hero leading-none text-text-primary">
          {profile.lastName}
        </p>
        <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-y-1/2 gap-md">
          <HeroFogImage
            src={withBasePath("/images/hero-1.webp")}
            width={550}
            height={367}
            className="h-[224px] w-[275px] self-end"
          />
          <HeroFogImage
            src={withBasePath("/images/hero-2.webp")}
            alt={`${profile.firstName} ${profile.lastName}`}
            width={1000}
            height={1500}
            className="h-[456px] w-[275px]"
          />
          <HeroFogImage
            src={withBasePath("/images/hero-5.webp")}
            width={550}
            height={733}
            className="h-[340px] w-[275px] self-start"
          />
        </div>
      </div>
      <p className="mt-sm font-display text-heading-md text-text-secondary">
        {profile.role}
      </p>
    </div>
  );
}
