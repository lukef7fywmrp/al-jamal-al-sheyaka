"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { MdComputer } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";

export function Features() {
  const features = [
    {
      title: "ADVANCED TECHNOLOGIES",
      description:
        "We provide the latest developments in products and services, tailored to meet your beauty and aesthetic requirements.",
      icon: MdComputer,
    },
    {
      title: "HIGH-QUALITY TREATMENTS",
      description:
        "Each individual are unique with different physical characteristics, our team will select the best course of action to achieve your desired results.",
      icon: Check,
    },
    {
      title: "DIVERSE GROUP OF SPECIALISTS",
      description:
        "Our team of expert dermatologists and skincare specialists offers personalized treatment for a wide range of skin concerns, from acne and hyperpigmentation to signs of aging and sensitive skin.",
      icon: FaUsers,
    },
    {
      title: "PERFORMED BY PROFESSIONALS",
      description:
        "Our team are highly trained and certified specialists that delivers top-notch results and exceptional service.",
      icon: FaRankingStar,
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent [filter:blur(120px)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container relative px-4 sm:px-6"
      >
        <div className="grid gap-4 sm:gap-6 md:gap-8 lg:gap-12 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative flex flex-col sm:flex-row max-w-full sm:max-w-md gap-4 sm:gap-6 rounded-xl sm:rounded-2xl border border-white/5 bg-white/5 p-4 sm:p-6 backdrop-blur-sm transition-all hover:border-primary/20 hover:bg-white/10"
            >
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <feature.icon
                  className="h-5 w-5 text-white stroke-[2.5]"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </div>
              <div className="space-y-2 sm:space-y-3">
                <h3 className="text-sm sm:text-base font-semibold tracking-wide text-white/90">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-white/60">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
