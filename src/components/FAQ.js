import React from "react";
import { data } from "../data";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

const faq = data.faq;

export default function FAQ() {
  return (
    <div className="text-center space-y-7">
      <h2 className="text-2xl font-medium">{faq.title}</h2>
      <p className="text-grayish-blue xl:mx-80 ">{faq.paragraph}</p>
      {/* Accordion */}
      <div className="w-full px-4">
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2 space-y-1">
          {faq.questions.map((question) => (
            <div key={question.q}>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-indigo-100 px-4 py-2 text-left text-sm font-medium  text-very-dark-blue hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                      <span>{question.q}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-indigo-500`}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        {question.a}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
