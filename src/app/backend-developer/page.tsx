import type { Metadata } from "next";
import { AnimatedPageWrapper } from "@/components/AnimatedPageWrapper";
import { RolePageLayout } from "@/components/RolePageLayout";

export const metadata: Metadata = {
  title: "Stepan Demianenko | Backend Developer Portfolio",
  description:
    "Backend Developer portfolio for Stepan Demianenko, highlighting Python, Java, REST APIs, FastAPI, Django REST, Spring Boot, Kafka, PostgreSQL, Docker, and CI/CD.",
  alternates: { canonical: "/backend-developer" },
  openGraph: {
    title: "Stepan Demianenko | Backend Developer Portfolio",
    description:
      "Role-specific backend portfolio for graduate and junior developer applications.",
    url: "/backend-developer"
  }
};

export default function BackendDeveloperPage() {
  return (
    <AnimatedPageWrapper>
      <RolePageLayout
        role="backend"
        title="Backend Developer"
        heroText="Backend-focused graduate developer with experience building APIs, microservice-style systems, authentication flows, database-backed applications, and containerised development workflows."
        emphasis={[
          "Python",
          "Java",
          "REST APIs",
          "FastAPI",
          "Django REST",
          "Spring Boot",
          "microservices",
          "Kafka",
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "Docker",
          "GitHub Actions",
          "CI/CD"
        ]}
        projectOrder={[
          "okta-dashboard",
          "system-architecture",
          "midas-core",
          "secure-dev",
          "music-and-notes",
          "fitness-app"
        ]}
        showExperienceAfter={2}
      />
    </AnimatedPageWrapper>
  );
}
