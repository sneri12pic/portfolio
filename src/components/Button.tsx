"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  download?: boolean;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
} & Omit<HTMLMotionProps<"button">, "className" | "children" | "type">;

const styles = {
  primary:
    "bg-rose text-white shadow-card hover:bg-clay focus-visible:outline-rose",
  secondary:
    "border border-petal bg-white/78 text-charcoal shadow-card hover:border-rose hover:text-clay",
  ghost: "text-clay hover:bg-petal/45"
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  download,
  target,
  rel,
  type = "button",
  ...props
}: ButtonProps) {
  const classNames = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition",
    styles[variant],
    className
  );
  const safeRel = target === "_blank" ? rel ?? "noopener noreferrer" : rel;

  if (href) {
    return (
      <motion.span whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <Link
          href={href}
          className={classNames}
          download={download}
          target={target}
          rel={safeRel}
        >
          {children}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      className={classNames}
      {...props}
    >
      {children}
    </motion.button>
  );
}
