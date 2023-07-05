'use client';
import { Carousel, Flowbite, Footer } from 'flowbite-react';
import Image from 'next/image';

const customTheme = {
  carousel: {
    root: {
      base: "relative h-full w-full",
      leftControl: "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
      rightControl: "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none",
    },
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-biterum3/60 group-hover:bg-gray-biterum6/80 group-focus:outline-none group-focus:ring-4 group-focus:ring-gray-biterum10 sm:h-10 sm:w-10",
      icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
    },
  },
}

export default function SlidingInterval() {
  return (
    <Flowbite theme={{theme: customTheme}}>
      <Carousel slideInterval={5000}>
        <Image
          src="/biterum-cs4.jpg"
          alt="biterum-cs4"
          height={960}
          width={480}
        />
        <Image
          alt="biterum-cs2"
          src="/biterum-cs2.jpg"
          height={960}
          width={480}
        />
        <Image
          alt="biterum-cs1"
          src="/biterum-cs1.jpg"
          height={960}
          width={480}
        />
        <Image
          alt="biterum-cs3"
          src="/biterum-cs3.jpg"
          height={960}
          width={480}
        />
      </Carousel>
    </Flowbite>
  )
}


