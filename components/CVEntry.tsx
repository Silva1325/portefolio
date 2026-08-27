import type { CVEntry as CVEntryType } from "@/lib/content";

export function CVEntry({ title, subtitle, date }: CVEntryType) {
  return (
    <div className="flex items-start justify-between gap-lg">
      <div className="flex min-w-0 flex-col">
        <p className="font-bold text-body text-text-primary">{title}</p>
        <p className="text-body text-text-secondary">{subtitle}</p>
      </div>
      <p className="shrink-0 text-body text-text-secondary">{date}</p>
    </div>
  );
}
