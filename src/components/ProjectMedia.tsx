"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectMedia({ project }: { project: Project }) {
  const shouldReduceMotion = useReducedMotion();
  const [brokenImages, setBrokenImages] = useState<Set<string>>(new Set());
  const [videoFailed, setVideoFailed] = useState(false);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const visibleScreenshots = project.screenshots.filter(
    (screenshot) => !brokenImages.has(screenshot.src)
  );

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <>
    <section className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="rounded-2xl border border-petal bg-white/82 p-4 shadow-card">
        <div className="grid gap-4 sm:grid-cols-2">
          {visibleScreenshots.length > 0 ? (
            visibleScreenshots.map((screenshot) => (
              <motion.figure
                key={screenshot.src}
                whileHover={shouldReduceMotion ? {} : { scale: 1.015 }}
                onClick={() => setLightbox(screenshot)}
                className="flex cursor-zoom-in items-center justify-center overflow-hidden rounded-2xl border border-petal bg-cream"
              >
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="max-h-[30rem] w-full object-contain"
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
            className="max-h-[32rem] w-full rounded-2xl border border-petal bg-cream object-contain"
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

    <AnimatePresence>
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 p-4 backdrop-blur-sm sm:p-8"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close image"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X aria-hidden size={22} />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full cursor-default rounded-2xl object-contain shadow-card"
          />
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
