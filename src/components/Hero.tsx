import { ArrowRight, Download } from "lucide-react";
import { AvailabilityCard } from "@/components/AvailabilityCard";
import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.35fr_0.65fr] lg:px-8">
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-rose">
          Final-year Software Engineering student graduating in 2026.
        </p>
        <h1 className="font-display text-5xl font-semibold leading-tight text-charcoal sm:text-6xl lg:text-7xl">
          Stepan Demianenko
        </h1>
        <p className="mt-6 max-w-3xl text-2xl font-semibold leading-snug text-charcoal sm:text-3xl">
          Graduate Software Engineer building backend APIs, Android applications,
          and reliable full-stack systems.
        </p>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-warm-gray">
          Final-year Software Engineering student based in Edinburgh, focused on
          practical engineering, clean APIs, Android product development, and
          reliable delivery through CI/CD and good development practices.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/projects">
            View Projects <ArrowRight aria-hidden size={18} />
          </Button>
          <Button href="/backend-developer" variant="secondary">
            Backend Portfolio
          </Button>
          <Button href="/android-developer" variant="secondary">
            Android Portfolio
          </Button>
          <Button href="/cv/software-engineer-cv.pdf" variant="ghost" download>
            <Download aria-hidden size={18} /> Download Software Engineer CV
          </Button>
        </div>
      </div>
      <AvailabilityCard />
    </section>
  );
}
