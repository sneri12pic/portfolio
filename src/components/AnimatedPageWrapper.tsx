"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function AnimatedPageWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
