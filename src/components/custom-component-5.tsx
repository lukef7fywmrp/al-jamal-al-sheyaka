import Image from "next/image";
import Link from "next/link";

import {
  Carousel,
  CarouselPrevious,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CustomComponent5() {
  return (
    <div className="bg-[#1e1e1e]">
      <section className="container flex flex-col items-center gap-6 sm:gap-7 text-black py-20">
        <Carousel opts={{ loop: true, align: "start" }} className="w-full px-4 xl:px-0">
          <CarouselPrevious className="size-7 xl:-left-12 xl:size-8 -left-5 rounded-none" />
          <CarouselContent>
            <CarouselItem>
              <div className="h-full p-1 rounded-none">
                <Card className="h-full flex bg-transparent rounded-none flex-col border-white lg:flex-row lg:p-10 md:p-10 w-full items-center lg:items-start">
                  <div className="overflow-hidden">
                    <Image
                      alt="Image"
                      src="/images/pexels-cottonbro-4153800.jpg"
                      width={500}
                      height={500}
                      className="object-cover hidden lg:flex group-hover:scale-105 duration-300 hover:scale-105 h-[340px]"
                    />
                  </div>
                  <CardContent className="flex flex-col items-start gap-5 p-7">
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col text-white text-center lg:text-start lg:items-start w-full justify-center gap-4 items-center">
                        <p className="leading-none font-medium uppercase text-2xl md:text-3xl">
                          Offers
                        </p>
                        <div className="space-y-2">
                          <p className="text-muted-foreground">Hair Treatment</p>
                          <p className="text-muted-foreground">
                            Haircut and coloring with FREE protein treatment
                          </p>
                        </div>
                        <Button
                          size="lg"
                          asChild
                          variant="outline"
                          className="cursor-pointer bg-transparent rounded-none hover:bg-white duration-300 text-sm h-14 w-fit px-16 uppercase hover:text-black border-white mt-4"
                        >
                          <Link href="#">Book Online</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="h-full p-1 rounded-none">
                <Card className="h-full flex bg-transparent rounded-none flex-col border-white lg:flex-row lg:p-10 md:p-10 w-full items-center lg:items-start">
                  <div className="overflow-hidden">
                    <Image
                      alt="Image"
                      src="/images/pexels-mart-production-7290118.jpg"
                      width={500}
                      height={500}
                      className="object-cover hidden lg:flex group-hover:scale-105 duration-300 hover:scale-105 h-[340px]"
                    />
                  </div>
                  <CardContent className="flex flex-col items-start gap-5 p-7">
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col text-white text-center lg:text-start lg:items-start w-full justify-center gap-4 items-center">
                        <p className="leading-none font-medium uppercase text-2xl md:text-3xl">
                          Offers
                        </p>
                        <div className="space-y-2">
                          <p className="text-muted-foreground">BrowLift</p>
                          <p className="text-muted-foreground">
                            LashLift and BrowLift makeup + cleaning and FREE coloring.
                          </p>
                        </div>
                        <Button
                          size="lg"
                          asChild
                          variant="outline"
                          className="cursor-pointer bg-transparent rounded-none hover:bg-white duration-300 text-sm h-14 w-fit px-16 uppercase hover:text-black border-white mt-4"
                        >
                          <Link href="#">Book Online</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="h-full p-1 rounded-none">
                <Card className="h-full flex bg-transparent rounded-none flex-col border-white lg:flex-row lg:p-10 md:p-10 w-full items-center lg:items-start">
                  <div className="overflow-hidden">
                    <Image
                      alt="Image"
                      src="/images/pexels-arina-krasnikova-6663368.jpg"
                      width={500}
                      height={500}
                      className="object-cover hidden lg:flex duration-300 hover:scale-105 h-[340px]"
                    />
                  </div>
                  <CardContent className="flex flex-col items-start gap-5 p-7">
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col text-white text-center lg:text-start lg:items-start w-full justify-center gap-4 items-center">
                        <p className="leading-none font-medium uppercase text-2xl md:text-3xl">
                          Offers
                        </p>
                        <div className="space-y-2">
                          <p className="text-muted-foreground">Body care &amp; facials</p>
                          <p className="text-muted-foreground">
                            40% discounts for body care and facials limited spot available until
                            20th October
                          </p>
                        </div>
                        <Button
                          size="lg"
                          asChild
                          variant="outline"
                          className="cursor-pointer bg-transparent rounded-none hover:bg-white duration-300 text-sm h-14 w-fit px-16 uppercase hover:text-black border-white mt-4"
                        >
                          <Link href="#">Book Online</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselNext className="size-7 xl:-right-12 xl:size-8 -right-5 rounded-none" />
        </Carousel>
      </section>
    </div>
  );
}
