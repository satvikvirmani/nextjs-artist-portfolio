import * as React from "react";
import { useState } from "react";

import { Login } from "../hooks/useLogin";
import { UploadForm } from "./UploadForm";

export const LoginForm: React.SFC = () => {
  const [isSuccessfull, setIsSuccessfull] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.admin_email.value, e.target.admin_password.value);
    Login(e.target.admin_email.value, e.target.admin_password.value)
      .then((res) => {
        setIsSuccessfull(true);
        setError("");
      })
      .catch((err) => {
        setIsSuccessfull(false);
        setError(err);
      });
  };

  const renderSwitch = (code: string | null) => {
    switch (code) {
      case "auth/invalid-email":
        return "Invalid Email";
      case "auth/user-not-found":
        return "No user found with specified credentials";
      case "auth/wrong-password":
        return "Incorrect Password";
      default:
        return code;
    }
  };

  return (
    <>
      {isSuccessfull ? (
        <UploadForm />
      ) : (
        <form
          onSubmit={handleSubmit}
          action=""
          className="py-6 col-span-10 col-start-2 col-end-12 w-full md:w-3/5 xl:4/12 mx-auto"
          autoComplete={"on"}
        >
          <h1 className="text-4xl font-light my-8 text-center">Login</h1>
          <div className="my-4 row-span-1 w-full h-20 grid grid-rows-3 grid-cols-1 gap-2">
            <label
              htmlFor="admin_email"
              className="block row-span-1 text-sm font-light text-gray-600"
            >
              E-Mail*
            </label>
            <input
              type="email"
              name="admin_email"
              id="admin_email"
              className="row-span-2 h-full w-full bg-transparent border focus:outline-none border-gray-500 p-2 text-sm text-gray-600 font-light"
              required={true}
            />
          </div>
          <div className="my-4 row-span-1 w-full h-20 grid grid-rows-3 grid-cols-1 gap-2">
            <label
              htmlFor="admin_password"
              className="block row-span-1 text-sm font-light text-gray-600"
            >
              Password*
            </label>
            <input
              type="password"
              name="admin_password"
              id="admin_password"
              className="row-span-2 h-full w-full bg-transparent border focus:outline-none border-gray-500 p-2 text-sm text-gray-600 font-light"
              required={true}
            />
          </div>
          <div className="mt-4 row-span-1 w-full grid grid-rows-1 grid-cols-1 gap-2 text-center text-red-500 text-sm">
            <span>{renderSwitch(error)}</span>
          </div>
          <div className="row-span-1 w-full h-20 grid grid-rows-3 grid-cols-1 gap-2">
            <input
              type="submit"
              name="submit"
              id="submit"
              value="Login"
              className="cursor-pointer row-start-2 row-span-2 h-full w-full max-w-xs mx-auto border focus:outline-none border-gray-600 bg-gray-600 hover:bg-gray-800 text-gray-100"
            />
          </div>
        </form>
      )}
    </>
  );
};
