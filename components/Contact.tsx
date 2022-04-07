import * as React from "react";

// Using require as normal import causes typescript error
const Fade = require("react-reveal/Fade");
import { data } from "../mock/mock";

export const Contact: React.SFC = () => {
  return (
    <>
      <Fade>
        <section
          className="py-8 col-span-10 col-start-2 col-end-12 bg-yellow-500 grid grid-cols-1 md:grid-cols-2 gap-4 px-4"
          style={{ backgroundColor: "#fcd5ce" }}
        >
          <div className="text-center">
            <h1 className="text-4xl font-light my-8 text-gray-700">Contact</h1>
            <h3 className="text-lg font-extralight my-4 text-gray-600">
              {data.email}
            </h3>
          </div>
          <form
            className="grid grid-rows-6 gap-6"
            action="https://formsubmit.co/garimamalik28199@gmail.com"
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value="Someone wants to contact you from website"
            />
            <input type="hidden" name="_captcha" value="false" />
            <div className="row-span-1 w-full h-16 grid grid-rows-3 grid-cols-1 gap-2">
              <label
                htmlFor="name"
                className="block row-span-1 text-sm font-light text-gray-600"
              >
                Name*
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="row-span-2 h-full w-full bg-transparent border focus:outline-none border-gray-500 p-2 text-sm text-gray-600 font-light"
                required={true}
              />
            </div>
            <div className="row-span-1 w-full h-16 grid grid-rows-3 grid-cols-1 gap-2">
              <label
                htmlFor="email"
                className="block row-span-1 text-sm font-light text-gray-600"
              >
                E-Mail*
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="row-span-2 h-full w-full bg-transparent border focus:outline-none border-gray-500 p-2 text-sm text-gray-600 font-light"
                required={true}
              />
            </div>
            <div className="row-span-1 w-full h-16 grid grid-rows-3 grid-cols-1 gap-2">
              <label
                htmlFor="phone"
                className="block row-span-1 text-sm font-light text-gray-600"
              >
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="row-span-2 h-full w-full bg-transparent border focus:outline-none border-gray-500 p-2 text-sm text-gray-600 font-light"
              />
            </div>
            <div className="row-span-2 w-full h-36 grid grid-rows-5 grid-cols-1 gap-2">
              <label
                htmlFor="message"
                className="block row-span-1 text-sm font-light text-gray-600"
              >
                Message*
              </label>
              <textarea
                name="message"
                id="message"
                className="row-span-4 h-full w-full bg-transparent border focus:outline-none border-gray-500 p-2 text-sm text-gray-600 font-light resize-none"
                required={true}
              ></textarea>
            </div>
            <div className="row-span-1 w-full h-16 grid grid-rows-3 grid-cols-1 gap-2">
              <input
                type="submit"
                name="submit"
                id="submit"
                value="Submit"
                className="cursor-pointer hover:bg-gray-800 transittion-all duration-300 row-start-2 row-span-2 h-full w-full max-w-xs mx-auto bg-gray-600 text-gray-100 border focus:outline-none border-gray-500"
              />
            </div>
          </form>
        </section>
      </Fade>
    </>
  );
};
