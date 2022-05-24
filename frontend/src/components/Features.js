import React from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Features({ features }) {
  return (
    <div className="text-center space-y-8">
      <h2 className="text-4xl font-medium text-very-dark-blue">
        {features[0].title}
      </h2>
      <p className="text-grayish-blue lg:max-w-lg lg:mx-auto">
        {features[0].paragraph}
      </p>

      {/* tabs */}
      <div className="">
        <Tab.Group>
          <Tab.List className="flex flex-col sm:flex-row space-x-1 rounded-xl bg-indigo-500 p-1 max-w-lg mx-auto">
            {features[0].features.map((feature) => (
              <Tab
                key={feature.name}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {feature.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-8">
            {features[0].features.map((feature) => (
              <Tab.Panel
                key={feature.id}
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                <div className="flex flex-col	md:flex-row items-center space-y-7 max-w-5xl	mx-auto space-x-5">
                  <div className="flex-1">
                    <img
                      src={feature.img}
                      alt="feature img"
                      className="m-auto md:max-h-60"
                    />
                  </div>
                  <div className="space-y-7  flex-1 lg:text-left">
                    <h3 className="lg:text-4xl sm:text-3xl text-2xl font-medium text-very-dark-blue">
                      {feature.title}
                    </h3>
                    <p className="text-grayish-blue">{feature.paragraph}</p>
                    <button className="bg-indigo-500 text-white rounded  py-2 px-3">
                      More Info
                    </button>
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
