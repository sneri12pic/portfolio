"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";

export function ProjectMedia({ project }: { project: Project }) {
  const shouldReduceMotion = useReducedMotion();
  const [brokenImages, setBrokenImages] = useState<Set<string>>(new Set());
  const [videoFailed, setVideoFailed] = useState(false);

  const visibleScreenshots = project.screenshots.filter(
    (screenshot) => !brokenImages.has(screenshot.src)
  );

  return (
    <section className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="rounded-2xl border border-petal bg-white/82 p-4 shadow-card">
        <div className="grid gap-4 sm:grid-cols-2">
          {visibleScreenshots.length > 0 ? (
            visibleScreenshots.map((screenshot) => (
              <motion.figure
                key={screenshot.src}
                whileHover={shouldReduceMotion ? {} : { scale: 1.015 }}
                className="overflow-hidden rounded-2xl border border-petal bg-cream"
              >
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="aspect-[4/3] w-full object-cover"
                  onError={() =>
                    setBrokenImages((current) => new Set(current).add(screenshot.src))
                  }
                />
              </motion.figure>
            ))
          ) : (
            <div className="col-span-full flex min-h-64 items-center justify-center rounded-2xl border border-dashed border-petal bg-cream p-8 text-center">
              <p className="max-w-md text-sm leading-6 text-warm-gray">
                Project screenshots are ready to drop into
                <span className="font-semibold text-clay"> public/images/projects</span>.
                The case study will use them automatically when the filenames in
                project data match the files.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="rounded-2xl border border-petal bg-white/82 p-4 shadow-card">
        {project.videoDemo && !videoFailed ? (
          <video
            className="aspect-video w-full rounded-2xl border border-petal bg-cream object-cover"
            controls
            preload="metadata"
            onError={() => setVideoFailed(true)}
          >
            <source src={project.videoDemo} type="video/mp4" />
          </video>
        ) : (
          <div className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-petal bg-cream p-8 text-center">
            <p className="max-w-sm text-sm leading-6 text-warm-gray">
              {project.videoDemo ? (
                <>
                  Add a demo video at
                  <span className="font-semibold text-clay">
                    {" "}
                    public{project.videoDemo}
                  </span>{" "}
                  when it is ready. Missing media will not break the page.
                </>
              ) : (
                <>
                  No video demo is configured yet. Add one in
                  <span className="font-semibold text-clay"> public/demos</span> and
                  update the project data when it is ready.
                </>
              )}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
