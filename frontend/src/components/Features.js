import React from "react";
import { Tab } from "@headlessui/react";
import { data } from "../data";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Features() {
  let features = data.features;
  let categories = data.features.categories;
  return (
    <div className="text-center space-y-7">
      <h2 className="text-2xl font-medium">Features</h2>
      <p className="text-grayish-blue xl:mx-80">{features.paragraph}</p>

      {/* tabs */}
      <div className="">
        <Tab.Group>
          <Tab.List className="flex flex-col sm:flex-row space-x-1 rounded-xl bg-indigo-500 p-1 max-w-md mx-auto">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
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
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((feature, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                <div className="flex flex-col	md:flex-row items-center space-y-7 max-w-5xl	mx-auto space-x-5">
                  <div className="flex-1">
                    <img src={feature.img} alt="feature img" className="" />
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
