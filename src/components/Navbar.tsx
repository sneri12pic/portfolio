import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";

const links = [
  { href: "/", label: "Home" },
  { href: "/software-engineer", label: "Software Engineer" },
  { href: "/backend-developer", label: "Backend" },
  { href: "/android-developer", label: "Android" },
  { href: "/projects", label: "Projects" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-petal/70 bg-cream/86 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-xl font-semibold text-charcoal">
          Stepan Demianenko
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-warm-gray transition hover:bg-white/75 hover:text-clay"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
