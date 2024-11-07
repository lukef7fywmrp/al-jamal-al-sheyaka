"use client";

import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import Marquee from "react-fast-marquee";

export function Testimonials() {
  const testimonials = [
    {
      name: "loveatfirstbite 09",
      content:
        "It was my first experience at Al Jamal Al Sheyaka beauty saloon and I'm extremely happy with their service. I have done my hair protein treatment from there. Staffs are very friendly and comfortable. Special thanks to my Hairdresser Shabana who is very smiling and works with perfection 👍",
    },
    {
      name: "Sana Fatima",
      content:
        "Thanks to Minal and team, the protein treatment looks amazing on my hair! I would highly recommend and the services provide by them are amazing! Loved my new haircut as well! 10/10",
    },
    {
      name: "Iman Khan",
      content:
        "I went to this salon to get my nails, makeup and hair protein done. I received exceptional service and am extremely happy with all the results. The staff went above and beyond and were very polite and understanding of what I wanted. I received many compliments and would highly recommend it!",
    },
    {
      name: "Mahdiya Merchant",
      content:
        "I had asked for Caramel Highlights & they did an amazing job. Very satisfied, calm & clean staff. They did better than the photo I showed them! Will definitely come again! ;)",
    },
    {
      name: "Ahid Hussain",
      content:
        "They are providing the best services specially for henna and hair protein my wife is a regular customer of theres thankyou.",
    },
    {
      name: "K .K",
      content:
        "I got my nails done here and it was such a great experience, the workers were really friendly and i enjoyed my time there so much i will definitely be visiting again",
    },
  ];

  return (
    <section className="relative py-8 sm:py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/5 to-white" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container relative space-y-6 sm:space-y-12 px-3 sm:px-6"
      >
        <div className="space-y-2 sm:space-y-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-transparent"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground"
          >
            Your satisfaction is our top priority. We&apos;ll work closely with you to ensure that
            we exceed your expectations.
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <Marquee gradient={false} speed={50} pauseOnHover={true} className="overflow-hidden">
            <div className="flex gap-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-[300px] sm:w-[400px] lg:w-[500px] flex-shrink-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="h-full p-1"
                  >
                    <Card className="h-full overflow-hidden border border-black/10 bg-white/95 backdrop-blur-sm transition-all duration-300 hover:border-black/20">
                      <CardContent className="flex h-full flex-col gap-3 sm:gap-6 p-3 sm:p-6 lg:p-8">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary/10">
                            <svg
                              className="w-4 h-4 sm:w-5 sm:h-5 text-primary"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                          </div>
                          <p className="text-xs sm:text-base font-medium text-primary">
                            {testimonial.name}
                          </p>
                        </div>
                        <p className="flex-1 text-xs sm:text-sm text-muted-foreground line-clamp-4 sm:line-clamp-none">
                          {testimonial.content}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </motion.div>
    </section>
  );
}
