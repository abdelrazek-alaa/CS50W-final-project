import React from "react";

export default function Intro() {
  return (
    <div className="md:flex items-center text-center md:text-left">
      <div className="flex-1 space-y-5">
        <h1 className="text-3xl">A Simple Bookmark Manager </h1>
        <p className="text-grayish-blue">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <button className="bg-indigo-500 text-white rounded py-2 px-3 mr-2">
          Get it on Chrome
        </button>
        <button className="rounded py-2 px-4 shadow-lg">
          Get it on Firefox
        </button>
      </div>
      <div className="flex-1">
        <img src="/images/illustration-hero.svg"></img>
      </div>
    </div>
  );
}
