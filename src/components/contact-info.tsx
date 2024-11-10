"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import logo from "../../public/images/logo.png";

export function ContactInfo() {
  const openingTimes = [
    { day: "Monday", hours: "11:00 am - 10:30 pm" },
    { day: "Tuesday", hours: "11:00 am - 10:00 pm" },
    { day: "Wednesday", hours: "11:00 am - 10:30 pm" },
    { day: "Thursday", hours: "11:00 am - 10:30 pm" },
    { day: "Friday", hours: "2:00 am - 9:00 pm" },
    { day: "Saturday", hours: "11:00 am - 10:30 pm" },
    { day: "Sunday", hours: "11:00 am - 10:30 pm" },
  ];

  return (
    <section
      className="relative bg-gradient-to-b from-black to-primary/90 py-12 sm:py-24"
      id="contact"
    >
      <div className="absolute inset-0 bg-[url(/images/noise.png)] opacity-20" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container relative px-4 sm:px-6"
      >
        <div className="flex flex-col gap-8 sm:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mx-auto w-[120px] h-[120px] sm:w-[160px] sm:h-[160px]"
          >
            <Image
              alt="Salon Logo"
              src={logo}
              width={160}
              height={160}
              className="rounded-xl shadow-2xl object-contain brightness-0 invert"
              priority
            />
          </motion.div>

          <div className="grid gap-8 sm:gap-16 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                Contact Us
              </h2>

              <div className="space-y-4 sm:space-y-6">
                <Link
                  href="#"
                  className="flex sm:hidden items-center gap-3 sm:gap-4 text-gray-300 transition-colors hover:text-white"
                >
                  <FaLocationDot className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                  <span className="text-xs sm:text-sm">
                    Buhira, Corniche St, Al Khan - Al Majaz 3 - Sharjah, UAE
                  </span>
                </Link>

                <Link
                  href="https://wa.me/971553141778"
                  className="flex items-center gap-3 sm:gap-4 text-gray-300 transition-colors hover:text-white"
                >
                  <IoLogoWhatsapp className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                  <span className="text-xs sm:text-sm">+971 55 314 1778</span>
                </Link>

                <Link
                  href="mailto:Aljamalalsheyaka@gmail.com"
                  className="flex items-center gap-3 sm:gap-4 text-gray-300 transition-colors hover:text-white"
                >
                  <IoMdMail className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                  <span className="text-xs sm:text-sm break-all sm:break-normal">
                    Aljamalalsheyaka@gmail.com
                  </span>
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-3 sm:gap-4 text-gray-300 transition-colors hover:text-white"
                >
                  <AiFillInstagram className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                  <span className="text-xs sm:text-sm">minalsohail_beautysalon</span>
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-3 sm:gap-4 text-gray-300 transition-colors hover:text-white"
                >
                  <FaFacebook className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                  <span className="text-xs sm:text-sm">Al-Jamal Al Sheyaka Beauty Center</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                Opening Hours
              </h2>

              <div className="space-y-3 sm:space-y-4">
                {openingTimes.map((time) => (
                  <div
                    key={time.day}
                    className="flex items-center justify-between border-b border-white/10 pb-2 text-xs sm:text-sm text-gray-300"
                  >
                    <span className="font-medium">{time.day}</span>
                    <span>{time.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
