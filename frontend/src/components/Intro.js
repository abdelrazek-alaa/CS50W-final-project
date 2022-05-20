import React from "react";
import CssShape from "./utilities/CssShape";
import { data } from "../data";
const intro = data.intro;
export default function Intro() {
  return (
    <div className="flex flex-col-reverse	md:flex-row items-center text-center md:text-left lg:space-y-0 space-y-8">
      <div className="flex-1 space-y-7">
        <h1 className="lg:text-5xl sm:text-4xl text-3xl font-medium text-very-dark-blue">
          {intro.title}
        </h1>
        <p className="text-grayish-blue lg:pr-40">{intro.paragraph}</p>
        <div className="space-y-2">
          <button className="bg-indigo-500 text-white rounded  py-2 px-3 mr-2">
            {intro.buttons.chrome}
          </button>
          <button className="bg-gray-200 rounded  py-2 px-4 shadow-lg">
            {intro.buttons.firefox}
          </button>
        </div>
      </div>
      <div className="flex-1">
        <img src={intro.img} className=""></img>
      </div>
    </div>
  );
}
