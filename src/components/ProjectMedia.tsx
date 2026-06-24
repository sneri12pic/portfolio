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
    <section className="space-y-12">
      {visibleScreenshots.length > 0 ? (
        <div>
          <h2 className="mb-5 font-display text-3xl font-semibold text-charcoal">
            Screenshots
          </h2>
          <div className="rounded-2xl border border-petal bg-white/82 p-4 shadow-card">
            <div
              className="grid gap-4"
              style={{
                gridTemplateColumns: `repeat(${Math.min(
                  visibleScreenshots.length,
                  3
                )}, minmax(0, 1fr))`
              }}
            >
              {visibleScreenshots.map((screenshot) => (
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
              ))}
            </div>
          </div>
        </div>
      ) : null}
      {project.videoDemo && !videoFailed ? (
        <div>
          <h2 className="mb-5 font-display text-3xl font-semibold text-charcoal">
            Demo
          </h2>
          <div className="mx-auto w-fit max-w-full rounded-2xl border border-petal bg-white/82 p-2 shadow-card">
            <video
              className="block max-h-[34rem] w-auto max-w-full rounded-xl bg-cream object-contain"
              controls
              preload="metadata"
              onError={() => setVideoFailed(true)}
            >
              <source src={project.videoDemo} type="video/mp4" />
            </video>
          </div>
        </div>
      ) : null}
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
