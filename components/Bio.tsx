import * as React from "react";

import Link from "next/link";
import Image from "next/image";

// Using require as normal import causes typescript error
const Fade = require("react-reveal/Fade");
import { data } from "../mock/mock";

const bioImageLoader = (props: any) => {
  return props.src.toString();
};

export const Bio: React.SFC = () => {
  return (
    <>
      <section className="py-8 col-span-10 col-start-2 col-end-12 text-center text-gray-600 font-light">
        <Image
          loader={bioImageLoader}
          src="https://res.cloudinary.com/wecloud/image/upload/v1625592156/artist-portfolio/bio_i7nqs3.jpg"
          alt="Picture for Bio"
          objectFit="contain"
          width={1200}
          height={600}
        />
        <Fade cascade>
          <h1 className="text-xl my-6 w-full md:w-4/5 text-center mx-auto">
            This is me !
          </h1>
          <p className="text-base my-6 w-full md:w-4/5 text-justify mx-auto">
            {data.aboutme_para1}
          </p>
          <p className="text-base my-6 w-full md:w-4/5 text-justify mx-auto">
            {data.aboutme_para2}
          </p>
        </Fade>
        <p className="underline cursor-pointer text-sm w-full md:w-4/5 text-center mx-auto hover:text-gray-800">
          <Link href="/admin">Add content</Link>
        </p>
        <Link href="/contact" passHref>
          <button className="text-gray-100 my-6 bg-gray-600 hover:bg-gray-800 px-8 py-4 focus:outline-none">
            Get in touch
          </button>
        </Link>
      </section>
    </>
  );
};
