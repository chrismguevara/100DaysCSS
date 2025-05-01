import { useId, useState } from "react";
import type { Route } from "../+types/day-8";
import "./day-8.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CSS Day 8" },
    { name: "description", content: "Day 8 of 100 Days of CSS challenge" },
  ];
}

export default function Day8() {
  return (
    <div
      className={`
      min-h-full min-w-full 
      grid place-items-center
      grid-cols-1 grid-rows-1
      overflow-hidden
      bg-black
      `}
    >
      <div
        className={`
          grid place-items-center grid-cols-1 grid-rows-1
          w-full h-full
        bg-black
          [filter:blur(5px)_contrast(10)]
        `}
      >
        {/* Main Circle */}
        <div
          className={`
        [--diameter:80px]
        row-1 col-1
        w-[var(--diameter)] h-[var(--diameter)]
        rounded-full bg-white
      `}
        ></div>
        {/* Two Big balls */}
        <div
          className={`
        [--diameter:60px]
        [--origin:50%_35%]
        [--duration:2s]
        [--delay:0s]
        row-1 col-1
        w-[var(--diameter)] h-[var(--diameter)]
        rounded-full bg-white
        animate-spin
        origin-[var(--origin)]
        [animation-duration:var(--duration)]  
        [animation-delay:var(--delay)]
      `}
        ></div>
        <div
          className={`
          [--origin:30%_50%]
          [--duration:2s]
          [--diameter:60px]
          [--delay:0.5s]
        row-1 col-1
        w-[var(--diameter)] h-[var(--diameter)]
        rounded-full bg-white
        animate-spin
        origin-[var(--origin)]
        [animation-duration:var(--duration)]
        [animation-delay:var(--delay)]
      `}
        ></div>
        {/* Four Medium balls */}
        <div
          className={`
          [--origin:-50px_20px]
          [--duration:4s]
          [--diameter:25px]
          [--delay:0.1s]
        row-1 col-1
        w-[var(--diameter)] h-[var(--diameter)]
        rounded-full bg-white
        animate-spin
        origin-[var(--origin)]
        [animation-duration:var(--duration)]
        [animation-delay:var(--delay)]
      `}
        ></div>
        <div
          className={`
          [--origin:-40px_10px]
          [--duration:4s]
          [--diameter:25px]
          [--delay:0s]
        row-1 col-1
        w-[var(--diameter)] h-[var(--diameter)]
        rounded-full bg-white
        animate-spin
        origin-[var(--origin)]
        [animation-duration:var(--duration)]
        [animation-delay:var(--delay)]
      `}
        ></div>
        <div
          className={`
          [--origin:-14px_80px]
          [--duration:4s]
          [--diameter:25px]
          [--delay:.6s]
        row-1 col-1
        w-[var(--diameter)] h-[var(--diameter)]
        rounded-full bg-white
        animate-spin
        origin-[var(--origin)]
        [animation-duration:var(--duration)]
        [animation-delay:var(--delay)]
      `}
        ></div>
        <div
          className={`
          [--origin:50px_60px]
          [--duration:4s]
          [--diameter:25px] 
          [--delay:1.2s]
        row-1 col-1
        w-[var(--diameter)] h-[var(--diameter)]
        rounded-full bg-white
        animate-spin
        origin-[var(--origin)]
        [animation-duration:var(--duration)]
        [animation-delay:var(--delay)]
      `}
        ></div>
        {/* Two small balls */}
        <div
          className={`
          [--origin:50px_-40px]
          [--duration:6.5s]
          [--diameter:14px]
          [--delay:2s]
        row-1 col-1
        w-[var(--diameter)] h-[var(--diameter)]
        rounded-full bg-white
        animate-spin
        origin-[var(--origin)]
        [animation-duration:var(--duration)]
        [animation-delay:var(--delay)]
      `}
        ></div>
        <div
          className={`
          [--origin:-70px_60px]
          [--duration:6s]
          [--diameter:14px]
          [--delay:.7s]
        row-1 col-1
        w-[var(--diameter)] h-[var(--diameter)]
        rounded-full bg-white
        animate-spin
        origin-[var(--origin)]
        [animation-duration:var(--duration)]
        [animation-delay:var(--delay)]
      `}
        ></div>
      </div>
    </div>
  );
}
