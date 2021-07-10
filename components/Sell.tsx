import * as React from "react";

export const Sell: React.SFC = () => {
  return (
    <>
      <div className="py-6 col-span-10 col-start-2 col-end-12 text-center font-light text-gray-600 text-base">
        This website is available for sale.{" "}
        <a
          href="https://www.instagram.com/satvikvirmani/"
          className="underline mx-2"
        >
          Contact Me
        </a>
        if you&apos;re interested in buying.
      </div>
    </>
  );
};
