import type { ReactNode } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillsGrid } from "@/components/SkillsGrid";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { TechTag } from "@/components/TechTag";
import { projects, type RoleKey } from "@/data/projects";

type RolePageLayoutProps = {
  role: RoleKey;
  title: string;
  heroText: string;
  emphasis: string[];
  projectOrder: string[];
  children?: ReactNode;
  showExperienceAfter?: number;
};

export function RolePageLayout({
  role,
  title,
  heroText,
  emphasis,
  projectOrder,
  children,
  showExperienceAfter
}: RolePageLayoutProps) {
  const orderedProjects = projectOrder
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project));

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <header className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose">
          Role portfolio
        </p>
        <h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-charcoal sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-warm-gray">{heroText}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-2">
          {emphasis.map((item) => (
            <TechTag key={item} label={item} />
          ))}
        </div>
      </header>

      {children ? <div className="mt-12">{children}</div> : null}

      <section className="mt-16">
        <SectionHeading
          eyebrow="Evidence"
          title="Projects ordered for this role"
          text="The same project base is tailored by role so recruiters can quickly see the most relevant evidence first."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {orderedProjects.map((project, index) => (
            <div key={project.slug} className="contents">
              <ProjectCard project={project} role={role} index={index} />
              {showExperienceAfter === index + 1 ? (
                <div className="md:col-span-2">
                  <ExperienceTimeline />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          text="A practical mix of backend, Android, data, DevOps, testing, and web development skills."
        />
        <SkillsGrid />
      </section>
    </div>
  );
}
