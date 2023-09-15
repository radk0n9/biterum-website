"use client";

import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NewsArticle(props) {
  const [isAnimated, updateAnimated] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const runAnimation = () => {
    setIsHidden(false);
    updateAnimated(true);
  };

  const stopAnimation = () => {
    updateAnimated(false);
  };

  useEffect(() => {
    if (isAnimated) {
        setIsHidden(true);
    }
  }, [isAnimated]);

  return (
    <>
      <article
        key={uuidv4()}
        className="p-format grid grid-cols-1 gap-2 rounded-xl bg-gray-biterum1 px-3 py-8 shadow-xl md:grid-cols-2 md:gap-6"
        onMouseEnter={() => {
          runAnimation();
        }}
        onMouseLeave={() => {
          stopAnimation();
        }}
      >
        <div
          className={`flex flex-col gap-3 ${
            props.index % 2 === 0 ? "order-1 md:order-1" : "order-1 md:order-2"
          }`}
        >
          <p className="text-xs italic">{props.date}</p>
          <h2 className="text-lg font-semibold">{props.title}</h2>
          <div
            className="text-justify text-base"
            dangerouslySetInnerHTML={{ __html: props.htmlContent }}
          />
          <p>
            Kontakt:<a href={`tel:+48${props.tel}`}> {props.tel}</a>
          </p>
        </div>
        {props.moreThanOneImage[props.index] ? (
          <div
            className={`flex justify-center overflow-hidden rounded-md ${
              props.index % 2 === 0
                ? "order-2 md:order-2"
                : "order-2 md:order-1"
            }`}
          >
            {Array.isArray(props.image) &&
              props.image
                .slice(0, 3)
                .map((image) => (
                  <Image
                    src={`/images-aktualnosci/${props.id}/images/${image}.jpg`}
                    alt={`${image}`}
                    width={600}
                    height={600}
                    className="max-h-[19rem] object-cover"
                    key={uuidv4()}
                  />
                ))}
          </div>
        ) : (
          <div
            className={`grid grid-cols-2 content-center items-center gap-2 ${
              props.index % 2 === 0
                ? "order-2 md:order-2"
                : "order-2 md:order-1"
            }`}
          >
            {Array.isArray(props.image) &&
              props.image
                .slice(0, 3)
                .map((image, index) => (
                  <Image
                    src={`/images-aktualnosci/${props.id}/images/${image}.jpg`}
                    alt={`${image}`}
                    width={500}
                    height={500}
                    className={`max-h-36 rounded-md object-cover transition duration-500 delay-200 ease-in-out hover:scale-110 md:hover:scale-150 order-${index}`}
                    key={uuidv4()}
                  />
                ))}
            <div
              className={`flex items-center justify-center ${
                props.index % 2 === 0 ? "md:order-1 order-3" : "md:order-2 order-3"
              }`}
            >
              <button
                className={`rounded-full bg-green-biterum px-4 py-2 text-[1.15rem] ${
                  isAnimated
                    ? "animate-jump-in animate-once animate-duration-[550ms] animate-ease-in-out animate-normal"
                    : "animate-jump-out animate-once animate-duration-[550ms] animate-ease-in-out animate-normal"
                } ${isHidden ? "hidden" : ""}`}
              >
                <a href={`/aktualnosci/${props.id}`}>
                  Zobacz więcej
                </a>
              </button>
            </div>
          </div>
        )}
      </article>
    </>
  );
}
