"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Project, RoleKey } from "@/data/projects";
import { TechTag } from "@/components/TechTag";

export function ProjectCard({
  project,
  role,
  index = 0
}: {
  project: Project;
  role?: RoleKey;
  index?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const description = role ? project.roleRelevance[role] : project.shortDescription;

  return (
    <motion.article
      initial={false}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={shouldReduceMotion ? {} : { y: -5 }}
      transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.05 }}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-petal bg-white/84 shadow-card"
    >
      <div className="border-b border-petal/80 bg-gradient-to-br from-white to-cream p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rose">
          {project.status}
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold text-charcoal">
          {project.title}
        </h3>
        <p className="mt-2 text-sm font-medium text-clay">{project.subtitle}</p>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-6 text-warm-gray">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.slice(0, 6).map((tech) => (
            <TechTag key={tech} label={tech} />
          ))}
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-clay transition hover:text-rose"
        >
          Read case study <ArrowRight aria-hidden size={16} />
        </Link>
      </div>
    </motion.article>
  );
}
