import type { Metadata } from "next";
import { AnimatedPageWrapper } from "@/components/AnimatedPageWrapper";
import { RolePageLayout } from "@/components/RolePageLayout";

export const metadata: Metadata = {
  title: "Stepan Demianenko | Android Developer Portfolio",
  description:
    "Android Developer portfolio for Stepan Demianenko, focused on Kotlin, Jetpack Compose, MVVM, Room, Health Connect, and usability-informed product development.",
  alternates: { canonical: "/android-developer" },
  openGraph: {
    title: "Stepan Demianenko | Android Developer Portfolio",
    description:
      "Role-specific Android portfolio for graduate and junior developer applications.",
    url: "/android-developer"
  }
};

export default function AndroidDeveloperPage() {
  return (
    <AnimatedPageWrapper>
      <RolePageLayout
        role="android"
        title="Android Developer"
        heroText="Android-focused graduate developer building Kotlin and Jetpack Compose applications with local-first data handling, clear interaction flows, and user-centred product thinking."
        emphasis={[
          "Kotlin",
          "Jetpack Compose",
          "MVVM",
          "Room",
          "local-first persistence",
          "Health Connect",
          "usability testing",
          "UX-informed product development"
        ]}
        projectOrder={[
          "fitness-app",
          "music-and-notes",
          "okta-dashboard",
          "system-architecture"
        ]}
      />
    </AnimatedPageWrapper>
  );
}
