"use client";

import React, { useState } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

export default function ImageGallery({ images }) {
  const [showImage, setShowImage] = useState(null);
  const [isVisible, setVisible] = useState(false);

  const openImage = (index) => {
    console.log(openImage);
    setShowImage(index);
  };

  const closeImage = () => {
    setShowImage(null);
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex flex-wrap">
          {images.map((image, index) => (
            <div
              className="w-full p-1 transition duration-300 ease-in-out hover:scale-95 md:w-1/2 lg:w-1/3"
              key={uuidv4()}
            >
              <Image
                src={image}
                loading="eager"
                width={500}
                height={500}
                alt={`${image}`}
                onClick={() => {
                  openImage(index);
                  setVisible(true);
                }}
                className="max-h-[30rem] cursor-pointer object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div
          className={`fixed left-0 top-0 flex h-full w-full flex-col items-center justify-center transition duration-200 ease-in-out ${
            isVisible
              ? "bg-black bg-opacity-75 opacity-100"
              : "invisible opacity-0"
          }`}
          onClick={() => {
            closeImage(showImage);
            setVisible(false);
          }}
        >
          <div className="max-h-screen p-10">
            {/* <button className="fixed">Close</button> */}
            <Image
              src={images[showImage]}
              alt={showImage}
              width={500}
              height={500}
              onClick={() => closeImage(showImage)}
              className="max-h-full max-w-full cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}
