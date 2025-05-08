import type { Route } from "../+types/day-18";
import "./day-18.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CSS Day 18" },
    { name: "description", content: "Day 18 of 100 Days of CSS challenge" },
  ];
}

export default function Day18() {
  return (
    <div
      className={`
      w-full h-full
      overflow-hidden
      relative
      `}
    >
      {/* Gray */}
      <div
        className={`
        w-full h-[50%]
        bg-[#444]
      `}
      ></div>
      {/* Ellipse */}
      <div
        className={`
        [transform-style:preserve-3d]
        rounded-full
        w-[420px] h-full
        absolute top-0 left-[-10px]
        origin-center
        animate-[elastic_5s_ease-in-out_infinite]
        `}
      >
        {/* Top Gray */}
        <div
          className={`
          absolute top-0 left-0
          w-full h-full
          rounded-full
          bg-[#444]
          [backface-visibility:hidden]
          rotate-x-0
          `}
        ></div>
        {/* Bottom Green */}
        <div
          className={`
          absolute top-0 left-0
          w-full h-full
          rounded-full
          bg-[#37D493]
          [backface-visibility:hidden]
          rotate-x-180
          `}
        ></div>
      </div>
      {/* Green */}
      <div
        className={`
        w-full h-[50%]
        bg-[#37D493]
      `}
      ></div>
    </div>
  );
}
