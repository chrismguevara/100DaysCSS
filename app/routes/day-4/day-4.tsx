import type { Route } from "../+types/day-4";
import "./day-4.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CSS Day 4" },
    { name: "description", content: "Day 4 of 100 Days of CSS challenge" },
  ];
}

export default function Day4() {
  return (
    <div
      className={`
      min-h-full min-w-full 
      bg-[#E56262]
      text-white
      grid place-items-center
      grid-cols-1 grid-rows-1
      [--cubic-bezier:cubic-bezier(.21,.98,.6,.99)]
      `}
    >
      <div
        className={`
        bg-white
        rounded-full [animation-fill-mode:both] row-1 col-1
        w-[90px] h-[90px]
        animate-[jump-jump-3_2s_var(--cubic-bezier)_infinite_alternate]
      `}
      ></div>
      <div
        className={`
          bg-white
       rounded-full [animation-fill-mode:both] row-1 col-1
        w-[60px] h-[60px]
        animate-[jump-jump-2_2s_var(--cubic-bezier)_infinite_alternate]
      `}
      ></div>
      <div
        className={`
        bg-white
       rounded-full [animation-fill-mode:both] row-1 col-1
        w-[30px] h-[30px]
        animate-[jump-jump-1_2s_var(--cubic-bezier)_infinite_alternate]
      `}
      ></div>
    </div>
  );
}
