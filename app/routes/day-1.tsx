import type { Route } from "./+types/day-1";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CSS Day 1" },
    { name: "description", content: "Day 1 of 100 Days of CSS challenge" },
  ];
}

export default function Day1() {
  return (
    <div
      className={`
      min-h-full min-w-full 
      bg-[#43389F]
      bg-linear-to-tr from-[#43389F] to-[#4ec6ca]
      text-white font-[Courier_New,Courier,sans-serif] font-bold
      antialiased
      grid place-items-center`}
    >
      <div>
        <div className="flex flex-row mb-[6px]">
          {/* ONE */}
          <div
            className={
              // The serif
              `
              before:absolute
              before:-left-[10px]
              before:h-[40px]
              before:w-[20px]
              before:bg-white
              before:rounded-[3px]
              before:rotate-[50deg]
              before:shadow-[0_0_13px_0_rgba(0,0,0,0.2)]
              ` +
              // The body - needed to take up space
              `
              h-[100px]
              w-[24px]
              relative
              z-30
              ` +
              // The stem
              `
              after:absolute
              after:h-[100px]
              after:w-[24px]
              after:bg-white
              after:rounded-[3px]
              after:shadow-[0_0_13px_0_rgba(0,0,0,0.2)]
              `
            }
          ></div>

          {/* ZERO */}
          <div
            className={`
            rounded-full
            h-[100px]
            w-[100px]
            border-white
            border-[24px]
            border-solid
            bg-transparent
            shadow-[0_0_13px_0_rgba(0,0,0,0.2)]
            z-20
            ml-[-7px]
            `}
          ></div>

          {/* ZERO */}
          <div
            className={`
            rounded-full
            h-[100px]
            w-[100px]
            border-white
            border-[24px]
            border-solid
            bg-transparent
            shadow-[0_0_13px_0_rgba(0,0,0,0.2)]
            z-10
            ml-[-17px]
            `}
          ></div>
        </div>
        <span className="block text-[82px] leading-[60px]">DAYS</span>
        <span className="block text-[23px] leading-5 tracking-[0.04em]">
          CSS CHALLENGE
        </span>
      </div>
    </div>
  );
}
