"use client";

import { useEffect, useRef, useState } from "react";
import type { PDFDocumentProxy } from "pdfjs-dist";

const workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

type PdfCanvasPreviewProps = {
  filePath: string;
  title: string;
};

export function PdfCanvasPreview({ filePath, title }: PdfCanvasPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    let pdfDocument: PDFDocumentProxy | null = null;
    let resizeTimer: ReturnType<typeof setTimeout> | null = null;

    const renderPdf = async () => {
      const container = containerRef.current;

      if (!container) {
        return;
      }

      setStatus("loading");
      container.replaceChildren();

      try {
        const { GlobalWorkerOptions, getDocument } = await import("pdfjs-dist");

        GlobalWorkerOptions.workerSrc = workerSrc;

        const loadingTask = getDocument(filePath);
        pdfDocument = await loadingTask.promise;

        if (cancelled) {
          await pdfDocument.destroy();
          return;
        }

        // ponytail: 0.7 = ~30% zoom-out from the full container width
        const width = Math.min(container.clientWidth, 920) * 0.7;
        const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

        for (let pageNumber = 1; pageNumber <= pdfDocument.numPages; pageNumber += 1) {
          const page = await pdfDocument.getPage(pageNumber);

          if (cancelled) {
            return;
          }

          const initialViewport = page.getViewport({ scale: 1 });
          const scale = width / initialViewport.width;
          const viewport = page.getViewport({ scale: scale * pixelRatio });
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");

          if (!context) {
            throw new Error("Canvas rendering is not available in this browser.");
          }

          canvas.width = Math.floor(viewport.width);
          canvas.height = Math.floor(viewport.height);
          canvas.style.width = `${Math.floor(viewport.width / pixelRatio)}px`;
          canvas.style.height = `${Math.floor(viewport.height / pixelRatio)}px`;
          canvas.className =
            "mx-auto block max-w-full rounded-xl border border-petal bg-white shadow-card";
          canvas.setAttribute("aria-label", `${title} page ${pageNumber}`);

          container.appendChild(canvas);

          await page.render({
            canvas,
            canvasContext: context,
            viewport
          }).promise;
        }

        if (!cancelled) {
          setStatus("ready");
        }
      } catch {
        if (!cancelled) {
          setStatus("error");
        }
      }
    };

    const handleResize = () => {
      if (resizeTimer) {
        clearTimeout(resizeTimer);
      }

      resizeTimer = setTimeout(() => {
        void renderPdf();
      }, 200);
    };

    void renderPdf();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelled = true;

      if (resizeTimer) {
        clearTimeout(resizeTimer);
      }

      window.removeEventListener("resize", handleResize);
      void pdfDocument?.destroy();
    };
  }, [filePath, title]);

  return (
    <div className="relative">
      {status === "loading" ? (
        <div className="flex min-h-[50vh] items-center justify-center rounded-xl border border-petal bg-cream text-sm font-semibold text-clay">
          Loading CV preview...
        </div>
      ) : null}
      {status === "error" ? (
        <div className="rounded-xl border border-petal bg-cream p-8 text-center text-sm leading-6 text-warm-gray">
          The CV preview could not be displayed here. Use the open or download
          button above to view the PDF.
        </div>
      ) : null}
      <div
        ref={containerRef}
        aria-label={`${title} preview`}
        className="space-y-6"
      />
    </div>
  );
}
