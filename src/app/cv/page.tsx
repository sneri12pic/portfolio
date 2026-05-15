import type { Metadata } from "next";
import { AnimatedPageWrapper } from "@/components/AnimatedPageWrapper";
import { CVCard } from "@/components/CVCard";
import { SectionHeading } from "@/components/SectionHeading";
import { cvList } from "@/data/cv";

export const metadata: Metadata = {
  title: "Stepan Demianenko | CV",
  description:
    "CV hub for Stepan Demianenko with role-specific software engineer, backend developer, and Android developer CVs.",
  alternates: { canonical: "/cv" },
  openGraph: {
    title: "Stepan Demianenko | CV",
    description: "Role-specific CV previews and downloads.",
    url: "/cv"
  }
};

export default function CVHubPage() {
  return (
    <AnimatedPageWrapper>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CV"
          title="Role-specific CVs"
          text="Choose the CV that best matches the role: broad software engineering, backend development, or Android development."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {cvList.map((cv) => (
            <CVCard
              key={cv.slug}
              title={cv.title}
              description={cv.description}
              viewHref={`/cv/${cv.slug}`}
              downloadHref={cv.filePath}
              downloadLabel={cv.downloadLabel}
            />
          ))}
        </div>
      </section>
    </AnimatedPageWrapper>
  );
}
