import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { Button } from "@/components/Button";
import { ProjectMedia } from "@/components/ProjectMedia";
import { TechTag } from "@/components/TechTag";

export function ProjectCaseStudyLayout({ project }: { project: Project }) {
  return (
    <article className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <header className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose">
          {project.status}
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-charcoal sm:text-6xl">
          {project.title}
        </h1>
        <p className="mt-5 text-xl font-semibold leading-8 text-clay">
          {project.subtitle}
        </p>
        <p className="mt-5 text-lg leading-8 text-warm-gray">{project.longDescription}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {project.repoUrl ? (
            <Button href={project.repoUrl} target="_blank" rel="noreferrer" variant="secondary">
              <Github aria-hidden size={17} /> Repository
            </Button>
          ) : (
            <span className="inline-flex min-h-11 items-center rounded-full border border-petal bg-white/75 px-5 py-2.5 text-sm font-semibold text-warm-gray">
              Repository coming soon
            </span>
          )}
          {project.liveUrl ? (
            <Button href={project.liveUrl} target="_blank" rel="noreferrer" variant="secondary">
              <ExternalLink aria-hidden size={17} /> Live demo
            </Button>
          ) : (
            <span className="inline-flex min-h-11 items-center rounded-full border border-petal bg-white/75 px-5 py-2.5 text-sm font-semibold text-warm-gray">
              Live demo coming soon
            </span>
          )}
        </div>
      </header>

      <div className="mt-12">
        <ProjectMedia project={project} />
      </div>

      <section className="mt-16 grid gap-5 lg:grid-cols-3">
        <div className="rounded-2xl border border-petal bg-white/82 p-6 shadow-card">
          <h2 className="font-display text-2xl font-semibold text-charcoal">Problem</h2>
          <p className="mt-3 text-sm leading-6 text-warm-gray">{project.problem}</p>
        </div>
        <div className="rounded-2xl border border-petal bg-white/82 p-6 shadow-card">
          <h2 className="font-display text-2xl font-semibold text-charcoal">Solution</h2>
          <p className="mt-3 text-sm leading-6 text-warm-gray">{project.solution}</p>
        </div>
        <div className="rounded-2xl border border-petal bg-white/82 p-6 shadow-card">
          <h2 className="font-display text-2xl font-semibold text-charcoal">Tech Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <TechTag key={tech} label={tech} />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl font-semibold text-charcoal">Technical Details</h2>
        <p className="mb-6 mt-3 text-base leading-7 text-warm-gray">
          The important implementation choices and trade-offs behind the project.
        </p>
        <ul className="grid gap-3 text-sm leading-6 text-warm-gray">
          {project.technicalDetails.map((detail) => (
            <li key={detail} className="flex gap-3">
              <span aria-hidden className="mt-2 h-2 w-2 rounded-full bg-clay" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold text-charcoal">Highlights</h2>
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-warm-gray">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span aria-hidden className="mt-2 h-2 w-2 rounded-full bg-rose" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-3xl font-semibold text-charcoal">Outcomes</h2>
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-warm-gray">
            {project.outcomes.map((outcome) => (
              <li key={outcome} className="flex gap-3">
                <span aria-hidden className="mt-2 h-2 w-2 rounded-full bg-coral" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
