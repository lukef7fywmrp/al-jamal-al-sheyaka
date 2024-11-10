"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-gray-200 bg-white py-6 pb-20 sm:py-8 sm:pb-14">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/5 to-white opacity-50" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container relative px-4 sm:px-6"
      >
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xs sm:text-sm text-muted-foreground"
          >
            AL JAMAL AL SHEYAKA © {new Date().getFullYear()} ALL RIGHTS RESERVED
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute -bottom-8 sm:bottom-0 left-1/2 -translate-x-1/2 transform"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group relative -mb-6 flex items-center gap-1.5 rounded-t-xl bg-gradient-to-r from-primary/90 to-primary px-4 py-1.5 shadow-lg"
            >
              <motion.div
                initial={{ opacity: 0.7 }}
                animate={{
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="absolute inset-0 animate-pulse rounded-full bg-white/30 blur-sm" />
                <Sparkles className="relative h-3.5 w-3.5 text-white" />
              </motion.div>
              <a
                href="https://withspeedweb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-medium text-white sm:text-xs"
              >
                CRAFTED BY <span className="font-bold tracking-wider">SPEEDWEB</span>
              </a>

              <motion.div
                className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-white/20"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="absolute -left-1.5 -right-1.5 -top-1.5 -z-10 rounded-t-xl bg-primary/20 opacity-0 blur-sm transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          >
            <Link
              href="/privacy"
              className="text-xs sm:text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs sm:text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Terms & Conditions
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
