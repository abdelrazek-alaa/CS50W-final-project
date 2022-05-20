import React from "react";

export default function Contact() {
  return (
    <div className="bg-indigo-500 text-white text-center space-y-7 py-20 px-3">
      <h3 className="uppercase contact">35,000+ already joined</h3>
      <h3 className="text-3xl font-medium max-w-sm mx-auto">
        Stay up-to-date with what we’re doing
      </h3>
      <div className="flex flex-col sm:flex-row justify-center space-x-1 space-y-1 ">
        <input
          type="text"
          name="email"
          id="email"
          className="block sm:text-sm border-gray-300 rounded-md p-3"
          placeholder="Enter your email address"
        />
        <button className="bg-soft-red text-white rounded-md  py-2 px-3">
          Contact Us
        </button>
      </div>
    </div>
  );
}
