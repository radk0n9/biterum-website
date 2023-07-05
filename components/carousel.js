'use client';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';

export default function SlidingInterval() {
  return (
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
  )
}


