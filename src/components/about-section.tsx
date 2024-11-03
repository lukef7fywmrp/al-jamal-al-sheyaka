"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/5 to-white" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container relative px-4 sm:px-6"
      >
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative overflow-hidden rounded-xl sm:rounded-2xl order-2 lg:order-1"
          >
            <Image
              src="/images/pexels-anastasiya-gepp-654466-2036650.jpg"
              alt="About Our Salon"
              width={800}
              height={600}
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transition duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-4 sm:space-y-6 lg:space-y-8 order-1 lg:order-2"
          >
            <h2 className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-transparent">
              About Our Salon
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              Located in Buhira, Corniche St - Al Khan - Al Majaz 3 - Sharjah, we&apos;re
              conveniently accessible whether you&apos;re looking for a soothing massage, enhance
              your natural beauty or simply seek expert advice on how to care for your skin and
              hair, we&apos;re committed to providing an exceptional experience that will make you
              feel confident and beautiful.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pt-2 sm:pt-4"
            >
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto rounded-full bg-primary text-white shadow-lg transition-all hover:bg-primary/90 text-sm sm:text-base"
              >
                <Link
                  href="https://wa.me/971553141778?text=Hello, I would like to book an appointment."
                  target="_blank"
                  className="font-medium tracking-wider px-6 sm:px-8"
                >
                  BOOK AN APPOINTMENT
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
