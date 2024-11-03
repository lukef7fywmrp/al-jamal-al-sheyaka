"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  Carousel,
  CarouselPrevious,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function SpecialOffers() {
  const offers = [
    {
      title: "Hair Treatment",
      description: "Haircut and coloring with FREE protein treatment",
      image: "/images/pexels-cottonbro-4153800.jpg",
    },
    {
      title: "BrowLift",
      description: "LashLift and BrowLift makeup + cleaning and FREE coloring",
      image: "/images/pexels-mart-production-7290118.jpg",
    },
    {
      title: "Body care & facials",
      description:
        "40% discounts for body care and facials limited spot available until 20th October",
      image: "/images/pexels-arina-krasnikova-6663368.jpg",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-24 lg:py-32" id="offers">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/5 to-white" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container relative px-4 sm:px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-transparent text-center mb-8 sm:mb-12 md:mb-16"
        >
          Special Offers
        </motion.h2>

        <Carousel opts={{ loop: true, align: "start" }} className="w-full">
          <CarouselContent>
            {offers.map((offer, index) => (
              <CarouselItem key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="overflow-hidden border-none bg-gray-50/95 backdrop-blur-sm">
                    <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                      <div className="relative overflow-hidden">
                        <Image
                          alt={offer.title}
                          src={offer.image}
                          width={600}
                          height={400}
                          className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full object-cover transition duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                      </div>

                      <CardContent className="flex flex-col justify-center gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8">
                        <div className="space-y-2 sm:space-y-4">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-primary">
                            {offer.title}
                          </h3>
                          <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                            {offer.description}
                          </p>
                        </div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            asChild
                            size="lg"
                            className="w-full rounded-full bg-primary text-white shadow-lg transition-all hover:bg-primary/90 text-sm sm:text-base"
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
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12 size-8 sm:size-10 rounded-full border-2 border-primary bg-white/90 text-primary backdrop-blur-sm hover:bg-white" />
          <CarouselNext className="hidden md:flex -right-4 lg:-right-12 size-8 sm:size-10 rounded-full border-2 border-primary bg-white/90 text-primary backdrop-blur-sm hover:bg-white" />
        </Carousel>
      </motion.div>
    </section>
  );
}
