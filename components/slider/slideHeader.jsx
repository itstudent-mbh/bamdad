import React from "react";

export default function slideHeader({ name, field, photo, comments, rate }) {
  return (
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
        <div className="font-black text-orange-300 text-sm">{item.field}</div>
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
  );
}
