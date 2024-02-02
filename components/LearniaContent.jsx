import React from "react";

export default function LearniaContent() {
  return (
    <div className="flex-row min-h-[560px]  bg-right-bottom bg-[url('/img/Circle.svg')] bg-no-repeat pt-24 pr-56 mt-40">
      <h3 className="text-4xl text-indigo-500  font-extrabold">
        با اساتید مورد تایید لرنیا همراه شوید
      </h3>
      <div className="mt-8 mb-6 text-lg">
        اساتید مورد تایید لرنیا ، با بررسی کامل و دریافت بازخورد از دانش آموزان
        به شما معرفی خواهند شد تا تجربه آموزش بهتر، همراه با آرامش خاطر را داشته
        باشید.
      </div>
      <button className="px-4 py-3 transition-all duration-500  bg-gradient-to-l from-indigo-500 to-blue-800 hover:bg-gradient-to-l hover:from-indigo-400 hover:to-indigo-700 rounded-lg justify-center items-center gap-3 inline-flex">
        <div className="text-white text-sm font-black leading-tight ">
          جستجوی بهترین استاتید
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
          />
        </svg>
      </button>
    </div>
  );
}
