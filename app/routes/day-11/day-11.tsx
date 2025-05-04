import { useEffect, useMemo, useRef } from "react";
import { useState } from "react";
import type { Route } from "../+types/day-11";
import "./day-11.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CSS Day 11" },
    { name: "description", content: "Day 11 of 100 Days of CSS challenge" },
  ];
}

export default function Day11() {
  return (
    // Background
    <div
      className={`
      w-full h-full
      relative
      bg-[radial-gradient(ellipse_at_center,rgba(246,232,215,1)_0%,rgba(218,190,155,1)_100%)]
      `}
    >
      {/* Walking Boots */}
      <div
        className={`
        animate-[fade-in_0.8s_ease-out_1s]
        [animation-fill-mode:both]
        `}
      >
        {/* Left Boot */}
        <WalkingBoot />
        {/* Right Boot */}
        <WalkingBoot
          className="[animation-delay:1s]"
          bootClassName="[animation-delay:1s]"
        />
      </div>
      {/* Floor */}
      <div
        className={`
        absolute
        bottom-0 left-0 right-0 top-[244px]
      bg-[#232323]
      `}
      ></div>
    </div>
  );
}

function WalkingBoot(props: { className?: string; bootClassName?: string }) {
  const { bootClassName, className } = props;
  return (
    <Boot
      className={`
      [animation-name:leg-swing]
      [animation-duration:2s]
      [animation-timing-function:ease-in-out]
      [animation-iteration-count:infinite]
      ${className ?? ""}
      `}
      bootClassName={`
        [animation-name:shoe-turn]
        [animation-duration:2s]
        [animation-timing-function:ease-in-out]
        [animation-iteration-count:infinite]
        ${bootClassName ?? ""}
        `}
    />
  );
}

function Boot(props: { className?: string; bootClassName?: string }) {
  const { bootClassName, className } = props;
  return (
    <div
      className={`
    absolute
    top-0 left-[147px] w-[151px] h-[245px]
    origin-[50%_0]
    ${className ?? ""}
    `}
    >
      <div
        className={`
        absolute
        w-[151px] h-[128px]
        left-0 bottom-0
        bg-[url('https://100dayscss.com/codepen/doc-martens.svg')]
        bg-no-repeat
        bg-center
        origin-[0_95%]
        ${bootClassName ?? ""}
      `}
      ></div>
    </div>
  );
}
