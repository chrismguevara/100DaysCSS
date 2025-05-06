import { useHref } from "react-router";
import type { Route } from "../+types/day-14";
import "./day-14.css";
import { useMemo } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CSS Day 14" },
    { name: "description", content: "Day 14 of 100 Days of CSS challenge" },
  ];
}

export default function Day14() {
  return (
    <div
      className={`
      w-full h-full
      bg-[#4B4841]
      antialiased
      grid grid-rows-1 grid-cols-1 place-items-center
      overflow-hidden
      `}
    >
      {/* Card container - serves as hover area */}
      <div
        className={`
        row-1 col-1
        w-80 h-[180px]
        perspective-[800px]
        group
        `}
      >
        {/* Flipping Card */}
        <div
          className={`
          w-full h-full
          [transform-style:preserve-3d]
          transition-all duration-1000 ease-in-out
          shadow-[8px_10px_15px_0_rgba(0,0,0,0.5)]
          perspective-[1000px]

          group-hover:rotate-x-180
          group-hover:shadow-[8px_-10px_15px_0_rgba(0,0,0,0.5)]
          `}
        >
          {/* Front */}
          <CardSide
            className={`
            z-[2]
            rotate-x-0
            grid grid-rows-1 grid-cols-1 place-items-center
            `}
          >
            <div className={`row-1 col-1`}>
              <Bike />
            </div>
          </CardSide>
          {/* Back */}
          <CardSide
            className={`
            rotate-x-180
            grid grid-rows-1 grid-cols-1 place-items-center
            `}
          >
            <div className={`row-1 col-1`}>
              <Helicopter />
            </div>
          </CardSide>
        </div>
      </div>
    </div>
  );
}

function CardSide(props: React.ComponentProps<"div">) {
  const { className, ...rest } = props;
  return (
    <div
      className={`
            w-full h-full
            absolute
            bg-[#FFCE4E]
            [backface-visibility:hidden]
            rounded-[3px]
            overflow-hidden
            ${className}
            `}
      {...rest}
    ></div>
  );
}

function Bike() {
  const path = useHref("/imgs/day-14");
  // Generating random road stripes
  const stripes = useMemo(
    () =>
      Array.from({ length: 9 }, (_, i) => ({
        width: 2 + i * 2,
        duration: 0.8 + Math.floor(Math.random() * 2) / 10,
        delay: Math.floor(Math.random() * 10) / 10,
      })),
    []
  );

  return (
    <>
      <img
        src={`${path}/bycicle.svg`}
        alt="Bycicle"
        className={`
                animate-[bike_.6s_ease-in-out_infinite]
                origin-[50%_100%]
                `}
      />
      <div className={`w-full h-[3px] overflow-hidden relative`}>
        {stripes.map(({ width, duration, delay }, i) => {
          return (
            <div
              key={i}
              className={`
                          absolute right-[-25px]
                          rounded-[3px]
                          bg-[#4B4841] w-[var(--width)] h-[3px]
                          animate-[street_var(--duration)_linear_var(--delay)_infinite]
                      `}
              style={{
                "--width": `${width}px`,
                "--duration": `${duration}s`,
                "--delay": `${delay}s`,
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
}

function Helicopter() {
  const path = useHref("/imgs/day-14");
  // Generating wind stripes
  const stripes = useMemo(
    () =>
      Array.from({ length: 9 }, (_, i) => ({
        top: 20 + i * 14, //20 + i * 14,
        width: 10 + Math.floor(Math.random() * 150) / 10,
        duration: 0.6 + Math.floor(Math.random() * 2) / 10,
        delay: Math.floor(Math.random() * 10) / 10,
      })),
    []
  );

  return (
    <div className={`grid grid-rows-1 grid-cols-1 place-items-center`}>
      <img
        src={`${path}/helicopter.svg`}
        alt="Helicopter"
        className={`
          row-1 col-1
          animate-[helicopter_1.5s_ease-in-out_infinite]
          [animation-fill-mode:both]
        `}
      />
      <div className={`row-1 col-1 w-full h-[250%] overflow-hidden relative`}>
        {stripes.map(({ top, width, duration, delay }, i) => {
          return (
            <div
              key={i}
              className={`
                          absolute right-[-25px] top-[var(--top)]
                          rounded-[3px]
                          bg-[#4B4841] w-[var(--width)] h-[3px]
                          animate-[cloud_var(--duration)_linear_var(--delay)_infinite]
                      `}
              style={{
                "--top": `${top}px`,
                "--width": `${width}px`,
                "--duration": `${duration}s`,
                "--delay": `${delay}s`,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
