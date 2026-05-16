import type { Metadata } from "next";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { AnimatedPageWrapper } from "@/components/AnimatedPageWrapper";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { contact } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Stepan Demianenko | Contact",
  description:
    "Contact Stepan Demianenko for graduate software engineering, backend developer, and Android developer opportunities.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Stepan Demianenko | Contact",
    description: "Email, GitHub, LinkedIn, and contact form for Stepan Demianenko.",
    url: "/contact"
  }
};

export default function ContactPage() {
  return (
    <AnimatedPageWrapper>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Talk about a role or opportunity"
          text="The fastest route is email. The form below prepares a message for your email app, Gmail, or clipboard without exposing any private sending keys."
        />
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-2xl border border-petal bg-white/82 p-6 shadow-card">
            <h2 className="font-display text-2xl font-semibold text-charcoal">
              Direct links
            </h2>
            {/* Keep phone number inside downloadable CV PDFs instead of displaying it publicly to reduce spam risk. */}
            <div className="mt-5 grid gap-3 text-sm">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 rounded-2xl border border-petal bg-cream px-4 py-3 font-semibold text-clay transition hover:border-rose"
              >
                <Mail aria-hidden size={18} /> {contact.email}
              </a>
              <a
                href={contact.github}
                className="flex items-center gap-3 rounded-2xl border border-petal bg-cream px-4 py-3 font-semibold text-clay transition hover:border-rose"
              >
                <Github aria-hidden size={18} /> GitHub
              </a>
              <a
                href={contact.linkedin}
                className="flex items-center gap-3 rounded-2xl border border-petal bg-cream px-4 py-3 font-semibold text-clay transition hover:border-rose"
              >
                <Linkedin aria-hidden size={18} /> LinkedIn
              </a>
              <p className="flex items-center gap-3 rounded-2xl border border-petal bg-cream px-4 py-3 font-semibold text-warm-gray">
                <MapPin aria-hidden size={18} /> {contact.location}
              </p>
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
    </AnimatedPageWrapper>
  );
}
