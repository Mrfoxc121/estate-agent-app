import React, { useState } from "react";

function CreateListing() {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offers: false,
    regularPrice: 0,
    discountedPrice: 0,
  });

  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    description,
    offers,
    regularPrice,
    discountedPrice,
  } = formData;

  function onChange() {}
  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">Create a Listing</h1>
      <form>
        <p className="text-lg mt-6 font-semibold">Sell / Rent</p>
        <div className="flex space-x-5">
          <button
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "rent"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
            id="type"
            value="sale"
            onClick={onChange}
            type="button"
          >
            Sell
          </button>
          <button
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "sale"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
            id="type"
            value="rent"
            onClick={onChange}
            type="button"
          >
            rent
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Name</p>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onchange}
          placeholder="Name:"
          maxLength={32}
          minLength={10}
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />

        <div className="flex space-x-6 justify-start mb-6">
          <div>
            <p className="text-lg font-semibold">Bedrooms</p>
            <input
              type="number"
              id="bedrooms"
              value={bedrooms}
              onChange={onChange}
              min={1}
              max={50}
              required
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Bathrooms</p>
            <input
              type="number"
              id="bathrooms"
              value={bathrooms}
              onChange={onChange}
              min={1}
              max={50}
              required
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
            />
          </div>
        </div>
        <p className="text-lg mt-6 font-semibold">Parking Spot</p>
        <div className="flex space-x-5">
          <button
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !parking ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            id="parking"
            value={true}
            onClick={onChange}
            type="button"
          >
            yes
          </button>
          <button
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              parking ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            id="type"
            value={false}
            onClick={onChange}
            type="button"
          >
            no
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Furnished</p>
        <div className="flex space-x-5">
          <button
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !furnished ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            id="parking"
            value={true}
            onClick={onChange}
            type="button"
          >
            yes
          </button>
          <button
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              furnished ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            id="furnished"
            value={false}
            onClick={onChange}
            type="button"
          >
            no
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Address:</p>
        <textarea
          type="text"
          id="address"
          value={address}
          onChange={onchange}
          placeholder="Address:"
          rows={5}
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <p className="text-lg font-semibold">Description:</p>
        <textarea
          type="text"
          id="description"
          value={description}
          onChange={onchange}
          placeholder="Write description:"
          rows={5}
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <p className="text-lg mt-6 font-semibold">Offers</p>
        <div className="flex space-x-5 mb-6">
          <button
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !offers ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            id="offers"
            value={true}
            onClick={onChange}
            type="button"
          >
            yes
          </button>
          <button
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              offers ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            id="offers"
            value={false}
            onClick={onChange}
            type="button"
          >
            no
          </button>
        </div>
        <div className="flex w-full items-center justify-start mb-6">
          <div className="">
            <p className="text-lg font-semibold">Regular Price</p>
            <div className="flex w-full items-center justify-center space-x-6">
              <input
                type="number"
                id="regularPrice"
                value={regularPrice}
                onChange={onChange}
                min={50}
                max={500000000}
                required
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
              />
              {type === "rent" && (
                <div>
                  <p className="text-md w-full whitespace-nowrap ">£ / Month</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {offers && (
          <div className="flex w-full items-center justify-start mb-6">
            <div className="">
              <p className="text-lg font-semibold">Discounted Price</p>
              <div className="flex w-full items-center justify-center space-x-6">
                <input
                  type="number"
                  id="discountedPrice"
                  value={discountedPrice}
                  onChange={onChange}
                  min={50}
                  max={500000000}
                  required={offers}
                  className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
                />
                {type === "rent" && (
                  <div>
                    <p className="text-md w-full whitespace-nowrap ">
                      £ / Month
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="mb-6">
          <p>Images</p>
          <p>The fiest image will be the cover (max 6)</p>
          <input
            type="file"
            id="images"
            onChange={onChange}
            accept=".jpg, .png, .jpeg"
            multiple
            required
            className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out"
          />
          


        </div>
        <button className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800 focus:shadow-lg focus:bg-blue-700 mb-6">Create Listing</button>
      </form>
    </main>
  );
}

export default CreateListing;
