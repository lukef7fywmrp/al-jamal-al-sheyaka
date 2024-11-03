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
      className="sticky top-0 z-50 w-full"
    >
      <div className="absolute inset-0 border-b border-white/5 bg-[#060606]/95 backdrop-blur-xl" />
      <div className="absolute inset-0 bg-[url(/images/noise.png)] opacity-5" />
      <div className="absolute inset-0 bg-primary/5 [filter:blur(100px)]" />

      <div className="container relative flex h-24 items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link href="/" className="flex items-center gap-3 transition-all">
            <Image
              alt="Logo"
              src="/images/IMG0215.jpg"
              height={40}
              width={120}
              className="object-contain brightness-125 contrast-125 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              priority
            />
          </Link>
        </motion.div>

        <nav className="hidden space-x-14 md:flex">
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
                className="text-sm font-medium tracking-wider text-white/90 transition-colors group-hover:text-white"
              >
                {label}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary via-white to-primary/80"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-8">
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
              className="rounded-full bg-gradient-to-r from-white to-white/95 px-10 text-primary shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:bg-white"
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
                  className="drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
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
                    className="group flex items-center gap-4 text-lg font-medium text-white/80 transition-colors hover:text-white"
                  >
                    <span className="h-px w-6 bg-white/20 transition-all group-hover:w-12 group-hover:bg-white/60" />
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
                  className="w-full rounded-full bg-white px-8 text-primary shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
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
                      className="drop-shadow-lg"
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
