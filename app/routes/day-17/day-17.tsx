import type { Route } from "../+types/day-17";
import "./day-17.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CSS Day 17" },
    { name: "description", content: "Day 17 of 100 Days of CSS challenge" },
  ];
}

export default function Day17() {
  return (
    <div
      className={`
      w-full h-full
      bg-white
      grid grid-rows-1 grid-cols-1 place-items-center
      overflow-hidden
      [background:repeating-linear-gradient(45deg,white,white_20px,black_20px,black_24px)]
      `}
    >
      <div
        className={`
        w-[260px] h-[260px]
        bg-[#353535]
        rounded-[3px]
        shadow-[8px_10px_15px_0_rgba(0,0,0,0.3)]
        grid grid-rows-1 grid-cols-1 place-items-center
      `}
      >
        <svg
          className={`
          w-[160px] h-[140px]
          group
          `}
        >
          <polygon
            className={`
              [fill:#ccc]
              group-hover:[fill:#eee]
              transition-all duration-500 ease-in-out
            `}
            points="68,0 91,0 160,117 46,117 59,93 121,93"
          />
          <polygon
            className={`
              [fill:#aaa]
              group-hover:[fill:#ccc]
              transition-all duration-500 ease-in-out
            `}
            points="68,41 79,59 46,117 160,117 147,160 11,140"
          />
          <polygon
            className={`
              [fill:#eee]
              group-hover:[fill:#aaa]
              transition-all duration-500 ease-in-out
            `}
            points="0,117 68,0 121,93 98,93 68,41 11,140"
          />
        </svg>
      </div>
    </div>
  );
}
