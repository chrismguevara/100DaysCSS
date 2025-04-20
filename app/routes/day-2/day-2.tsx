import type { Route } from "../+types/day-2";
import "./day-2.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CSS Day 2" },
    { name: "description", content: "Day 2 of 100 Days of CSS challenge" },
  ];
}

export default function Day2() {
  return (
    <div
      className={`
      min-h-full min-w-full 
      bg-[#3FAF82]
      text-white
      grid place-items-center`}
    >
      {/* Using a grid system for the lines to better control the spacing */}
      <label className="w-[80px] grid grid-rows-3 gap-y-[14px]">
        {/* Trick 1: Using a hidden checkbox to know when to animate the lines. This avoids using JS. */}
        <input type="checkbox" className="peer hidden" required />
        {/* Trick 2: Using the user-invalid pseudo-class and the input's required attribute to prevent the reverse animation from running on page load. */}
        <div
          className={`
          w-full h-2 bg-white rounded-sm shadow-[1px_2px_10px_0px_rgba(0,0,0,0.3)]
          peer-user-invalid:animate-[animate-line-1-rev_0.7s_cubic-bezier(0.30,1,0.70,1)_forwards]
          peer-checked:animate-[animate-line-1_0.7s_cubic-bezier(0.30,1,0.70,1)_forwards]
        `}
        ></div>
        <div
          className={`
          w-full h-2 bg-white rounded-sm shadow-[1px_2px_10px_0px_rgba(0,0,0,0.3)]
          peer-user-invalid:animate-[animate-line-2-rev_0.7s_cubic-bezier(0.30,1,0.70,1)_forwards]
          peer-checked:peer-checked:animate-[animate-line-2_0.7s_cubic-bezier(0.30,1,0.70,1)_forwards]
        `}
        ></div>
        <div
          className={`
          w-full h-2 bg-white rounded-sm shadow-[1px_2px_10px_0px_rgba(0,0,0,0.3)]
          peer-user-invalid:animate-[animate-line-3-rev_0.7s_cubic-bezier(0.30,1,0.70,1)_forwards]
          peer-checked:peer-checked:animate-[animate-line-3_0.7s_cubic-bezier(0.30,1,0.70,1)_forwards]
        `}
        ></div>
      </label>
    </div>
  );
}
