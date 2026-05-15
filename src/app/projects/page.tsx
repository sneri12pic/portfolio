import type { Metadata } from "next";
import { AnimatedPageWrapper } from "@/components/AnimatedPageWrapper";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Stepan Demianenko | Projects",
  description:
    "Project index for Stepan Demianenko, including Android, backend, microservices, and full-stack software engineering case studies.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Stepan Demianenko | Projects",
    description: "Android, backend, architecture, and supporting full-stack projects.",
    url: "/projects"
  }
};

export default function ProjectsPage() {
  return (
    <AnimatedPageWrapper>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Shared evidence for software, backend, and Android roles"
          text="A single project library powers the role-specific pages and the detailed case studies."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>
    </AnimatedPageWrapper>
  );
}
