export type CvKey = "software-engineer" | "backend-developer" | "android-developer";

export const cvs: Record<
  CvKey,
  {
    role: string;
    title: string;
    description: string;
    filePath: string;
    downloadLabel: string;
    previewPath: string;
  }
> = {
  "software-engineer": {
    role: "Software Engineer",
    title: "Software Engineer CV",
    description:
      "A broad graduate CV focused on software engineering fundamentals, backend APIs, Android development, projects, and delivery practices.",
    filePath: "/cv/software-engineer-cv.pdf",
    downloadLabel: "Download Software Engineer CV",
    previewPath: "/cv/software-engineer-cv.pdf"
  },
  "backend-developer": {
    role: "Backend Developer",
    title: "Backend Developer CV",
    description:
      "A backend-focused CV highlighting Python, Java, APIs, microservices, data storage, Docker, GitHub Actions, and internship experience.",
    filePath: "/cv/backend-developer-cv.pdf",
    downloadLabel: "Download Backend Developer CV",
    previewPath: "/cv/backend-developer-cv.pdf"
  },
  "android-developer": {
    role: "Android Developer",
    title: "Android Developer CV",
    description:
      "An Android-focused CV highlighting Kotlin, Jetpack Compose, Room, MVVM, Health Connect, usability testing, and product thinking.",
    filePath: "/cv/android-developer-cv.pdf",
    downloadLabel: "Download Android Developer CV",
    previewPath: "/cv/android-developer-cv.pdf"
  }
};

export const cvList = Object.entries(cvs).map(([slug, cv]) => ({
  slug: slug as CvKey,
  ...cv
}));
