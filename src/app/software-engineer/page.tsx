import type { Metadata } from "next";
import { AnimatedPageWrapper } from "@/components/AnimatedPageWrapper";
import { RolePageLayout } from "@/components/RolePageLayout";

export const metadata: Metadata = {
  title: "Stepan Demianenko | Graduate Software Engineer",
  description:
    "Graduate Software Engineer portfolio for Stepan Demianenko, focused on backend APIs, Android development, system design fundamentals, CI/CD, and product-minded engineering.",
  alternates: { canonical: "/software-engineer" },
  openGraph: {
    title: "Stepan Demianenko | Graduate Software Engineer",
    description:
      "Role-specific portfolio for graduate software engineering applications.",
    url: "/software-engineer"
  }
};

export default function SoftwareEngineerPage() {
  return (
    <AnimatedPageWrapper>
      <RolePageLayout
        role="software"
        title="Graduate Software Engineer"
        heroText="I build practical software across backend APIs, Android applications, databases, and CI/CD workflows, with a focus on maintainable systems and user-focused engineering."
        emphasis={[
          "REST APIs",
          "FastAPI",
          "Android",
          "system design fundamentals",
          "CI/CD",
          "product-minded thinking"
        ]}
        projectOrder={[
          "fitness-app",
          "system-architecture",
          "okta-dashboard",
          "music-and-notes"
        ]}
      />
    </AnimatedPageWrapper>
  );
}
