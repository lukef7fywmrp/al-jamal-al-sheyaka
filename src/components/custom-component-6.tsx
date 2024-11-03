import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CustomComponent6() {
  return (
    <div className="flex flex-col container gap-6 py-20 md:py-28">
      <div className="flex text-black flex-col gap-7 lg:flex-row">
        <div className="overflow-hidden">
          <img
            src="/images/pexels-anastasiya-gepp-654466-2036650.jpg"
            width={3400}
            className="object-cover duration-300 hover:scale-105 relative h-full"
          />
        </div>
        <div className="space-y-8 max-w-md">
          <h1 className="text-2xl font-semibold md:text-3xl uppercase">About Our Salon</h1>
          <p className="text-muted-foreground">
            Located in Buhira, Corniche St - Al Khan - Al Majaz 3 - Sharjah, we&apos;re conveniently
            accessible whether you&apos;re looking for a soothing massage, enhance your natural
            beauty or simply seek expert advice on how to care for your skin and hair, we&apos;re
            committed to providing an exceptional experience that will make you feel confident and
            beautiful.
          </p>
          <Button
            size="lg"
            asChild
            variant="outline"
            className="cursor-pointer bg-transparent rounded-none duration-300 h-16 text-black hover:bg-black hover:text-white border-black tracking-wide text-sm px-16"
          >
            <Link href="#">BOOK AN APPOINTMENT</Link>
          </Button>
        </div>
        <div className="flex flex-col gap-16" />
      </div>
    </div>
  );
}
