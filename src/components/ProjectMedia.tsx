"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectMedia({ project }: { project: Project }) {
  const shouldReduceMotion = useReducedMotion();
  const [brokenImages, setBrokenImages] = useState<Set<string>>(new Set());
  const [videoFailed, setVideoFailed] = useState(false);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const seekTo = (time: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = time;
    void video.play();
  };

  const formatTime = (s: number) =>
    `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

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
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
            {project.videoChapters && project.videoChapters.length > 0 ? (
              <div className="overflow-y-auto rounded-2xl border border-petal bg-white/82 p-3 shadow-card lg:w-80 lg:self-stretch">
                <p className="px-2 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-rose">
                  Chapters
                </p>
                <ul className="mt-1 space-y-1">
                  {project.videoChapters.map((chapter) => (
                    <li key={chapter.time}>
                      <button
                        type="button"
                        onClick={() => seekTo(chapter.time)}
                        className="flex w-full items-baseline gap-3 rounded-xl px-2 py-2 text-left text-sm text-charcoal transition hover:bg-petal/45"
                      >
                        <span className="font-mono text-xs font-semibold text-clay">
                          {formatTime(chapter.time)}
                        </span>
                        <span>{chapter.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="w-fit max-w-full rounded-2xl border border-petal bg-white/82 p-2 shadow-card">
              <video
                ref={videoRef}
                className="block max-h-[34rem] w-auto max-w-full rounded-xl bg-cream object-contain"
                controls
                preload="metadata"
                onError={() => setVideoFailed(true)}
              >
                <source src={project.videoDemo} type="video/mp4" />
              </video>
            </div>
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
