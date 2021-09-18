import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { ec } from "../data";

export default function Extracurriculars() {
  return (
    <section id="extracurriculars">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-10">
          <ChipIcon className="w-10 inline-block mb-4" />
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Extracurriculars I've had a lot of fun doing throughout the last few
            years!
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {ec.map((extra) => (
            <div key={extra} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {extra}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
