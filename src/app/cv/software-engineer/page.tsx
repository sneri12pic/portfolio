import type { Metadata } from "next";
import { AnimatedPageWrapper } from "@/components/AnimatedPageWrapper";
import { CVPreview } from "@/components/CVPreview";

export const metadata: Metadata = {
  title: "Stepan Demianenko | Software Engineer CV",
  description:
    "Software Engineer CV preview and download for Stepan Demianenko.",
  alternates: { canonical: "/cv/software-engineer" }
};

export default function SoftwareEngineerCVPage() {
  return (
    <AnimatedPageWrapper>
      <CVPreview cvKey="software-engineer" />
    </AnimatedPageWrapper>
  );
}
