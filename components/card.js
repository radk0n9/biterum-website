"use client";

import { debounce } from "debounce";
import { Card, Flowbite } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";

const customTheme = {
  card: {
    root: {
      base: "lg:md:max-w-md max-w-[16rem] flex rounded-full border border-gray-200 bg-white shadow-md lg:md:hover:shadow-upside-down-md lg:md:overflow-hidden transition-all duration-700 lg:md:hover:rotate-180 lg:md:hover:transition-style-preserve-3d hover:bg-green-biterum",
      children:
        "flex flex-col justify-center gap-4 lg:md:mx-14 mx-10 lg:md:hover:mx-14 lg:md:h-[22rem] h-[16rem]",
    },
  },
};

const checkMobile = () => {
  try {
    const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
    if (isMobileDevice) {
      console.log("Mobile");
      return true;
    } else {
      console.log("PC");
      return false;
    }
  } catch (ReferenceError) {
    console.log("PC");
    return false;
  } finally {
    null;
  }
};

checkMobile();

export default function CardWithImageAndButoon(props) {
  const [show, updateShow] = useState(false);

  const debounceMouse = debounce(() => updateShow(true), 300);
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
        <article
          onClick={() => {
            checkMobile() ? handleClickMobile() : null;
          }}
          onMouseEnter={() => {
            checkMobile() ? console.log("nic nie robię 1") : handleMouseEnter();
          }}
          onMouseLeave={() => {
            checkMobile() ? console.log("nic nie robię 2") : handleMouseLeave();
          }}
        >
          <Card>
            {show ? (
              <div className="inset-0 transition-all z-10 lg:md:rotate-180 lg:md:w-[16rem] w-[11rem] text-center">
                <a
                  href="#"
                  className="lg:md:text-xl text-md font-bold tracking-tight bg-greend-biterum hover:bg-white text-center border-2 border-transparent p-2 rounded-full cursor-pointer "
                >
                  Przeczytaj więcej
                </a>
              </div>
            ) : (
              <div className="inset-0 transition-all duration-100 delay-200 z-20 hover:opacity-0">
                <Image
                  width={40}
                  height={40}
                  src={`icons/${props.image}.svg`}
                  alt={`${props.image}`}
                  className="mx-auto"
                />
                <h5 className="lg:md:text-xl text-md font-bold tracking-tight text-center">
                  {props.title}
                </h5>
                <p className="lg:md:text-[0.9rem] text-[0.65rem] text-center">
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
