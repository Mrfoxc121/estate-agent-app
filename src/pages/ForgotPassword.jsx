import React, { useState } from "react";
import formImg from "../assets/img/formImg.png";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  function onChange(e) {
    setEmail(e.target.value);
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      <div className="flex flex-wrap items-center justify-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img className="w-full rounded-2xl" src={formImg} alt="" />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form className="">
            <input
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={onChange}
            />
            <div className="flex justify-between whitespace-nowrap text-sm :sm:text-lg">
              <p className="mb-6 ">
                Dont have an account?
                <Link
                  to="/sign-up"
                  className="text-red-600 hover:text-red-700 ml-1 transition duration-700 ease-in-out"
                >
                  Register here
                </Link>
              </p>
              <p>
                <Link
                  className="text-blue-600 hover:text-blue-800"
                  to="/sign-in"
                >
                  Sign in instead
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 active:shadow-sm transition duration-150 ease-in-out text-white text-sm font-medium rounded shadow-md hover:shadow-lg uppercase px-7 py-3"
              type="sumbit"
            >
             Send Reset Password
            </button>
            <div className="my-4 before:border-t before:border-gray-600 flex before:flex-1 items-center after:border-t after:border-gray-600 flex after:flex-1 ">
              <p className="text-center font-semibold mx-4">Or</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
