import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/Button";
import type { CvKey } from "@/data/cv";
import { cvs } from "@/data/cv";

export function CVPreview({ cvKey }: { cvKey: CvKey }) {
  const cv = cvs[cvKey];

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <header className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose">
          CV preview
        </p>
        <h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-charcoal sm:text-6xl">
          {cv.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-warm-gray">{cv.description}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button href={cv.filePath} target="_blank" rel="noreferrer" variant="primary">
            <ExternalLink aria-hidden size={17} /> Open CV
          </Button>
          <Button href={cv.filePath} download variant="secondary">
            <Download aria-hidden size={17} /> {cv.downloadLabel}
          </Button>
        </div>
      </header>

      <section className="mt-10 rounded-2xl border border-petal bg-white/82 p-4 shadow-card">
        <div className="block md:hidden">
          <p className="text-sm leading-6 text-warm-gray">
            PDF previews can be awkward on small screens. Use the buttons above to open
            or download the CV directly.
          </p>
        </div>
        <object
          data={cv.previewPath}
          type="application/pdf"
          aria-label={`${cv.title} PDF preview`}
          className="pdf-preview hidden w-full rounded-xl border border-petal bg-cream md:block"
        >
          <div className="p-8 text-center text-sm leading-6 text-warm-gray">
            The PDF preview could not be loaded. Use the open or download button
            above, or replace the file in public/cv with the same filename.
          </div>
        </object>
      </section>
    </div>
  );
}
