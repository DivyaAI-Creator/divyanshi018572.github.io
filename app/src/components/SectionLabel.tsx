import { cn } from "@/lib/utils";

interface SectionLabelProps {
  text: string;
  className?: string;
}

export function SectionLabel({ text, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3 mb-4", className)}>
      <div className="w-8 h-[2px] bg-ds-primary rounded-full" />
      <span className="text-xs font-medium uppercase tracking-[0.15em] text-ds-primary">
        {text}
      </span>
    </div>
  );
}
