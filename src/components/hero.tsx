"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="absolute inset-0 z-20 flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-4 py-20 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative space-y-6 sm:space-y-8 text-center"
      >
        <div className="space-y-3 sm:space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent drop-shadow-lg"
          >
            Luxurious Hair Treatments
            <br className="hidden sm:block" />
            Beauty Salon
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto max-w-[280px] sm:max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg text-white/90 drop-shadow-md"
          >
            Luxurious Beauty Salon Services in Buhira, Corniche St, Al Khan - Al Majaz 3 - Sharjah,
            United Arab Emirates
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto rounded-full bg-white px-6 sm:px-8 text-sm sm:text-base text-primary shadow-lg transition-all hover:bg-white/90 hover:shadow-xl hover:text-primary/90"
            >
              <Link
                href="https://wa.me/971553141778?text=Hello, I would like to book an appointment."
                target="_blank"
                className="font-medium tracking-wider"
              >
                BOOK NOW
              </Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full border-2 border-white bg-black/20 px-6 sm:px-8 text-sm sm:text-base text-white backdrop-blur-sm transition-all hover:bg-black/30 hover:border-white/90 hover:text-white/90 hover:shadow-lg"
            >
              <Link href="/#services" className="font-medium tracking-wider">
                OUR SERVICES
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-primary/10 [filter:blur(120px)]" />
      </div>
    </section>
  );
}
