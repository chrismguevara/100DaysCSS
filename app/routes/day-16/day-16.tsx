import type { Route } from "../+types/day-16";
import "./day-16.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CSS Day 16" },
    { name: "description", content: "Day 16 of 100 Days of CSS challenge" },
  ];
}

export default function Day16() {
  return (
    <div
      className={`
      w-full h-full
      bg-[#46A6DA]
      overflow-hidden
      relative
      `}
    >
      {/* Blobby */}
      <div
        className={`
        absolute top-[155px] left-[155px]
        w-[90px] h-[90px] 
        bg-white
        rounded-full
        animate-[blobby_5s_ease-in-out_infinite]`}
      ></div>
      {/* Blobby Ring */}
      <div
        className={`
        absolute top-[145px] left-[145px]
        w-[110px] h-[110px]
        border-[3px] border-white border-solid
        rounded-full
        animate-[blobby-ring_5s_ease-in-out_infinite]
        `}
      ></div>
      {/* Octagon */}
      <svg
        className={`
        absolute top-[150px] left-[150px]
        w-[100px] h-[100px]
        [fill:white]
        animate-[octa_5s_ease-in-out_infinite]
        `}
      >
        <polygon points="30,0 70,0 100,30 100,70 70,100 30,100 0,70 0,30" />
      </svg>
      {/* Octa Sparkle */}
      <div
        className={`
        absolute top-[100px] left-[100px]
        w-[200px] h-[200px]
        animate-[octa-sparkle_5s_ease-in-out_infinite]
        `}
      >
        {[0, 45, 90, 135].map((rotateDeg) => (
          <div
            className={`
              absolute top-0 left-[98px]
              w-[4px] h-[200px]
              rotate-[var(--octa-sparkle-rotate)]

              before:block
              before:absolute
              before:w-[4px] before:h-[25px]
              before:top-0 before:left-0
              before:rounded-[2px]
              before:bg-white

              after:block
              after:absolute after:top-auto after:left-0 after:bottom-0
              after:w-[4px] after:h-[25px]
              after:rounded-[2px]
              after:bg-white              
              `}
            style={{
              "--octa-sparkle-rotate": `${rotateDeg}deg`,
            }}
          ></div>
        ))}
      </div>
      {/* Triangle */}
      <svg
        className={`
        absolute top-[145px] left-[147px]
        w-[106px] h-[90px]
        [fill:white]
        animate-[triangle_5s_ease-in-out_infinite]
      `}
      >
        <polygon points="53,0 106,90 0,90" />
      </svg>
      {/* Triangle Sparkle */}
      <div
        className={`
      absolute top-[100px] left-[100px]
      w-[200px] h-[200px]
      animate-[triangle-sparkle_5s_ease-in-out_infinite]
      
    `}
      >
        {[0, 124, 237].map((rotateDeg) => (
          <div
            className={`
            absolute top-0 left-[98px]
            w-[4px] h-[200px]
            before:block
            before:absolute before:top-0 before:left-0
            before:w-[4px] before:h-[25px]
            before:rounded-[2px]
            before:bg-white
            after:block
            after:absolute after:top-0 after:left-0
            after:w-[4px] after:h-[25px]
            after:rounded-[2px]
            after:bg-white
            ${
              rotateDeg === 0
                ? `top-[10px]`
                : `rotate-[var(--triangle-sparkle-rotate)]`
            }
          `}
            style={{
              "--triangle-sparkle-rotate": `${rotateDeg}deg`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
