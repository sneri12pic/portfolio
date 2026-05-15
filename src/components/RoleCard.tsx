"use client";

import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { TechTag } from "@/components/TechTag";

type RoleCardProps = {
  title: string;
  summary: string;
  skills: string[];
  href: string;
  cvHref: string;
  index?: number;
};

export function RoleCard({
  title,
  summary,
  skills,
  href,
  cvHref,
  index = 0
}: RoleCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={false}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={shouldReduceMotion ? {} : { y: -6 }}
      transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.06 }}
      className="flex h-full flex-col rounded-2xl border border-petal bg-white/82 p-6 shadow-card"
    >
      <h3 className="font-display text-2xl font-semibold text-charcoal">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-warm-gray">{summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <TechTag key={skill} label={skill} />
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={href}
          className="inline-flex items-center gap-2 rounded-full bg-rose px-4 py-2 text-sm font-semibold text-white transition hover:bg-clay"
        >
          View role page <ArrowRight aria-hidden size={16} />
        </Link>
        <Link
          href={cvHref}
          className="inline-flex items-center gap-2 rounded-full border border-petal px-4 py-2 text-sm font-semibold text-clay transition hover:border-rose hover:bg-cream"
        >
          <FileText aria-hidden size={16} /> Relevant CV
        </Link>
      </div>
    </motion.article>
  );
}
