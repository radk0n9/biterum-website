"use client";

import { debounce } from "debounce";
import { Card, Flowbite } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";
import {mobileChecker} from "@/components/mobile-checker"

const customTheme = {
  card: {
    root: {
      base: "md:max-w-md max-w-[16rem] flex rounded-full border border-gray-200 bg-white shadow-md md:overflow-hidden transition ease-in-out duration-700 md:hover:rotate-180 md:hover:transition-style-preserve-3d",
      children:
        "flex flex-col justify-center gap-4 md:mx-14 mx-10 md:hover:mx-14 lg:md:h-[22rem] h-[16rem]",
    },
  },
};

export default function CardWithImageAndButoon(props) {
  const [show, updateShow] = useState(false);

  const debounceMouse = debounce(() => updateShow(true), 0);
  const debounceMobile = debounce(() => updateShow(false), 2000);

  const handleMouseEnter = () => {
    debounceMouse();
  };

  const handleMouseLeave = () => {
    updateShow(false);
    debounceMouse.clear();
  };

  const handleClickMobile = () => {
    updateShow(true);
    debounceMobile();
  };

  return (
    <>
      <Flowbite theme={{ theme: customTheme }}>
        <article>
          <Card
            onClick={() => {
              mobileChecker() ? handleClickMobile() : null;
            }}
            onMouseEnter={() => {
              mobileChecker()
                ? null
                : handleMouseEnter();
            }}
            onMouseLeave={() => {
              mobileChecker()
                ? null
                : handleMouseLeave();
            }}
            className=""
          >
            {show ? (
              <div className="inset-0 transition-transform duration-1000 ease-in-out z-10 md:rotate-180 md:w-[16rem] w-[11rem] text-center">
                <button className="transition ease-in-out duration-200 hover:scale-110">
                  <a
                    href="#"
                    className="md:text-xl text-sm text-gray-700 font-bold tracking-tight hover:text-black text-center md:px-5 px-3 md:py-3.5 py-2.5 rounded-full cursor-pointer shadow-2xl border-4 border-green-biterum6 hover:border-green-biterum3 bg-green-biterum4 focus:ring-4 focus:ring-green-biterum "
                  >
                    Przeczytaj więcej...
                  </a>
                </button>
              </div>
            ) : (
              <div className="inset-0 transition-transform ease-in-out duration-1000 z-20 hover:opacity-0">
                <Image
                  width={40}
                  height={40}
                  src={`icons/${props.image}.svg`}
                  alt={`${props.image}`}
                  className="mx-auto"
                />
                <h5 className="md:text-xl text-md font-bold tracking-tight text-center">
                  {props.title}
                </h5>
                <p className="md:text-[0.9rem] text-[0.65rem] text-center">
                  {props.content}
                </p>
              </div>
            )}
          </Card>
        </article>
      </Flowbite>
    </>
  );
}
