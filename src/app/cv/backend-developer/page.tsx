import type { Metadata } from "next";
import { AnimatedPageWrapper } from "@/components/AnimatedPageWrapper";
import { CVPreview } from "@/components/CVPreview";

export const metadata: Metadata = {
  title: "Stepan Demianenko | Backend Developer CV",
  description: "Backend Developer CV preview and download for Stepan Demianenko.",
  alternates: { canonical: "/cv/backend-developer" }
};

export default function BackendDeveloperCVPage() {
  return (
    <AnimatedPageWrapper>
      <CVPreview cvKey="backend-developer" />
    </AnimatedPageWrapper>
  );
}
