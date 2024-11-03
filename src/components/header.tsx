import Link from "next/link";
import Image from "next/image";

import { MobileNavbar } from "@/components/mobile-navbar";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="container flex items-center justify-between gap-10 text-black py-6">
      <Link href="/" className="flex items-center gap-3 flex-1">
        <div className="flex">
          <Image alt="Image" src="/images/IMG0215.jpg" height={500} className="w-28" width={500} />
        </div>
      </Link>
      <nav className="hidden gap-10 md:flex tracking-wider font-light">
        <Link
          href="/about"
          className="flex cursor-pointer items-center text-lg sm:text-sm duration-300"
        >
          SERVICES
        </Link>
        <Link
          href="/docs"
          className="flex cursor-pointer items-center text-lg sm:text-sm duration-300"
        >
          PRICES
        </Link>
        <Link
          href="/blog"
          className="flex cursor-pointer items-center text-lg sm:text-sm duration-300"
        >
          OFFERS
        </Link>
        <Link
          href="/pricing"
          className="flex cursor-pointer items-center text-lg sm:text-sm duration-300"
        >
          OUR SALONS
        </Link>
        <Link
          href="/pricing"
          className="flex cursor-pointer items-center text-lg sm:text-sm duration-300"
        >
          BOOK NOW
        </Link>
      </nav>
      <div className="hidden items-center gap-2 flex-1 justify-end flex">
        <Image
          alt="Image"
          src="/images/whatsapp-(1).png"
          width={28}
          height={28}
          className="absolute"
        />
      </div>
      <MobileNavbar>
        <div className="rounded-b-lg bg-background py-4 container text-foreground shadow-xl">
          <nav className="flex flex-col gap-1 pt-2">
            <Link
              href="/about"
              className="flex w-full cursor-pointer items-center rounded-md p-2 font-medium text-muted-foreground uppercase"
            >
              Services
            </Link>
            <Link
              href="/docs"
              className="flex w-full cursor-pointer items-center rounded-md p-2 font-medium text-muted-foreground uppercase"
            >
              Prices
            </Link>
            <Link
              href="/docs"
              className="flex w-full cursor-pointer items-center rounded-md p-2 font-medium text-muted-foreground uppercase"
            >
              Offers
            </Link>
            <Link
              href="/blog"
              className="flex w-full cursor-pointer items-center rounded-md p-2 font-medium text-muted-foreground uppercase"
            >
              Our Salons
            </Link>
            <Button size="lg" asChild className="mt-2 w-full">
              <Link href="#" className="cursor-pointer uppercase">
                Book Now
              </Link>
            </Button>
          </nav>
        </div>
      </MobileNavbar>
    </header>
  );
}
