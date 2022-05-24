import React from "react";

export default function Intro({ intro }) {
  intro = intro[0];
  return (
    <div className="flex flex-col-reverse	md:flex-row items-center text-center md:text-left lg:space-y-0 space-y-8 md:mt-28">
      <div className="flex-1 space-y-7">
        <h1 className="lg:text-5xl text-4xl font-medium text-very-dark-blue">
          {intro.title}
        </h1>
        <p className="text-grayish-blue lg:max-w-md">{intro.paragraph}</p>
        <div className="space-y-2">
          {intro.buttons.map((button) => (
            <button
              key={button.name}
              className={
                button.name === "chrome"
                  ? "bg-indigo-500 text-white rounded  py-2 px-3 mr-2"
                  : "bg-gray-200 rounded  py-2 px-4 shadow-lg"
              }
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <img src={intro.img} className=""></img>
      </div>
    </div>
  );
}
