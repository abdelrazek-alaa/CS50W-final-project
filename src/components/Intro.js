import React from "react";
import CssShape from "./utilities/CssShape";

export default function Intro() {
  return (
    <div className="flex flex-col-reverse	md:flex-row items-center text-center md:text-left lg:space-y-0 space-y-8">
      <div className="flex-1 space-y-7">
        <h1 className="lg:text-5xl sm:text-4xl text-3xl font-medium text-very-dark-blue">
          A Simple Bookmark Manager{" "}
        </h1>
        <p className="text-grayish-blue lg:pr-40">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="space-y-2">
          <button className="bg-indigo-500 text-white rounded  py-2 px-3 mr-2">
            Get it on Chrome
          </button>
          <button className="bg-gray-200 rounded  py-2 px-4 shadow-lg">
            Get it on Firefox
          </button>
        </div>
      </div>
      <div className="flex-1">
        <img src="/images/illustration-hero.svg" className=""></img>
      </div>
    </div>
  );
}
