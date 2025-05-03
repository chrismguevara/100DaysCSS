import { useId, useState } from "react";
import type { Route } from "../+types/day-9";
import "./day-9.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CSS Day 8" },
    { name: "description", content: "Day 8 of 100 Days of CSS challenge" },
  ];
}

export default function Day9() {
  return (
    <div
      className={`
      w-full h-full
      flex flex-col gap-0
      font-['Open_Sans','sans-serif']
      antialiased
      `}
    >
      {/* Rainy Night Scene */}
      <div
        className={`
        bg-[#1A2238]
        flex-1
        relative
        overflow-hidden
      `}
      >
        {/* Moon */}
        <div
          className={`
          absolute top-[45px] left-[55px]
          w-[67px] h-[67px]
          rounded-full
          bg-[#F6EDBD]
          [box-shadow:0_0_10px_0_#F6EDBD]
          overflow-hidden
          animate-[rise_1s_ease-out]
          `}
        >
          {/* Craters 11 */}
          {[
            { left: 28, top: 9, size: 11 },
            { left: 0, top: 12, size: 11 },
            { left: 10, top: 56, size: 11 },
            { left: 49, top: 37, size: 6 },
            { left: 61, top: 24, size: 6 },
            { left: 33, top: 55, size: 6 },
            { left: 46, top: 17, size: 6 },
            { left: 27, top: 28, size: 6 },
            { left: 17, top: 29, size: 6 },
            { left: 15, top: 25, size: 4 },
            { left: 37, top: 37, size: 4 },
          ].map(({ left, top, size }) => (
            <div
              className={`
                absolute
                left-[var(--left)] top-[var(--top)]
                w-[var(--size)] h-[var(--size)]
                rounded-full
                bg-[#ECE1A8]
              `}
              style={
                {
                  "--left": `${left}px`,
                  "--top": `${top}px`,
                  "--size": `${size}px`,
                } as React.CSSProperties // Prevents TypeScript from complaining about the use of CSS variables
              }
            ></div>
          ))}
        </div>
        {/* Background Hills 2 */}
        {[
          { top: 201, left: -57 },
          { top: 197, left: 177 },
        ].map(({ top, left }) => (
          <div
            className={`
              absolute
              z-[2]
              w-[337px] h-[281px]
              top-[var(--top)] left-[var(--left)]
              bg-[#26314F]
              rounded-[50%]
            `}
            style={
              {
                "--top": `${top}px`,
                "--left": `${left}px`,
              } as React.CSSProperties // Prevents TypeScript from complaining about the use of CSS variables
            }
          ></div>
        ))}
        {/* Foreground Hills 3 */}
        {[
          { top: 248, left: -137 },
          { top: 221, left: 63 },
          { top: 248, left: 292 },
        ].map(({ top, left }) => (
          <div
            className={`
              absolute
              z-[2]
              w-[337px] h-[281px]
              top-[var(--top)] left-[var(--left)]
              bg-[#303C5D]
              rounded-[50%]
            `}
            style={
              {
                "--top": `${top}px`,
                "--left": `${left}px`,
              } as React.CSSProperties // Prevents TypeScript from complaining about the use of CSS variables
            }
          ></div>
        ))}
        {/* Raindrops */}
        {/*  */}
        {/* Large raindrops */}
        {new Array(10)
          .fill(0)
          .map((_, index) => ({ left: index * 40 + 10 }))
          .map(({ left }, index) => (
            <>
              <BigRaindrop
                key={index}
                style={{
                  "--left": `${left}px`,
                }}
              />
              <MediumRaindrop
                style={{
                  "--left": `${left}px`,
                }}
              />
              <SmallRaindrop
                style={{
                  "--left": `${left}px`,
                }}
              />
            </>
          ))}
      </div>
      {/* Weather Data */}
      <div
        className={`
        h-[90px]
        flex flex-row items-center justify-between
        font-light leading-5 text-[15px]
        px-5
        `}
      >
        <dl className="flex flex-row items-center gap-3">
          <div>
            <dt className="sr-only">Temperature</dt>
            <dd className="text-5xl">12°</dd>
          </div>
          <div className="flex flex-col gap-0">
            <div className="flex flex-row gap-1">
              <dt>Wind:</dt>
              <dd>E 7 km/h</dd>
            </div>
            <div className="flex flex-row gap-1">
              <dt>Humidity:</dt>
              <dd>87%</dd>
            </div>
          </div>
        </dl>
        {/* Future High/Low */}
        <ul className={`font-medium`}>
          {[
            { day: "Tue", high: 21, low: 9 },
            { day: "Wed", high: 23, low: 10 },
          ].map((item) => (
            <li key={item.day} className="flex flex-row">
              <span
                className={`
                font-light uppercase text-right
                inline-block w-[4ch] mr-2
                `}
              >
                {item.day}
              </span>
              <span className="inline-block w-[3ch] text-right">
                {item.high}°
              </span>
              <span className="inline-block w-[1ch]">/</span>
              <span className="inline-block w-[3ch] text-right">
                {item.low}°
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function BaseRaindrop(props: React.ComponentProps<"div">) {
  /*
    CSS variables
    - left
    - duration
    - delay
  */
  return (
    <div
      className={`
        absolute bottom-0 left-[var(--left)]
        rounded-full
        bg-[#7FC1F9]
        z-20
        [animation-name:drop]
        [animation-duration:var(--duration)]
        [animation-timing-function:linear]
        [animation-delay:var(--delay)]
        [animation-iteration-count:infinite]
        [animation-fill-mode:both]
        origin-[50%_100%]

        before:rounded-[3px]
        before:block
        before:bg-[#7FC1F9]
        before:absolute

        after:rounded-full
        after:bg-[#7FC1F9]
        after:block
        after:absolute 

        ${props.className}
        `}
      style={{
        "--delay": `${Math.random() * 2}s`,
        ...props.style,
      }}
    ></div>
  );
}

function BigRaindrop(props: React.ComponentProps<"div">) {
  return (
    <BaseRaindrop
      className={`
        opacity-100
        w-[8px] h-[8px]
        before:top-[-2px] before:left-[1px] before:w-[6px] before:h-[6px]
        after:top-[-5px] after:left-[2px] after:w-[4px] after:h-[10px]
      `}
      style={{
        "--duration": `${0.7 + (Math.random() * 2) / 10}s`,
        ...props.style,
      }}
    />
  );
}
function MediumRaindrop(props: React.ComponentProps<"div">) {
  return (
    <BaseRaindrop
      className={`
        opacity-50
        w-[6px] h-[6px]
        before:top-[-2px] before:left-[1px] before:w-[4px] before:h-[4px]
        after:top-[-4px] after:left-[2px] after:w-[2px] after:h-[6px]    
    `}
      style={{
        "--duration": `${1.3 + (Math.random() * 2) / 10}s`,
        ...props.style,
      }}
    />
  );
}

function SmallRaindrop(props: React.ComponentProps<"div">) {
  return (
    <BaseRaindrop
      className={`
        opacity-20
        w-[4px] h-[4px]
        before:top-[-2px] before:left-[1px] before:w-[2px] before:h-[2px]
        after:top-[-3px] after:left-[1px] after:w-[2px] after:h-[4px]
    `}
      style={{
        "--duration": `${1.9 + (Math.random() * 2) / 10}s`,
        ...props.style,
      }}
    />
  );
}
