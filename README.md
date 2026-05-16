# Stepan Demianenko Portfolio

Production domain: `stepandemianenko.dev`

A polished graduate software engineering portfolio built as one cohesive Next.js site with shared branding, shared project data, reusable components, and role-specific landing pages for:

- Graduate Software Engineer
- Backend Developer
- Android Developer

The site is designed for Vercel deployment and avoids hardcoded secrets, fake live links, paid service requirements, and unsupported claims.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Reusable React components
- Data-driven project, CV, skill, education, and experience content

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

Optional TypeScript check:

```bash
npm run typecheck
```

## Replace CV Files

Add or replace these files:

```text
public/cv/software-engineer-cv.pdf
public/cv/backend-developer-cv.pdf
public/cv/android-developer-cv.pdf
```

Keep the same filenames so the existing CV hub, preview pages, and download buttons continue to work.

## Add Screenshots

Project screenshots belong in:

```text
public/images/projects/
```

The current project data references filenames such as:

```text
fitness-app-1.png
fitness-app-2.png
okta-dashboard-1.png
system-architecture-1.png
music-and-notes-1.png
```

To change filenames, edit `src/data/projects.ts`.

## Add a Video Demo

The fitness app case study supports an optional video demo at:

```text
public/demos/fitness-app-demo.mp4
```

If the file is missing, the page shows a friendly placeholder instead of breaking.

## Edit Project Data

Project content lives in:

```text
src/data/projects.ts
```

Each project includes:

- slug
- title
- subtitle
- shortDescription
- longDescription
- roleRelevance
- techStack
- highlights
- problem
- solution
- technicalDetails
- outcomes
- repoUrl
- liveUrl
- screenshots
- videoDemo
- featuredFor
- status

Leave `repoUrl` or `liveUrl` undefined until a real link is ready.

## Edit Skills, Experience, Education, and CV Data

```text
src/data/skills.ts
src/data/experience.ts
src/data/education.ts
src/data/cv.ts
```

These files keep the website content reusable across the homepage, role pages, CV pages, and project pages.

## Upgrade the Contact Form Later

The first version uses a `mailto:` fallback. It validates fields on the client and opens the visitor's email client with a prefilled message. This avoids exposed secrets and does not require a paid email service.

Later upgrade options:

- Add a Vercel Serverless Function or Route Handler.
- Use a transactional email provider.
- Store secrets only in Vercel environment variables.
- Keep validation on both the client and server.

The TODO comment for this upgrade is in `src/components/ContactForm.tsx`.

## Main Routes

```text
/
/software-engineer
/backend-developer
/android-developer
/projects
/projects/fitness-app
/projects/okta-dashboard
/projects/system-architecture
/projects/music-and-notes
/cv
/cv/software-engineer
/cv/backend-developer
/cv/android-developer
/contact
```
