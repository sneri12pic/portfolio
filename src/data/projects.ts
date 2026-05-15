export type RoleKey = "software" | "backend" | "android";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  longDescription: string;
  roleRelevance: Record<RoleKey, string>;
  techStack: string[];
  highlights: string[];
  problem: string;
  solution: string;
  technicalDetails: string[];
  outcomes: string[];
  repoUrl?: string;
  liveUrl?: string;
  screenshots: {
    src: string;
    alt: string;
  }[];
  videoDemo?: string;
  featuredFor: RoleKey[];
  status: string;
};

export const projects: Project[] = [
  {
    slug: "fitness-app",
    title: "SDT-Informed Fitness Motivation App",
    subtitle:
      "Android fitness prototype balancing utility, clarity, and motivational support.",
    shortDescription:
      "An Android honours project prototype exploring how fitness applications can balance useful workout tracking with autonomy-supportive motivational design.",
    longDescription:
      "An Android prototype developed as part of an honours dissertation investigating how fitness applications can balance hedonic and utilitarian design features. The app focused on low-friction workout logging, clear progress feedback, local-first data handling, and optional Health Connect integration.",
    roleRelevance: {
      software:
        "Shows end-to-end product thinking across requirements, implementation, usability testing, iteration, and maintainable Android architecture.",
      backend:
        "Useful supporting evidence for data modelling, local persistence, integration boundaries, and clear system design decisions.",
      android:
        "The strongest Android evidence: Kotlin, Jetpack Compose, MVVM, Room, Health Connect, and research-informed UX decisions."
    },
    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "Room",
      "MVVM",
      "Health Connect",
      "UX Research",
      "Self-Determination Theory"
    ],
    highlights: [
      "Built with Kotlin and Jetpack Compose.",
      "Used MVVM architecture.",
      "Used Room for local persistence.",
      "Included optional Health Connect integration for steps and weight data.",
      "Designed around Self-Determination Theory: autonomy, competence, and relatedness.",
      "Focused on low-friction workout logging and clearer progress feedback.",
      "Evaluated through formative usability testing using SUS, UEQ-S, task observation, and interviews.",
      "Iteratively redesigned after early usability findings."
    ],
    problem:
      "Many fitness apps either optimise for tracking utility or motivational engagement, but can become cluttered, pressuring, or difficult to sustain in everyday use.",
    solution:
      "The prototype explored a calmer Android experience with simple workout logging, visible progress feedback, local-first data, and optional platform health data integration.",
    technicalDetails: [
      "Structured the app around MVVM boundaries so UI state, persistence, and interaction logic stayed easier to reason about.",
      "Used Room for local-first storage of workout data and progress information.",
      "Built Compose screens for workout logging, progress review, and guided motivational moments.",
      "Integrated optional Health Connect data where available without making the prototype depend on external accounts.",
      "Kept claims research-informed and prototype-scoped rather than presenting the app as a commercial or clinical product."
    ],
    outcomes: [
      "Produced an honours project prototype that connects software design decisions with usability evidence.",
      "Used formative testing to identify friction and redesign key flows.",
      "Created a strong Android portfolio case study for Kotlin, Compose, local data, and product-minded engineering."
    ],
    screenshots: [
      {
        src: "/images/projects/fitness-app-1.png",
        alt: "Fitness app workout logging screen placeholder"
      },
      {
        src: "/images/projects/fitness-app-2.png",
        alt: "Fitness app progress feedback screen placeholder"
      }
    ],
    videoDemo: "/demos/fitness-app-demo.mp4",
    featuredFor: ["software", "backend", "android"],
    status: "Research-informed Android prototype"
  },
  {
    slug: "okta-dashboard",
    title: "Okta Dashboard Backend",
    subtitle:
      "Backend dashboard system with authentication, caching, and containerised services.",
    shortDescription:
      "A backend-focused project implementing API services, authentication integration, caching, and containerised development workflows.",
    longDescription:
      "A backend-focused dashboard project built around API structure, authentication awareness, caching support, document-oriented storage, and a Dockerised development environment.",
    roleRelevance: {
      software:
        "Demonstrates practical service implementation, authentication integration, and backend decisions that support reliable product workflows.",
      backend:
        "Direct backend evidence across Django REST, MongoDB, Redis, Docker, and Okta OIDC authentication integration.",
      android:
        "Shows useful backend awareness for Android work that depends on authenticated APIs and reliable service contracts."
    },
    techStack: ["Django REST", "Python", "MongoDB", "Redis", "Docker", "Okta OIDC"],
    highlights: [
      "Django REST backend API structure.",
      "MongoDB for document-oriented storage.",
      "Redis for caching/session-related performance support.",
      "Dockerised development setup.",
      "Okta OIDC authentication integration.",
      "Demonstrates backend API design and authentication awareness."
    ],
    problem:
      "Dashboard-style systems need clear API boundaries, reliable authentication flows, and development environments that are easy to reproduce.",
    solution:
      "The project used Django REST with containerised services, document storage, caching support, and Okta OIDC integration to model a practical backend dashboard architecture.",
    technicalDetails: [
      "Designed REST API endpoints with Django REST Framework conventions.",
      "Used MongoDB for flexible dashboard-oriented data storage.",
      "Added Redis to support caching and session-related performance patterns.",
      "Containerised the development workflow with Docker for easier local setup.",
      "Integrated Okta OIDC to demonstrate authentication flow awareness."
    ],
    outcomes: [
      "Built a focused backend project that can be discussed around API design, authentication, storage, caching, and environment setup.",
      "Created strong evidence for backend graduate and junior developer roles."
    ],
    screenshots: [
      {
        src: "/images/projects/okta-dashboard-1.png",
        alt: "Okta dashboard backend architecture placeholder"
      }
    ],
    featuredFor: ["software", "backend", "android"],
    status: "Backend portfolio project"
  },
  {
    slug: "system-architecture",
    title: "Java Spring Boot Microservices System",
    subtitle: "Modular service architecture using REST, Kafka, and PostgreSQL.",
    shortDescription:
      "A system architecture project demonstrating modular backend services, REST endpoints, event-driven communication, and database-backed service design.",
    longDescription:
      "A Java Spring Boot system architecture project focused on modular services, REST communication, Kafka-based messaging, and PostgreSQL-backed persistence.",
    roleRelevance: {
      software:
        "Shows system design fundamentals, service boundaries, persistence, and communication patterns that matter in graduate engineering roles.",
      backend:
        "Strong backend architecture evidence across Spring Boot, REST APIs, Kafka, PostgreSQL, and microservice-style design.",
      android:
        "Supports Android applications by showing awareness of the backend systems, APIs, and distributed architecture that mobile products often rely on."
    },
    techStack: [
      "Java",
      "Spring Boot",
      "Kafka",
      "PostgreSQL",
      "REST APIs",
      "Microservices"
    ],
    highlights: [
      "Java Spring Boot services.",
      "REST API communication.",
      "Kafka-based event messaging.",
      "PostgreSQL persistence.",
      "Modular service design.",
      "Demonstrates backend architecture and distributed systems awareness."
    ],
    problem:
      "Backend systems often need to split responsibilities across services while keeping data persistence and communication patterns understandable.",
    solution:
      "The project modelled a modular Java backend using REST endpoints for service interaction, Kafka for event messaging, and PostgreSQL for persistence.",
    technicalDetails: [
      "Implemented Spring Boot services with separated responsibilities.",
      "Exposed REST endpoints for synchronous service communication.",
      "Used Kafka to model asynchronous event-driven workflows.",
      "Backed service data with PostgreSQL.",
      "Focused on clear boundaries rather than presenting the project as a production microservices platform."
    ],
    outcomes: [
      "Built a useful discussion piece for backend architecture, service communication, and trade-offs.",
      "Strengthened evidence for backend and general graduate software engineering applications."
    ],
    screenshots: [
      {
        src: "/images/projects/system-architecture-1.png",
        alt: "Microservices system architecture placeholder"
      }
    ],
    featuredFor: ["software", "backend", "android"],
    status: "System architecture project"
  },
  {
    slug: "music-and-notes",
    title: "Music & Notes",
    subtitle: "Web app for PDF viewing and note-taking.",
    shortDescription:
      "A lightweight web application combining PDF viewing with note-taking functionality.",
    longDescription:
      "A supporting full-stack project that combines a Flask backend, JavaScript interactions, PDF viewing, and note-taking workflows.",
    roleRelevance: {
      software:
        "Shows practical full-stack fundamentals, user workflow thinking, and small-system delivery.",
      backend:
        "Supports backend applications through Flask routing, server-side structure, and a simple web workflow.",
      android:
        "Provides product and interaction design evidence that complements mobile-focused work."
    },
    techStack: ["Flask", "JavaScript", "HTML", "CSS", "PDF Viewer"],
    highlights: [
      "Flask backend.",
      "JavaScript frontend interactions.",
      "PDF viewing workflow.",
      "Simple note-taking experience.",
      "Good supporting project for full-stack fundamentals."
    ],
    problem:
      "Students and musicians often need to view documents while capturing related notes without switching between too many tools.",
    solution:
      "The app combined PDF viewing with a lightweight note-taking workflow in a simple Flask-backed web application.",
    technicalDetails: [
      "Used Flask to serve the application and organise backend routes.",
      "Added JavaScript interactions for the document and note-taking experience.",
      "Focused on a straightforward workflow rather than complex account or production features."
    ],
    outcomes: [
      "Created a compact full-stack project that is easy to explain in interviews.",
      "Demonstrated fundamentals across backend routing, frontend behaviour, and user-centred workflow design."
    ],
    screenshots: [
      {
        src: "/images/projects/music-and-notes-1.png",
        alt: "Music and Notes PDF viewer placeholder"
      }
    ],
    featuredFor: ["software", "backend", "android"],
    status: "Supporting full-stack project"
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
