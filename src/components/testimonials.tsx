import Image from "next/image";

import {
  Carousel,
  CarouselPrevious,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  return (
    <section className="container flex flex-col items-center gap-6 sm:gap-7 text-black py-20 md:py-28">
      <div className="flex flex-col gap-3 lg:text-center">
        <h2 className="font-semibold text-center uppercase md:text-3xl text-2xl">
          What Client Says
        </h2>
      </div>
      <p className="text-lg text-muted-foreground text-center max-w-xl">
        Your satisfaction is our top priority. We&apos;ll work closely with you to ensure that we
        exceed your expectations.{" "}
      </p>
      <Carousel opts={{ loop: true, align: "start" }} className="mt-6 w-full px-4 xl:px-0">
        <CarouselPrevious className="-left-6 size-7 xl:-left-12 xl:size-8 rounded-none" />
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-full p-1">
              <Card className="h-full duration-300 hover:text-blue-500 rounded-none">
                <CardContent className="flex flex-col items-start gap-5 p-7">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <p className="leading-none font-medium">loveatfirstbite 09</p>
                      <Image
                        alt="Image"
                        src="/images/png-transparent-blue-check-logo-social-media-instagram-verified-badge-symbol-computer-icons-social-media-blue-leaf-influencer-marketing-thumbnail-removebg-preview.png"
                        width={16}
                        height={16}
                      />
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    It was my first experience at Al Jamal Al Sheyaka beauty saloon and i&apos;m
                    extremely happy with their service.I have done my hair protein treatment from
                    there. Staffs are very friendly and comfortable. Special thanks to my
                    Hairdresser Shabana who is very smiling and works with perfection 👍
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-full p-1">
              <Card className="h-full duration-300 hover:text-blue-500 rounded-none">
                <CardContent className="flex flex-col items-start gap-5 p-7">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <p className="leading-none font-medium">Sana Fatima</p>
                      <Image
                        alt="Image"
                        src="/images/png-transparent-blue-check-logo-social-media-instagram-verified-badge-symbol-computer-icons-social-media-blue-leaf-influencer-marketing-thumbnail-removebg-preview.png"
                        width={16}
                        height={16}
                      />
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Thanks to Minal and team,
                    <div>
                      <br />
                      the protein treatment looks amazing on my hair ! I would highly recommend and
                      the services provide by them are amazing ! Loved my new haircut as well !
                      10/10
                    </div>
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-full p-1">
              <Card className="h-full duration-300 hover:text-blue-500 rounded-none">
                <CardContent className="flex flex-col items-start gap-5 p-7">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <p className="leading-none font-medium">Iman Khan</p>
                      <Image
                        alt="Image"
                        src="/images/png-transparent-blue-check-logo-social-media-instagram-verified-badge-symbol-computer-icons-social-media-blue-leaf-influencer-marketing-thumbnail-removebg-preview.png"
                        width={16}
                        height={16}
                      />
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    I went to this salon to get my nails, makeup and hair protein done. I received
                    exceptional service and am extremely happy with all the results. The staff went
                    above and beyond and were very polite and understanding of what I wanted. I
                    received many compliments and would highly recommend it!
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-full p-1">
              <Card className="h-full duration-300 hover:text-blue-500 rounded-none">
                <CardContent className="flex flex-col items-start gap-5 p-7">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <p className="leading-none font-medium">Mahdiya Merchant</p>
                      <Image
                        alt="Image"
                        src="/images/png-transparent-blue-check-logo-social-media-instagram-verified-badge-symbol-computer-icons-social-media-blue-leaf-influencer-marketing-thumbnail-removebg-preview.png"
                        width={16}
                        height={16}
                      />
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    I had asked for Caramel Highlights &amp; they did an amazing job. Very
                    satisfied, calm &amp; clean staff. They did better than the photo I showed them!
                    Will definitely come again! ;)
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-full p-1">
              <Card className="h-full duration-300 hover:text-blue-500 rounded-none">
                <CardContent className="flex flex-col items-start gap-5 p-7">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <p className="leading-none font-medium">Ahid Hussain</p>
                      <Image
                        alt="Image"
                        src="/images/png-transparent-blue-check-logo-social-media-instagram-verified-badge-symbol-computer-icons-social-media-blue-leaf-influencer-marketing-thumbnail-removebg-preview.png"
                        width={16}
                        height={16}
                      />
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    They are providing the best services specially for henna and hair protein my
                    wife is a regular customer of theres thankyou.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-full p-1">
              <Card className="h-full duration-300 hover:text-blue-500 rounded-none">
                <CardContent className="flex flex-col items-start gap-5 p-7">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <p className="leading-none font-medium">K .K</p>
                      <Image
                        alt="Image"
                        src="/images/png-transparent-blue-check-logo-social-media-instagram-verified-badge-symbol-computer-icons-social-media-blue-leaf-influencer-marketing-thumbnail-removebg-preview.png"
                        width={16}
                        height={16}
                      />
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    I got my nails done here and it was such a great experience, the workers were
                    really friendly and i enjoyed my time there so much i will definitely be
                    visiting again
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselNext className="-right-6 size-7 xl:-right-12 xl:size-8 rounded-none" />
      </Carousel>
    </section>
  );
}
