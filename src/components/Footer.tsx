import Link from "next/link";
import { contact } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-petal/70 bg-white/45">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-2xl font-semibold text-charcoal">
            Stepan Demianenko
          </p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-warm-gray">
            Graduate software engineering portfolio for backend APIs, Android
            applications, and reliable full-stack systems.
          </p>
          <p className="mt-4 text-sm text-warm-gray">
            Copyright {new Date().getFullYear()} Stepan Demianenko. {contact.location}.
          </p>
        </div>
        <div className="flex flex-wrap items-start gap-3 md:justify-end">
          <a className="rounded-full px-3 py-2 text-sm font-semibold text-clay hover:bg-cream" href={contact.github}>
            GitHub
          </a>
          <a className="rounded-full px-3 py-2 text-sm font-semibold text-clay hover:bg-cream" href={contact.linkedin}>
            LinkedIn
          </a>
          <a className="rounded-full px-3 py-2 text-sm font-semibold text-clay hover:bg-cream" href={`mailto:${contact.email}`}>
            Email
          </a>
          <Link className="rounded-full px-3 py-2 text-sm font-semibold text-clay hover:bg-cream" href="/cv">
            CV hub
          </Link>
        </div>
      </div>
    </footer>
  );
}
