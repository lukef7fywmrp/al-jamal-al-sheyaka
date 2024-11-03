import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container flex flex-col gap-8 sm:gap-10 relative justify-center z-10 py-28 h-[50vh] md:h-screen">
      <div className="max-w-xs md:max-w-md lg:max-w-lg space-y-6 md:space-y-8">
        <h1 className="font-semibold text-white uppercase md:text-5xl max-w-xl text-xl">
          Luxurious Hair Treatments Beauty Salon
        </h1>
        <p className="font-light tracking-wide md:text-lg text-xs">
          Luxurious Beauty Salon Services in Buhira, Corniche St, Al Khan - Al Majaz 3 - Sharjah,
          United Arab Emirates
        </p>
        <div>
          <Button
            size="lg"
            asChild
            variant="outline"
            className="cursor-pointer bg-transparent rounded-none text-white hover:bg-white duration-300 text-sm h-16 uppercase"
          >
            <Link href="#">Book an Appointment</Link>
          </Button>
        </div>
      </div>
      <div className="relative sm:mt-8">
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </div>
    </section>
  );
}
