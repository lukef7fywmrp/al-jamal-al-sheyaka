import Image from "next/image";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export function CustomComponent7() {
  return (
    <div className="bg-black flex py-10">
      <div className="container mt-10 flex flex-wrap justify-between pb-16">
        <div>
          <Image
            alt="Image"
            src="/images/957173AD-B095-4A4F-B163-2449835AAC83.JPEG"
            width={120}
            height={120}
          />
        </div>
        <div className="flex mt-10 flex-wrap gap-12 lg:gap-52">
          <div className="mt-10 flex flex-col md:mt-0 lg:grid-cols-3 gap-10">
            <h1 className="font-semibold uppercase">Call Us</h1>
            <div className="flex gap-4 items-center group">
              <MapPin size={26} className="stroke-[1.5px]" />
              <Link
                href="#"
                className="text-sm text-muted-foreground tracking-wide group-hover:text-white duration-300"
              >
                Buhira, Corniche St, Al Khan - Al Majaz 3 - Sharjah, United Arab Emirates
              </Link>
            </div>
            <div className="flex gap-4 items-center tracking-wide group">
              <Phone size={26} className="stroke-[1.5px]" />
              <Link
                href="#"
                className="text-sm text-muted-foreground group-hover:text-white duration-300"
              >
                +971 55 314 1778
              </Link>
            </div>
            <div className="flex gap-4 items-center tracking-wide group">
              <Image alt="Image" src="/images/843786whatsappicon-(1).png" width={26} height={26} />
              <Link
                href="#"
                className="text-sm text-muted-foreground group-hover:text-white duration-300"
              >
                +971 55 314 1778
              </Link>
            </div>
            <div className="flex gap-4 items-center group tracking-wide">
              <Mail size={26} className="stroke-[1.5px]" />
              <Link
                href="#"
                className="text-sm text-muted-foreground group-hover:text-white duration-300"
              >
                Aljamalalsheyaka@gmail.com
              </Link>
            </div>
            <div className="flex gap-4 items-center tracking-wide group">
              <Instagram size={26} className="stroke-[1.5px]" />
              <Link
                href="#"
                className="text-sm text-muted-foreground group-hover:text-white duration-300"
              >
                minalsohail_beautysalon
              </Link>
            </div>
            <div className="flex gap-4 items-center tracking-wide group">
              <Facebook size={26} className="stroke-[1.5px]" />
              <Link
                href="#"
                className="text-sm text-muted-foreground group-hover:text-white duration-300"
              >
                Al-Jamal Al Sheyaka Beauty Center
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <h1 className="font-semibold uppercase">Opening Times</h1>
            <div className="text-sm space-y-2 tracking-wide">
              <div>
                <div className="flex flex-row h-10 gap-40">
                  <div className="w-16">
                    <p>Monday</p>
                    <div />
                  </div>
                  <p>11:00 am - 10:30 pm</p>
                </div>
              </div>
              <div>
                <div className="flex flex-row gap-40 h-10">
                  <div className="w-16">
                    <p>Tuesday</p>
                  </div>
                  <p>11:00 am - 10:00 pm</p>
                </div>
              </div>
              <div>
                <div className="flex flex-row gap-40 h-10">
                  <div className="w-16">
                    <p>Wednesday</p>
                  </div>
                  <p>11:00 am - 10:30 pm</p>
                </div>
              </div>
              <div>
                <div className="flex flex-row gap-40 h-10">
                  <div className="w-16">
                    <p>Thursday</p>
                  </div>
                  <p>11:00 am - 10:30 pm</p>
                </div>
              </div>
              <div>
                <div className="flex flex-row gap-40 h-10">
                  <div className="w-16">
                    <div />
                    <p>Friday</p>
                  </div>
                  <p>2:00 am - 9:00 pm</p>
                </div>
              </div>
              <div>
                <div className="flex flex-row gap-40 h-10">
                  <div className="w-16">
                    <p>Saturday</p>
                  </div>
                  <p>11:00 am - 10:30 pm</p>
                </div>
              </div>
              <div>
                <div className="flex flex-row gap-40 h-10">
                  <div className="w-16">
                    <p>Sunday</p>
                  </div>
                  <p>11:00 am - 10:30 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
