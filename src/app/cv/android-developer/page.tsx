import type { Metadata } from "next";
import { AnimatedPageWrapper } from "@/components/AnimatedPageWrapper";
import { CVPreview } from "@/components/CVPreview";

export const metadata: Metadata = {
  title: "Stepan Demianenko | Android Developer CV",
  description: "Android Developer CV preview and download for Stepan Demianenko.",
  alternates: { canonical: "/cv/android-developer" }
};

export default function AndroidDeveloperCVPage() {
  return (
    <AnimatedPageWrapper>
      <CVPreview cvKey="android-developer" />
    </AnimatedPageWrapper>
  );
}
