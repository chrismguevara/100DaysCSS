import type { Route } from "../+types/day-3";
import "./day-3.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CSS Day 3" },
    { name: "description", content: "Day 3 of 100 Days of CSS challenge" },
  ];
}

export default function Day3() {
  return (
    <div
      className={`
      min-h-full min-w-full 
      bg-[#272C34]
      text-white
      grid place-items-center
      [--cubic-bezier:cubic-bezier(.4,0,.49,1)]
      `}
    >
      {/* Window */}
      <div className="relative overflow-hidden w-[180px] h-[180px] rounded-full [clip-path:circle(90px_at_90px_90px)]">
        {/* Sky */}
        <div
          className={`
          absolute z-0 top-0 left-0 right-0 bottom-0 h-[124px] bg-[#7DDFFC]
          animate-[sky-turns-black_4s_var(--cubic-bezier)_infinite]
        `}
        ></div>
        {/* Sun */}
        <div
          className={`
          absolute z-[2] top-[7px] left-[73px] w-[34px] h-[34px] rounded-full bg-[#FFEF00] origin-[50%_400%]
          animate-[sun-goes-down_4s_var(--cubic-bezier)_infinite]
        `}
        ></div>
        {/* Pyromid Left Side */}
        <div
          className={`
          absolute
          top-[67px] left-[35px] h-[57px] w-[116px]
          bg-[#F4F4F4]
          [clip-path:polygon(0%_100%,_100%_100%,_50%_0%)]
          animate-[pyramide-shading_4s_var(--cubic-bezier)_infinite]
        `}
        ></div>
        {/* Pyramid Right Side */}
        <div
          className={`
          absolute
          top-[67px] left-[93px] h-[57px] w-[58px]
          bg-[#DDDADA]
          [clip-path:polygon(30%_100%,100%_100%,0%_0%)]
          animate-[pyramide-shading_4s_var(--cubic-bezier)_infinite_reverse]
        `}
        ></div>
        {/* Shadow */}
        <div
          className={`
          absolute
          z-[2]
          top-[124px] left-[-80px] h-[30px] w-[360px]
          bg-[rgba(0,0,0,0.2)]
          origin-[50%_0%]
          [clip-path:polygon(115px_0%,231px_0%,80%_100%)]
          animate-[shadow-on-the-floor_4s_var(--cubic-bezier)_infinite]
        `}
        ></div>
        {/* Ground */}
        <div
          className={`
          absolute
          z-[1]
          bottom-0 left-0 right-0 h-[56px]
          bg-[#F0DE75]
          animate-[fading-sand_4s_var(--cubic-bezier)_infinite]
        `}
        ></div>
      </div>
    </div>
  );
}
