import { Download, Eye } from "lucide-react";
import { Button } from "@/components/Button";

type CVCardProps = {
  title: string;
  description: string;
  viewHref: string;
  downloadHref: string;
  downloadLabel: string;
};

export function CVCard({
  title,
  description,
  viewHref,
  downloadHref,
  downloadLabel
}: CVCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-petal bg-white/82 p-6 shadow-card">
      <h3 className="font-display text-2xl font-semibold text-charcoal">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-warm-gray">{description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={viewHref} variant="primary">
          <Eye aria-hidden size={17} /> View CV
        </Button>
        <Button href={downloadHref} variant="secondary" download>
          <Download aria-hidden size={17} /> {downloadLabel}
        </Button>
      </div>
    </article>
  );
}
