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
      profileUrl: "https://g.co/kgs/GFEgrHz",
      profileImage:
        "https://lh3.googleusercontent.com/a-/ALV-UjXfGakdR4K04DfMRCwemKeWK6l1q9Cw-7nzWGoT_Mtdiw5u355W=s40-c-rp-mo-br100",
    },
    {
      name: "Sana Fatima",
      content:
        "Thanks to Minal and team, the protein treatment looks amazing on my hair! I would highly recommend and the services provide by them are amazing! Loved my new haircut as well! 10/10",
      profileUrl: "https://g.co/kgs/Q8ZKmov",
      profileImage:
        "https://lh3.googleusercontent.com/a/ACg8ocKUyz3YVxYHK3HHRednp6N8hvlsJtrBSy0C6an2YBUnn5qyHdo=s40-c-rp-mo-br100",
    },
    {
      name: "Iman Khan",
      content:
        "I went to this salon to get my nails, makeup and hair protein done. I received exceptional service and am extremely happy with all the results. The staff went above and beyond and were very polite and understanding of what I wanted. I received many compliments and would highly recommend it!",
      profileUrl: "https://g.co/kgs/M6xBbTe",
      profileImage:
        "https://lh3.googleusercontent.com/a/ACg8ocILD496Lyx25DQLlA5wKj13kuv5bnf07xl87h-qUuX1C3KxFg=s40-c-rp-mo-br100",
    },
    {
      name: "Mahdiya Merchant",
      content:
        "I had asked for Caramel Highlights & they did an amazing job. Very satisfied, calm & clean staff. They did better than the photo I showed them! Will definitely come again! ;)",
      profileUrl: "https://g.co/kgs/4pkDXFW",
      profileImage:
        "https://lh3.googleusercontent.com/a-/ALV-UjVFvUg-4H73mfXYrG3g7MtPoUK1muh2_SujRAG5j4Kt1XwgX40=s40-c-rp-mo-br100",
    },
    {
      name: "Ahid Hussain",
      content:
        "They are providing the best services specially for henna and hair protein my wife is a regular customer of theres thankyou.",
      profileUrl: "https://g.co/kgs/ZxD59T5",
      profileImage:
        "https://lh3.googleusercontent.com/a-/ALV-UjW74XFjPxByGLNw0Ll8r-chnaB1GQNdaceKKTFdOhZfUBCXDC5J=s40-c-rp-mo-ba3-br100",
    },
    {
      name: "K .K",
      content:
        "I got my nails done here and it was such a great experience, the workers were really friendly and i enjoyed my time there so much i will definitely be visiting again",
      profileUrl: "https://g.co/kgs/1KGca6h",
      profileImage:
        "https://lh3.googleusercontent.com/a-/ALV-UjUR2eaPEnYWGN7ifEbFgu4YtvjqsL38u9YJh-Thq_hVwYRFXqpw=s40-c-rp-mo-br100",
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
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <a
                              href={testimonial.profileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full ring-2 ring-primary/10 transition-all hover:ring-primary/30"
                            >
                              <img
                                src={testimonial.profileImage}
                                alt={testimonial.name}
                                className="h-full w-full object-cover"
                              />
                            </a>
                            <div>
                              <p className="text-sm sm:text-base font-medium text-primary">
                                {testimonial.name}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-4 h-4 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
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
