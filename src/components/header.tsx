"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { MobileNavbar } from "@/components/mobile-navbar";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-xl border-b border-black/5"
    >
      <div className="container relative flex h-20 items-center justify-between md:justify-center">
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="relative md:absolute md:left-0"
        >
          <Link href="/" className="flex items-center gap-3 transition-all">
            <Image
              alt="Logo"
              src="/images/IMG0215.jpg"
              height={40}
              width={120}
              className="object-contain brightness-100 contrast-100"
              priority
            />
          </Link>
        </motion.div>

        <nav className="hidden md:flex mx-auto space-x-14">
          {[
            ["SERVICES", "/#services"],
            ["ABOUT", "/#about"],
            ["OFFERS", "/#offers"],
            ["CONTACT", "/#contact"],
          ].map(([label, href]) => (
            <motion.div
              key={href}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative group"
            >
              <Link
                href={href}
                className="text-sm font-medium tracking-wider text-primary/80 transition-colors group-hover:text-primary"
              >
                {label}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary/80 via-primary to-primary/80"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-8 relative md:absolute md:right-0">
          <motion.div
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              asChild
              variant="default"
              size="lg"
              className="rounded-full bg-gradient-to-r from-primary to-primary/95 px-10 text-white shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-all hover:bg-primary"
            >
              <Link
                href="https://wa.me/971553141778?text=Hello, I would like to book an appointment."
                target="_blank"
                className="font-semibold tracking-wider flex items-center gap-2"
              >
                <span>BOOK NOW</span>
                <Image
                  alt="WhatsApp"
                  src="/images/whatsapp-(1).png"
                  width={20}
                  height={20}
                  className="brightness-0 invert"
                />
              </Link>
            </Button>
          </motion.div>

          <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen}>
            <nav className="flex flex-col space-y-8">
              {[
                ["Services", "/#services"],
                ["About", "/#about"],
                ["Offers", "/#offers"],
                ["Contact", "/#contact"],
              ].map(([label, href]) => (
                <motion.div
                  key={href}
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center gap-4 text-lg font-medium text-primary/80 transition-colors hover:text-primary"
                  >
                    <span className="h-px w-6 bg-primary/20 transition-all group-hover:w-12 group-hover:bg-primary/60" />
                    {label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="pt-8"
              >
                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-full bg-primary px-8 text-white shadow-lg transition-all hover:bg-primary/90"
                >
                  <Link
                    href="https://wa.me/971553141778?text=Hello, I would like to book an appointment."
                    target="_blank"
                    className="flex items-center justify-center gap-2 font-semibold tracking-wider"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>BOOK NOW</span>
                    <Image
                      alt="WhatsApp"
                      src="/images/whatsapp-(1).png"
                      width={20}
                      height={20}
                      className="brightness-0 invert"
                    />
                  </Link>
                </Button>
              </motion.div>
            </nav>
          </MobileNavbar>
        </div>
      </div>
    </motion.header>
  );
}
