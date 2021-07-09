import * as React from "react";
import { useState } from "react";

import Link from "next/link";

import { Progressbar } from "./Progressbar";

interface selected {
  image: File;
  label: string;
  description: string;
  forShowcase: boolean;
}

export const UploadForm: React.SFC = () => {
  const [uploadError, setUploadError] = useState("");
  const [image, setImage] = useState<selected | any>(null);
  const [forShowcase, setForShowcase] = useState(false);

  //event when form is submitted
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);

    console.log("submit init");
    console.log(e.target.imageUpload.files[0]);

    let selected: selected = {
      image: e.target.imageUpload.files[0],
      label: e.target.imageLabel.value,
      description: e.target.imageDescription.value,
      forShowcase: forShowcase,
    };
    const mediaTypes = ["image/png", "image/jpeg", "image/jpg"];

    if (selected && mediaTypes.includes(selected.image.type)) {
      setUploadError("");
      setImage(selected);
    } else {
      setUploadError("Please select png or jpg images");
      setImage(null);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        action=""
        className="py-6 col-span-10 col-start-2 col-end-12 w-full md:w-3/5 xl:4/12 mx-auto"
        autoComplete={"off"}
      >
        <h1 className="text-4xl font-light my-8 text-center">Upload</h1>
        {image && <Progressbar image={image} setImage={setImage} />}
        <div className="relative my-4 py-6 row-span-1 border-2 rounded-lg border-dashed border-gray-500 w-full grid place-items-center">
          <label
            htmlFor="imageUpload"
            className="w-full h-full grid place-items-center block text-lg font-light text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" mt-4 h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <p className="text-center">
              Upload from your device
              <span className="block text-sm">
                (size size should be approx 0.5 MB .png/.jpeg)
              </span>
            </p>
          </label>
          <input
            hidden={true}
            type="file"
            name="imageUpload"
            id="imageUpload"
            className="px-4 bg-transparent focus:outline-none"
            required={true}
          />
          <span className="absolute bottom-1 text-sm text-red-400">
            {uploadError}
          </span>
        </div>
        <div className="my-4 row-span-1 w-full h-20 grid grid-rows-3 grid-cols-1 gap-2">
          <label
            htmlFor="imageLabel"
            className="block row-span-1 text-sm font-light text-gray-600"
          >
            Image Label*
          </label>
          <input
            type="text"
            name="imageLabel"
            id="imageLabel"
            className="px-4 row-span-2 h-full w-full bg-transparent border focus:outline-none border-gray-500 p-2 text-sm text-gray-600 font-light"
            required={true}
          />
        </div>
        <div className="my-4 row-span-1 w-full h-32 grid grid-rows-3 grid-cols-1 gap-2">
          <label
            htmlFor="imageDescription"
            className="block row-span-1 text-sm font-light text-gray-600"
          >
            Image Description*
          </label>
          <textarea
            name="imageDescription"
            id="imageDescription"
            className="row-span-4 h-full w-full bg-transparent border focus:outline-none border-gray-500 p-2 text-sm text-gray-600 font-light resize-none"
            required={true}
          ></textarea>
        </div>
        <div className="my-4 row-span-1 w-full my-4 flex flex-row justify-start gap-2">
          <label
            htmlFor="image-inshowcase"
            className="block row-span-1 text-sm font-light text-gray-600"
          >
            Show this image in Showcase(Homepage)
          </label>
          <input
            type="checkbox"
            name="image-inshowcase"
            id="image-inshowcase"
            className=""
            required={false}
            onChange={() => {
              setForShowcase(!forShowcase);
            }}
          />
        </div>
        <div className="my-4 row-span-1 w-full h-20 grid grid-rows-3 grid-cols-1 gap-2">
          <input
            type="submit"
            name="submit"
            id="submit"
            value="Upload"
            className="cursor-pointer row-start-2 row-span-2 h-full w-full max-w-xs mx-auto border focus:outline-none border-gray-600 bg-gray-600 hover:bg-gray-800 text-gray-100"
          />
        </div>
        <Link href="/" passHref>
          <p className="text-sm font-light text-gray-600 text-center underline cursor-pointer">
            Go Home
          </p>
        </Link>
      </form>
    </>
  );
};
