import React from "react";
import { data } from "../data";

const download = data.download;
export default function Download() {
  return (
    <div className="text-center space-y-7 ">
      <h2 className="text-2xl font-medium">{download.title}</h2>
      <p className="text-grayish-blue xl:mx-80 download-p">
        {download.paragraph}
      </p>
      {/* Browsers */}
      <div className="flex md:justify-center flex-col	md:flex-row space-y-20 md:space-y-0">
        {Object.keys(download.browsers).map((browser) => (
          <div
            key={download.browsers[browser].title}
            className="max-w-xs mx-auto md:mx-0 shadow-lg space-y-7 md:mr-2"
          >
            <img
              src={download.browsers[browser].img}
              alt="browser icon"
              className="mx-auto"
            />
            <h2 className="text-2xl font-medium">
              {download.browsers[browser].title}
            </h2>
            <p className="text-grayish-blue">
              {download.browsers[browser].requirement}
            </p>
            <img
              src="/images/bg-dots.svg"
              alt="cosmetic element"
              className="w-full"
            />
            <button className="bg-indigo-500 text-white rounded  py-3 px-3 w-full">
              Add & Install Extension
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
