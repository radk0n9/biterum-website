"use client";

import React, { useState } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

export default function ImageGallery({ images }) {
  const [showImage, setShowImage] = useState(null);
  const [isVisible, setVisible] = useState(false);

  const openImage = (index) => {
    setShowImage(index);
  };

  const closeImage = () => {
    setShowImage(null);
  };

  return (
    <div>
      <div className="flex flex-wrap">
        {images.map((image, index) => (
          <div className="w-full p-1 md:w-1/2 lg:w-1/3 transition duration-300 ease-in-out hover:scale-95" key={uuidv4()}>
            <Image
              src={image}
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
        
          <div
            className={`fixed left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-75 transition duration-300 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0 invisible"
            }`}
            onClick={() => {
              closeImage(showImage);
              setVisible(false);
            }}
          >
            <div className="max-h-screen p-10">
              {/* <button className="fixed">Close</button> */}
              <img
                src={images[showImage]}
                alt={showImage}
                onClick={() => closeImage(showImage)}
                className="max-h-full max-w-full cursor-pointer"
              />
            </div>
          </div>
      </div>
  );
}
