"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutPreview() {
  return (
    <section className="w-full bg-gradient-to-b from-white via-primary/5 to-white" id="about">
      <div className="container relative py-12 sm:py-16 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8 sm:space-y-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-transparent text-center sm:text-left"
          >
            Beauty Salon In Sharjah
          </motion.h2>

          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 lg:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:w-1/2"
            >
              <Image
                src="/images/pexels-gustavo-fring-3985349-(1).jpg"
                alt="Beauty Salon Services"
                width={800}
                height={600}
                className="h-[300px] sm:h-[400px] lg:h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col justify-center gap-8 sm:gap-10 lg:gap-12 lg:w-1/2"
            >
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-primary">
                  Professional Services
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
                  Indulge in a comprehensive suite of beauty services, featuring expertly crafted
                  hairdressing styles, precision manicure and pedicure techniques and artful makeup
                  designs.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-primary">
                  Unique Procedures & Products
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
                  The beauty industry are constantly evolving with the latest technological
                  advancements. Our salon actively tracks emerging trends and incorporates only the
                  most cutting-edge technologies into our services, ensuring that our clients have
                  access to the best and most innovative treatments available.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
