"use client";
import { useState } from "react";

export default function Tabs({ items }) {
  let [current, setCurrent] = useState(0);

  let selectTab = (index) => {
    if (current != index) setCurrent(index);
  };

  return (
    <div className="max-w-3xl h-[242px] mx-auto -mt-20">
      <div className="h-full mt-24 justify-center items-start gap-8 inline-flex flex-col">
        <ul className="flex gap-6 items-end">
          {items.map((item, index) => {
            return (
              <li
                key={index}
                className={`w-[215px] h-[132px]`}
                onClick={() => {
                  selectTab(index);
                }}
              >
                <div
                  className={`p-4 bg-gradient-to-l from-${
                    item.start_color
                  } to-${item.end_color}  shadow-${
                    item.start_color
                  } transition-all duration-500 w-full flex-col justify-center gap-3 inline-flex cursor-pointer rounded-2xl  shadow-[0_20px_50px_-30px] ${
                    current === index ? `scale-110 -translate-y-3 -mb-10` : ``
                  }`}
                >
                  <div className="w-12 h-12 p-1 bg-white bg-opacity-15 rounded-md">
                    <img src={item.icon} className="" alt="sds" />
                  </div>
                  <div className="text-white text-lg font-black">
                    {item.title}
                  </div>
                  <div className="flex-1 border-t-2 border-gray-100 opacity-20"></div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="w-[691px] flex p-8 gap-8 bg-violet-50 rounded-3xl">
          {items[current].content.map((list, key) => {
            return (
              <ul key={key} className="list-none font-bold">
                {list.map((item, index) => {
                  return (
                    <li key={index} className="px-4 py-2">
                      <a
                        className="transition ease-in-out delay-300 hover:text-blue-600"
                        href="#"
                      >
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}
