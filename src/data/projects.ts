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
        alt: "Fitness app home screen with routine and daily activity"
      },
      {
        src: "/images/projects/fitness-app-2.png",
        alt: "Fitness app workout logging screen"
      },
      {
        src: "/images/projects/fitness-app-3.png",
        alt: "Fitness app progress overview screen"
      }
    ],
    videoDemo: "/demos/sdtFitnessApp.mp4",
    repoUrl: "https://github.com/sneri12pic/sdt-fitness-app",
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
    repoUrl: "https://github.com/sneri12pic/okta-dashboard-back",
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
        src: "/images/projects/systemArchitectureCW.png",
        alt: "Java Spring Boot microservices system architecture diagram"
      }
    ],
    repoUrl: "https://github.com/sneri12pic/SystemArchitecture",
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
    repoUrl: "https://github.com/sneri12pic/Music-And-Notes",
    featuredFor: ["software", "backend", "android"],
    status: "Supporting full-stack project"
  },
  {
    slug: "midas-core",
    title: "Midas Core Transaction Service",
    subtitle:
      "Spring Boot microservice processing Kafka transactions for the JPMorgan Chase Forage program.",
    shortDescription:
      "A Spring Boot transaction-processing microservice that consumes money-transfer events from Kafka, validates them against persisted balances, applies an incentive from an external REST API, and exposes balances over HTTP.",
    longDescription:
      "Midas Core is a Spring Boot service built for JPMorgan Chase's Advanced Software Engineering job simulation on Forage. It consumes money-transfer transactions from Kafka, validates them against persisted user balances, applies an incentive returned by an external REST API, persists the result, and serves user balances over HTTP.",
    roleRelevance: {
      software:
        "Shows event-driven service design, validation rules, persistence, and integration with an external API across a realistic transaction workflow.",
      backend:
        "Strong backend evidence: Spring Boot, Kafka consumers, Spring Data JPA, REST integration, and staged test coverage.",
      android:
        "Demonstrates the backend transaction systems and API contracts that financial mobile apps depend on."
    },
    techStack: [
      "Java",
      "Spring Boot",
      "Kafka",
      "Spring Data JPA",
      "REST APIs",
      "Maven"
    ],
    highlights: [
      "Kafka consumer deserialises and validates money-transfer transactions.",
      "Validates sender, recipient, amount, and balance before processing.",
      "Calls an external incentive REST API and applies the returned incentive.",
      "Persists results with Spring Data JPA entities and repositories.",
      "Exposes GET /balance?userId={id} over HTTP.",
      "Staged test suites (TaskOne–TaskFive) cover each stage of the simulation."
    ],
    problem:
      "A transaction-processing service needs to reliably validate incoming money transfers, apply business incentives, and keep balances consistent while integrating with messaging and external APIs.",
    solution:
      "Midas Core consumes transactions from Kafka, enforces validation rules, applies incentives from a REST API, persists balance changes, and exposes balances via an HTTP endpoint.",
    technicalDetails: [
      "Built a TransactionListener Kafka consumer that validates each transaction and updates balances.",
      "Processed a transaction only if the sender and recipient exist, the amount is positive, and the balance covers it.",
      "On success applied sender -= amount and recipient += amount + incentive, then saved a TransactionRecord.",
      "Used JPA entities (UserRecord, TransactionRecord) with Spring Data repositories.",
      "Integrated an external incentive API running locally and exposed balances through BalanceController."
    ],
    outcomes: [
      "Completed all five stages of the JPMorgan Chase Advanced Software Engineering simulation.",
      "Produced clear backend evidence for event-driven processing, validation, and persistence."
    ],
    screenshots: [
      {
        src: "/images/projects/midas-core-1.png",
        alt: "Midas Core transaction service architecture diagram"
      }
    ],
    repoUrl: "https://github.com/sneri12pic/forage-midas",
    featuredFor: ["software", "backend"],
    status: "JPMorgan Chase Forage backend project"
  },
  {
    slug: "secure-dev",
    title: "BankWebsite Security Hardening",
    subtitle:
      "Identifying, exploiting, and mitigating web vulnerabilities in a Java/Jetty banking app.",
    shortDescription:
      "Secure software development coursework based on a vulnerable Java/Jetty banking application, demonstrating how common web vulnerabilities can be exploited and then mitigated without breaking functionality.",
    longDescription:
      "A secure development project built on the vulnerable BankWebsite Java/Jetty application. It demonstrates how common web vulnerabilities can be exploited, then mitigated, across login, account management, balance transfers, and an admin-only password reset workflow — while preserving normal banking functionality.",
    roleRelevance: {
      software:
        "Shows security awareness across realistic application features: spotting flaws, fixing root causes, and re-testing without regressing behaviour.",
      backend:
        "Backend security evidence around authentication, authorisation, parameter tampering, and safe data handling in a Java web app.",
      android:
        "Demonstrates the secure-by-design thinking that carries over to protecting mobile app backends and APIs."
    },
    techStack: ["Java", "Jetty", "Servlets", "SQL", "Web Security"],
    highlights: [
      "Hardened a vulnerable Java/Jetty banking application.",
      "Demonstrated and fixed Hidden Form Field Trust / parameter tampering in the transfer flow.",
      "Demonstrated and fixed Missing Authentication for a critical function (admin password reset).",
      "Followed a show-exploit-fix-retest-verify structure for each vulnerability.",
      "Focused on removing root causes rather than blocking single payloads.",
      "Preserved original banking functionality after each mitigation."
    ],
    problem:
      "Banking-style web applications expose login, transfers, and admin workflows that are easy to get subtly wrong, leaving exploitable security flaws inside normal-looking functionality.",
    solution:
      "The project exploited each vulnerability to prove the risk, then applied secure fixes that addressed the underlying flaw and re-tested to confirm both mitigation and preserved functionality.",
    technicalDetails: [
      "Analysed the BankWebsite servlets for login, account, transfer, customer listing, and admin password reset.",
      "Identified parameter tampering via trusted hidden form fields in the transfer confirmation flow.",
      "Identified a critical function (admin password reset) missing proper authentication.",
      "Applied server-side validation and authentication checks to remove the root causes.",
      "Re-ran the original attacks to confirm mitigation and verified normal banking flows still worked."
    ],
    outcomes: [
      "Produced a clear vulnerability-to-mitigation walkthrough with before/after verification.",
      "Created strong evidence of secure development and threat-modelling thinking."
    ],
    screenshots: [],
    repoUrl: "https://github.com/sneri12pic/SecureDev",
    featuredFor: ["software", "backend"],
    status: "Secure development coursework"
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
