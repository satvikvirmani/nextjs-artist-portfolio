import * as React from "react";
import { useState } from "react";

import Image from "next/image";

import SwiperCore, { Navigation, Pagination, Keyboard, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";

SwiperCore.use([Pagination, Navigation, Keyboard, Lazy]);

export interface GalleryProps {
  currentIndex: number;
  close: Function;
  list: Array<object>;
}

const firebaseLoader = (props: any) => {
  return props.src.toString();
};

export const Gallery: React.SFC<GalleryProps> = (GalleryProps) => {
  const [imageDimensions, setImageDimensions] = useState([0, 0]);

  React.useEffect(() => {
    setImageDimensions(handleDimensionChange()); // to get initial image dimensions

    function handleResize(): void {
      setImageDimensions(handleDimensionChange());
    }
    if (typeof window != "undefined") {
      window.addEventListener("resize", handleResize); // handle resize

      return function cleanupListener() {
        // removing event listener improves efficiency
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [setImageDimensions]);

  return (
    <>
      <motion.main
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full z-30 h-screen col-span-12 col-start-1 col-end-13"
      >
        <div className="fixed top-0 z-50 w-full flex flex-row justify-end p-2">
          <button
            onClick={() => {
              GalleryProps.close();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 md:h-8 md:w-8 text-gray-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <Swiper
          className="w-full h-full"
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          keyboard={{ enabled: true }}
          loop={true}
          zoom={true}
          lazy={true}
          speed={250}
          initialSlide={GalleryProps.currentIndex}
        >
          {GalleryProps.list.map((img: any, index: number) => {
            return (
              <SwiperSlide
                key={index}
                className="relative bg-gray-50 bg-opacity-95 w-full h-full grid place-items-center"
              >
                <Image
                  loader={firebaseLoader}
                  src={img.url}
                  alt={img.label}
                  width={imageDimensions[0]}
                  height={imageDimensions[1]}
                  className="cursor-pointer object-cover w-full filter brightness-90 hover:brightness-110 transition-all duration-200"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
                />
                <div className="text-center py-2 top-0 absolute w-full">
                  <h1 className="my-2 font-light text-lg">{img.label}</h1>
                </div>
                <div className="text-center py-2 bottom-4 absolute w-full">
                  <h1 className="my-2 font-light text-sm">{img.description}</h1>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.main>
    </>
  );
};

function handleDimensionChange() {
  var dimensions = [0, 0];

  var width: number = 0;
  var height: number = 0;

  // for browsers that support window like new ones
  if (typeof window.innerWidth != "undefined") {
    (width = window.innerWidth), (height = window.innerHeight);
  }

  // for internet explorer 6 in compatible mode
  else if (
    typeof document.documentElement != "undefined" &&
    typeof document.documentElement.clientWidth != "undefined" &&
    document.documentElement.clientWidth != 0
  ) {
    (width = document.documentElement.clientWidth),
      (height = document.documentElement.clientHeight);
  }

  // for old browsers no one uses
  else {
    (width = document.getElementsByTagName("body")[0].clientWidth),
      (height = document.getElementsByTagName("body")[0].clientHeight);
  }
  if (height > width) {
    var dimensions = [width - width / 10, width - width / 10];
  } else {
    var dimensions = [height - height / 4, height - height / 4];
  }
  return dimensions;
}
