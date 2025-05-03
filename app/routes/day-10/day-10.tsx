import { useEffect, useMemo, useRef } from "react";
import { useState } from "react";
import type { Route } from "../+types/day-10";
import "./day-10.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CSS Day 10" },
    { name: "description", content: "Day 10 of 100 Days of CSS challenge" },
  ];
}

export default function Day10() {
  return (
    // Background
    <div
      className={`
      w-full h-full
      grid place-items-center
      
      bg-[#4C4C4C]
      `}
    >
      <WatchBezel>
        <WatchFace />
      </WatchBezel>
    </div>
  );
}

function WatchBezel(props: React.PropsWithChildren) {
  return (
    <div
      className={`
        row-1 col-1
        w-[226px] h-[226px]
        rounded-full
        bg-[#242424]
        border-[7px] border-[#3A3A3A] border-solid
        grid grid-cols-1 grid-rows-1 place-items-center
        `}
    >
      <svg
        className={`
        w-[202px] h-[202px]
        row-1 col-1
        rounded-full
        `}
        viewBox="0 0 202 202"
      >
        {/* Animated Spinner */}
        <circle
          id="animated-bezel"
          cx="101"
          cy="101"
          r="99.5"
          fill="none"
          stroke="#F85B5B"
          strokeWidth="3"
          strokeDasharray="625"
          className="animate-[spinner_5s_linear_infinite] origin-center rotate-[-90deg]"
        />
        {/* Tick Marks */}
        <circle
          id="tick-marks"
          cx="101"
          cy="101"
          r="94"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeDasharray="1,9"
          className="origin-center rotate-[-90deg]"
        />
      </svg>
      <div className={`w-[125px] h-[125px] row-1 col-1`}>{props.children}</div>
    </div>
  );
}

function WatchFace() {
  const [now, setNow] = useState(new Date());
  const { dayOfWeek, dayOfMonth, month, year, hours, minutes } = useMemo(
    () => getDateInfo(now),
    [now]
  );

  const oldTime = useRef(new Date());
  useEffect(() => {
    // Checking the time every second,
    // but only updating the time if the minute has changed
    const id = setInterval(() => {
      const newMinutes = new Date().getMinutes();
      const oldMinutes = oldTime.current.getMinutes();
      if (newMinutes !== oldMinutes) {
        oldTime.current = new Date();
        setNow(new Date());
      }
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={`
      font-['Open_Sans','sans-serif'] antialiased uppercase
      text-white
      w-full h-full max-w-[100px]
      flex flex-col items-stretch justify-center gap-0
      text-center
      my-0 mx-auto
    `}
    >
      <div
        className={`text-xs`}
      >{`${dayOfWeek} ${dayOfMonth} ${month} ${year}`}</div>
      <div
        className={`text-[40px] leading-11 font-bold`}
      >{`${hours}:${minutes}`}</div>
      <div className={`text-xs flex flex-row justify-between items-center`}>
        <span>
          <span
            className={`
          fa fa-heart 
          text-[#F85B5B] text-[10px]
          animate-[beat_0.9s_ease-in-out_infinite]`}
          ></span>{" "}
          81
        </span>
        <span>1248 KCAL</span>
      </div>
    </div>
  );
}

function getDateInfo(today: Date) {
  const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
    today.getDay()
  ];
  const dayOfMonth = today.getDate().toString();
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][today.getMonth()];
  const year = today.getFullYear().toString();
  const hours = (today.getHours() % 12).toString();
  const minutes = today.getMinutes().toString().padStart(2, "0");
  return {
    dayOfWeek,
    dayOfMonth,
    month,
    year,
    hours,
    minutes,
  };
}
