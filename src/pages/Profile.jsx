import React, { useState } from "react";

function Profile() {
  
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "thismail@myemail.com",
  });
  const { name, email } = formData;

  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="mt-6 px-3 w-full md:w-[50%]">
          <form className="flex flex-col ">
            <input
              type="text"
              id="name"
              value={name}
              disabled
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out mb-6"
            />
            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out mb-6"
            />
            <div className=" flex justify-between mb-6 whitespace-nowrap text-sm md:text-lg">
              <p className="flex items-center">
                Want to change your name?
                <span className="ml-1 text-red-600 hover:text-red-700 transition ease-in-out duratio-200 cursor-pointer">
                  Edit
                </span>
              </p>
              <p>
                <span to="/sign-up" className="text-blue-600 hover:text-blue-800 transition ease-in-out duration-200 cursor-pointer">
                  Sign out
                </span>
              </p>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full bg-blue-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-blue-800 active:bg-blue-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded"
            >
              Sell or rent your home
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
