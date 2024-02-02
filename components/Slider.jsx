"use client";
import { useState } from "react";

export default function Slider({ slider }) {
  let [current, setCurrent] = useState(0);

  let selectSlide = (index) => {
    if (current != index) setCurrent(index);
  };
  return (
    <div className="w-full relative bg-[url('/img/Dots.svg')] bg-no-repeat bg-left">
      <div className="w-[518px] left-56 top-10 absolute">
        <img className="absolute right-14 top-14" src="/img/arrow-up.svg" />
        <img
          className="absolute right-14 top-[500px]"
          src="/img/arrow-down.svg"
        />
        {slider.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                selectSlide(index);
              }}
              className={`transition-all duration-500 absolute cursor-pointer ${(() => {
                if (current === index) {
                  return `left-24 w-[422px] ease-in-out top-36 p-4 z-10 bg-[url('/img/Border.svg')] bg-no-repeat`;
                } else if (current === index + 1) {
                  return `h-52 w-96 bg-violet-50 ease-out z-0 rounded-3xl overflow-hidden left-0 top-0 opacity-60 `;
                } else if (current === index - 1) {
                  return `h-52 w-96 bg-violet-50 ease-out z-0 rounded-3xl overflow-hidden left-0 top-[398px] opacity-60`;
                } else if (current === 0 && index === slider.length - 1) {
                  return `h-52 w-96 bg-violet-50 ease-out z-0 rounded-3xl overflow-hidden left-0 top-0 opacity-60`;
                } else if (current === slider.length - 1 && index === 0) {
                  return `h-52 w-96 bg-violet-50 ease-out z-0 rounded-3xl overflow-hidden left-0 top-[398px] opacity-60`;
                } else {
                  return `left-0 top-48 h-52 ease-out bg-violet-50 z-0 rounded-3xl w-96 overflow-hidden opacity-0`;
                }
              })()} `}
            >
              <div
                className={`
                    ${
                      current === index
                        ? `py-6 px-5 bg-gradient-to-l  from-indigo-500 to-blue-800 rounded-3xl flex-col justify-start items-end gap-4 inline-flex`
                        : `p-6 py-7  flex-col justify-start items-end gap-4 inline-flex`
                    }
                `}
              >
                {/* Slide Header */}
                <div className="self-stretch justify-center items-start gap-2 inline-flex">
                  <img className="w-20 h-20 rounded-xl" src={item.image} />
                  <div className="grow shrink basis-0 self-stretch flex-col justify-center inline-flex">
                    <div
                      className={`font-bold ${
                        current === index ? `text-white` : `text-blue-400`
                      }  text-2xl `}
                    >
                      {item.name}
                    </div>
                    <div className="font-black text-orange-300 text-sm">
                      {item.field}
                    </div>
                    <div className="justify-start items-center gap-1 inline-flex">
                      <div className="text-center text-violet-300 text-xs font-medium ">
                        ({item.comments} نظر)
                      </div>
                      <div className="text-center text-sm text-violet-300 font-black  leading-tight">
                        {item.rate}
                      </div>
                      <img className="w-4 h-4" src="/img/icons/star.svg" />
                    </div>
                  </div>
                  <img
                    className={`${
                      current === index
                        ? `w-20 h-14 rounded-xl`
                        : `w-16 h-12 opacity-45 rounded-xl`
                    }`}
                    src={item.flag}
                  />
                </div>
                {/* Slide Content */}
                <div
                  className={`self-stretch h-24 ${
                    current === index ? `text-white` : `text-gray-400`
                  } text-sm font-normal `}
                >
                  {item.description}
                </div>
                {/* Slide Footer */}
                <button className="px-4 py-3 bg-indigo-500 rounded-lg justify-center items-center gap-2 inline-flex">
                  <div className="text-white text-xs font-bold ">
                    مشاهده کلاس ها
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 pt-1 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
