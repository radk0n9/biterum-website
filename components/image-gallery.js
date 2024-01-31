"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

export default function ImageGallery({ images }) {
  const [showImage, setShowImage] = useState(null);
  const [setImage, changeImage] = useState(false);
  const [isVisible, setVisible] = useState(false);

  const openImage = (index) => {
    setShowImage(index);
    changeImage(true);
    setVisible(true);
  };

  const closeImage = () => {
    setVisible(false);
    setTimeout(() => {
      changeImage(false);
    }, 400);
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex flex-wrap">
          {images.map((image, index) => (
            <div
              className="flex w-full p-1 transition duration-300 ease-in-out hover:scale-95 md:w-1/2 lg:w-1/3"
              key={uuidv4()}
            >
              <Image
                src={`${image}`}
                loading="eager"
                priority={true}
                width={1000}
                height={1000}
                alt={`${image}`}
                onClick={() => {
                  openImage(index);
                }}
                className="max-h-[30rem] cursor-pointer object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div
          className={`gallery-item fixed left-0 top-0 flex h-full w-full flex-col items-center justify-center transition-all duration-500 ease-in-out ${
            isVisible
              ? "bg-black bg-opacity-75 opacity-100"
              : "invisible opacity-0"
          }`}
          onClick={() => {
            closeImage(showImage);
          }}
        >
          <div className="absolute inset-0 h-full">
          {setImage ?
            <Image
              src={setImage ? images[showImage] : undefined}
              fill={true}
              alt={`${images[showImage]}`}
              onClick={() => closeImage(showImage)}
              className="object-scale-down p-6"
            />
            : <></>
          }
          </div>
        </div>
      </div>
    </>
  );
}
