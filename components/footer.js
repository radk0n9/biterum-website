"use client";

import { Footer, Flowbite } from "flowbite-react";
import Image from "next/image";
import phoneIcon from "@/public/icons/phone.svg";
import mailIcon from "@/public/icons/mail.svg";

const customTheme = {
  footer: {
    root: {
      base: "w-full rounded-lg bg-white shadow dark:bg-gray-800 lg:md:flex lg:md:items-center lg:md:justify-between",
      container: "w-full p-6",
      bgDark: "bg-gray-800",
    },
    groupLink: {
      base: "flex flex-wrap text-sm text-gray-biterum8 dark:text-white",
    },
    title: {
      base: "mb-3 text-base font-bold uppercase text-gray-biterum8 dark:text-white lg:md:mt-2 mt-5",
    },
    copyright: {
      base: "text-sm font-semibold text-gray-biterum4 sm:text-center",
      href: "ml-1 hover:underline hover:text-green-biterum",
      span: "ml-1",
    },
    brand: {
      img: "mr-3 h-10",
      span: "",
    },
  },
};

export default function defaultFooter() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Footer container>
        <div className="w-full text-center">
          <div className="grid w-full lg:md:justify-evenly md:flex md:grid-cols-1">
            <div className="lg:md:mb-4 flex items-center lg:md:mx-0 mx-auto">
              <Footer.Brand
                src="/biterum-logo.png"
                alt="biterum-logo"
                href="https://biterum.pl/"
              />
            </div>
            <Footer.LinkGroup>
              <div className="grid lg:md:grid-cols-2 lg:md:gap-16 lg:md:mt-2 sm:mt-4 sm:grid-cols-1 sm:gap-6">
                <div>
                  <Footer.Title title="Szybki kontakt" />
                  <div className="grid grid-cols-3 flex">
                    <div className="col-span-2 gap-2 flex items-center">
                      <Image
                        priority
                        src={phoneIcon}
                        alt="phone-icon"
                        width={16}
                        height={16}
                      />
                      <p className="text-sm leading-6">biuro i sprzedaż</p>
                    </div>
                    <a
                      href="tel:+48608076432"
                      className="text-sm font-semibold leading-6 hover:text-green-biterum"
                    >
                      608076432
                    </a>
                    <div className="col-span-2 gap-2 flex items-center">
                      <Image
                        priority
                        src={phoneIcon}
                        alt="phone-icon"
                        width={16}
                        height={16}
                      />
                      <p className="text-sm leading-6">sprzedaż</p>
                    </div>
                    <a
                      href="tel:+48698859590"
                      className="text-sm font-semibold leading-6 hover:text-green-biterum"
                    >
                      698859590
                    </a>
                    <div className="col-span-2 gap-2 flex items-center">
                      <Image
                        priority
                        src={phoneIcon}
                        alt="phone-icon"
                        width={16}
                        height={16}
                      />
                      <p className="text-sm leading-6">
                        logistyka i administracja
                      </p>
                    </div>
                    <a
                      href="tel:+48694424042"
                      className="text-sm leading-6 font-semibold hover:text-green-biterum"
                    >
                      694424042
                    </a>
                    <div className="gap-2 flex items-center">
                      <Image
                        priority
                        src={mailIcon}
                        alt="mail-icon"
                        width={16}
                        height={16}
                      />
                      <p className="text-sm leading-6">email</p>
                    </div>
                    <div className="col-span-2 text-right mr-5">
                      <a
                        href="mailto:zapytanie@biterum.pl"
                        className="text-sm leading-6 font-semibold hover:text-green-biterum"
                      >
                        zapytanie@biterum.pl
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <Footer.Title title="Dane firmy" />
                  <div className="grid grid-cols-2 gap-7">
                    <div className="grid grid-row-4 gap-1 text-sm text-left flex">
                      <p className="font-semibold">
                        BITERUM Sp. z o. o. sp. k.
                      </p>
                      <p>ul. Św. Wincentego 10</p>
                      <p>61-003 Poznań</p>
                      <p className="">NIP 972-124-56-30</p>
                    </div>
                    <div className="grid grid-row-4 gap-1 text-sm text-left flex">
                      <p className="font-semibold">MAGAZYN</p>
                      <p>ul. Św. Wincentego 10</p>
                      <p>61-003 Poznań</p>
                      <p>-</p>
                    </div>
                  </div>
                </div>
              </div>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <div className="text-sm font-semibold text-gray-biterum4 sm:text-center">
            © 2023
            <a
              href="https://www.linkedin.com/in/konrad-pawelec/"
              target="_blank"
              className="ml-1 hover:underline hover:text-green-biterum"
            >
              Konrad Pawelec
            </a>
          </div>
        </div>
      </Footer>
    </Flowbite>
  );
}
