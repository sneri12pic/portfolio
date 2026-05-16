import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedPageWrapper } from "@/components/AnimatedPageWrapper";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { RoleCard } from "@/components/RoleCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillsGrid } from "@/components/SkillsGrid";
import { education } from "@/data/education";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Stepan Demianenko | Graduate Software Engineer",
  description:
    "Portfolio for Stepan Demianenko, a final-year Software Engineering student in Edinburgh focused on backend APIs, Android apps, and reliable systems.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Stepan Demianenko | Graduate Software Engineer",
    description:
      "Graduate software engineering portfolio for backend, Android, and full-stack project evidence.",
    url: "/"
  }
};

const roles = [
  {
    title: "Software Engineer",
    summary:
      "Broad graduate engineering evidence across backend APIs, Android development, databases, CI/CD, and product-minded delivery.",
    skills: ["Python", "Java", "Kotlin", "CI/CD"],
    href: "/software-engineer",
    cvHref: "/cv/software-engineer"
  },
  {
    title: "Backend Developer",
    summary:
      "Backend-focused evidence around REST APIs, FastAPI, Django REST, Spring Boot, microservices, data storage, Docker, and GitHub Actions.",
    skills: ["Python", "Java", "FastAPI", "Spring Boot", "Docker"],
    href: "/backend-developer",
    cvHref: "/cv/backend-developer"
  },
  {
    title: "Android Developer",
    summary:
      "Android-focused evidence around Kotlin, Jetpack Compose, MVVM, Room, local-first data handling, Health Connect, and usability testing.",
    skills: ["Kotlin", "Compose", "Room", "MVVM", "UX"],
    href: "/android-developer",
    cvHref: "/cv/android-developer"
  }
];

export default function HomePage() {
  return (
    <AnimatedPageWrapper>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Role paths"
          title="One portfolio, tailored for three role types"
          text="Shared projects and experience are presented through role-specific pages so each application can lead with the most relevant evidence."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {roles.map((role, index) => (
            <RoleCard key={role.title} {...role} index={index} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects with practical engineering evidence"
          text="Android, backend, architecture, and supporting full-stack work without presenting prototypes as production systems."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-petal bg-white/78 px-5 py-3 text-sm font-semibold text-clay shadow-card transition hover:border-rose"
          >
            View all projects <ArrowRight aria-hidden size={17} />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Experience" title="Practical engineering experience" />
        <ExperienceTimeline />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Education" title="Software engineering foundation" />
        <div className="grid gap-5">
          {education.map((item) => (
            <article
              key={item.institution}
              className="rounded-2xl border border-petal bg-white/82 p-6 shadow-card"
            >
              <h3 className="font-display text-2xl font-semibold text-charcoal">
                {item.degree}
              </h3>
              <p className="mt-1 font-semibold text-clay">{item.institution}</p>
              <p className="mt-2 text-sm font-semibold text-warm-gray">{item.period}</p>
              <p className="mt-4 text-sm leading-6 text-warm-gray">
                Honours project: {item.honoursProject}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Skills" title="Technical toolkit" />
        <SkillsGrid />
      </section>
    </AnimatedPageWrapper>
  );
}
