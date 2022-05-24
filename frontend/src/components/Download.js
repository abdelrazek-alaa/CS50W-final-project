import React from "react";

export default function Download({ download }) {
  download = download[0];
  return (
    <div className="text-center space-y-7 ">
      <h2 className="text-3xl font-medium text-very-dark-blue">
        {download.title}
      </h2>
      <p className="text-grayish-blue xl:mx-80 download-p">
        {download.paragraph}
      </p>
      {/* Browsers */}
      <div className="flex md:justify-center flex-col	md:flex-row space-y-20 md:space-y-0">
        {download.browsers.map((browser) => (
          <div
            key={browser.name}
            className="max-w-xs mx-auto md:mx-0 shadow-xl space-y-7 md:mr-2 p-5"
          >
            <img src={browser.img} alt="browser icon" className="mx-auto" />
            <h2 className="text-2xl font-medium">{browser.title}</h2>
            <p className="text-grayish-blue">{browser.minimumVersion}</p>
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
