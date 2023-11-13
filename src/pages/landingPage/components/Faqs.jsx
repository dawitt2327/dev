import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import helpImg from "../../../assets/images/help.png";

const Faqs = () => {
  return (
    <div className="w-full flex items-center gap-5">
      <div className="w-1/2">
        <img className="h-[500px]" src={helpImg} alt="" />
      </div>
      <div className="w-1/2 p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
};

const faqdata = [
  {
    question: "How many times I can apply on Colabs?",
    answer:
      "Employees can retake a test 3 months after their unsuccessful attempt. In this 3 month period, developers can practice the relevant skills and sharpen up their technical knowledge.",
  },
  {
    question: "Does colabs accept beginners?",
    answer:
      "Yes, colabs considers skills and talent over academic qualifications and industry experience.",
  },
  {
    question: "How long does it take to get hired at colabs? ",
    answer:
      "The hiring process at colabs takes an average of 8 - 10 days. also, It will depend on interviews across all job titles.",
  },
  {
    question: "Can we work in colabs as part time? ",
    answer:
      "Colabs is primarily focused on providing employees with full-time, long-term jobs. But, yes, you can work on colabs as a part time.",
  },
];

export default Faqs;
