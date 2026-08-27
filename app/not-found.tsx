import { SectionLabel } from "@/components/SectionLabel";

export default function NotFound() {
  return (
    <div className="mx-auto flex h-full max-w-[953px] flex-col justify-center gap-md px-lg py-2xl md:px-2xl lg:px-3xl lg:py-3xl">
      <SectionLabel>404</SectionLabel>
      <h1 className="font-display text-display-md text-text-primary xl:text-display-lg">
        This page could not be found.
      </h1>
    </div>
  );
}
