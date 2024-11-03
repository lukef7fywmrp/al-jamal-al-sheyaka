"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ServicesGrid() {
  const services = [
    {
      title: "BEAUTY PACKAGES",
      image: "/images/pexels-laura-james-6102143.jpg",
    },
    {
      title: "MANICURE & PEDICURE",
      image: "/images/pexels-kpaukshtite-704815.jpg",
    },
    {
      title: "EYELASHES & EYEBROWS MAKEUP",
      image: "/images/pexels-pixabay-63320.jpg",
    },
    {
      title: "HAIR",
      image: "/images/pexels-orlovamaria-4906283-2.jpg",
    },
    {
      title: "FACIAL & BODY TREATMENTS",
      image: "/images/pexels-gustavo-fring-3985338.jpg",
    },
    {
      title: "BODY SHAPING",
      image: "/images/pexels-cottonbro-5742282.jpg",
    },
    {
      title: "HAIR REMOVALS",
      image: "/images/pexels-shvetsa-5069508.jpg",
    },
    {
      title: "HENNA DESIGN",
      image: "/images/2936373411919053598459755059778514571623782n.jpg",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-24 lg:py-32" id="services">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/5 to-white" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container relative space-y-8 sm:space-y-12 px-4 sm:px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-transparent text-center"
        >
          Our Services
        </motion.h2>

        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-md sm:shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={500}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110 group-hover:saturate-100 saturate-50"
                  priority={index < 4}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 w-full p-3 sm:p-4">
                <h3 className="text-center text-xs sm:text-sm font-medium tracking-wider text-white drop-shadow-md">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
