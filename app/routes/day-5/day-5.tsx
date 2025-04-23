"use client";
import { useEffect, useRef, useState } from "react";
import type { Route } from "../+types/day-5";
import "./day-5.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CSS Day 5" },
    { name: "description", content: "Day 5 of 100 Days of CSS challenge" },
  ];
}

export default function Day5() {
  const viewsData = [
    { x: 12, y: 49, value: 458 },
    { x: 48, y: 15, value: 812 },
    { x: 84, y: 24, value: 746 },
    { x: 120, y: 12, value: 877 },
    { x: 156, y: 43, value: 517 },
    { x: 192, y: 53, value: 434 },
    { x: 228, y: 15, value: 458 },
  ];
  const purchasesData = [
    { x: 12, y: 61, value: 26 },
    { x: 48, y: 50, value: 41 },
    { x: 84, y: 65, value: 22 },
    { x: 120, y: 55, value: 36 },
    { x: 156, y: 61, value: 25 },
    { x: 192, y: 74, value: 13 },
    { x: 228, y: 64, value: 20 },
  ];
  const pointWidth = 6;
  const pointHeight = 6;
  const [size, setSize] = useState({ width: 0, height: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (cardRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        const entry = entries[0];
        setSize({
          width: Math.round(entry.contentRect.width),
          height: Math.round(entry.contentRect.height),
        });
      });
      resizeObserver.observe(cardRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);
  return (
    <div
      className={`
      min-h-full min-w-full 
      bg-[#42A7A1]
      text-white
      grid place-items-center
      grid-cols-1 grid-rows-1
      font-['Open_Sans','sans-serif']
      antialiased
      `}
    >
      {/* Card */}
      <div
        ref={cardRef}
        className={`
          w-[280px] h-[220px]
          rounded-sm overflow-hidden
          bg-white
          shadow-[10px_10px_15px_0_rgba(0,0,0,0.3)]
          resize
          @container
          relative
        `}
      >
        {/* Card Header */}
        <header
          className={`
          bg-[#F1BA64]
          h-15
          pt-3
          px-4
          @min-[207px]:flex
          @min-[207px]:justify-between

          @max-[207px]:flex
          @max-[207px]:flex-col 
          @max-[207px]:items-center
          @max-[207px]:text-center
          `}
        >
          <div>
            <h2 className={`text-sm font-bold uppercase leading-tight`}>
              Weekly Report
            </h2>
            <p className={`text-xs`}>
              <time dateTime="2023-02-01">01. Feb</time> -{" "}
              <time dateTime="2023-02-07">07. Feb</time>
            </p>
          </div>
          <dl className={`text-right @max-[207px]:hidden`}>
            <dt className={`text-xs`}>Revenue</dt>
            <dd className={`text-sm font-bold leading-tight`}>$ 3621.79</dd>
          </dl>
        </header>
        {/* Card Body */}
        <section>
          {/* Graph with Legend */}
          <figure
            className={`px-2.5 [--graph-red:#FA7373] [--graph-blue:#7BA2FF] z-10`}
          >
            {/* Graph Legend */}
            <figcaption
              className={`
                flex justify-end gap-4
                pt-2.5
                pb-3.5
                text-[#606060] text-[calc(1rem/2+1px)]
                [&_span]:before:w-3
                [&_span]:before:h-[3px]
                [&_span]:before:rounded-full
                [&_span]:before:inline-block
                [&_span]:before:mr-2
                [&_span]:before:content-['']
                [&_span]:before:align-middle

                @min-[400px]:text-[min(1.25rem,2.5cqw)]
                @min-[400px]:[&_span]:before:h-[min(.5rem,1cqw)]
                @min-[400px]:[&_span]:before:w-[min(2rem,3cqw)]
                @min-[400px]:[&_span]:before:mr-[min(1rem,2.5cqw)]
              `}
            >
              <span className={`before:bg-[var(--graph-red)]`}>Views</span>
              <span className={`before:bg-[var(--graph-blue)]`}>Purchases</span>
            </figcaption>
            {/* Line Graph */}
            {/* horizontal distance between datapoints is 36px */}
            <svg
              viewBox={`0 0 240 90`}
              overflow="visible"
              style={{
                ["--point-width" as any]: `${pointWidth}px`,
                ["--point-height" as any]: `${pointHeight}px`,
              }}
              className={`w-full h-auto`}
            >
              <line
                x1="0"
                y1="0"
                x2="240"
                y2="0"
                stroke="#F2F2F2"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="45"
                x2="240"
                y2="45"
                stroke="#F2F2F2"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="90"
                x2="240"
                y2="90"
                stroke="#F2F2F2"
                strokeWidth="1"
              />
              <polyline
                points={viewsData.map((d) => `${d.x},${d.y}`).join(" ")}
                fill="none"
                stroke="var(--graph-red)"
                strokeWidth="2"
              ></polyline>
              <polyline
                points={purchasesData.map((d) => `${d.x},${d.y}`).join(" ")}
                fill="none"
                stroke="var(--graph-blue)"
                strokeWidth="2"
              ></polyline>
              {/* Views Data Points */}
              {viewsData.map(({ x, y, value }) => (
                <g>
                  <foreignObject
                    x={x - pointWidth / 2}
                    y={y - pointHeight / 2}
                    overflow="visible"
                    width={pointWidth}
                    height={pointHeight}
                  >
                    {/* Point */}
                    <div
                      style={{
                        width: pointWidth,
                        height: pointHeight,
                      }}
                      className={`
                                  group
                                  rounded-full
                                  bg-[var(--graph-red)]
                                  cursor-pointer
                                  `}
                    >
                      {/* Tooltip */}
                      <div
                        className={`
                                    absolute
                                    bg-[var(--graph-red)]
                                    text-white text-[11px] font-bold text-center
                                    py-1
                                    px-1.5
                                    rounded-[3px]
                                    translate-y-[calc(-100%)]
                                    translate-x-[calc(-50%+var(--point-width)/2)]
                                    transition-all
                                    duration-300
                                    opacity-0
                                    invisible
                                    group-hover:visible
                                    group-hover:opacity-100
                                    group-hover:translate-y-[calc(-100%-var(--point-width))]
                                  `}
                      >
                        {/* Tooltip Arrow */}
                        <div
                          className={`
                                      relative
                                      after:absolute
                                      after:top-[calc(100%+3px)]
                                      after:left-[calc(50%-var(--point-width))]
                                      after:border-[6px]
                                      after:border-transparent
                                      after:border-t-[var(--graph-red)]
                                    `}
                        >
                          {value}
                        </div>
                      </div>
                    </div>
                  </foreignObject>
                </g>
              ))}
              {/* Purchases Data Points */}
              {purchasesData.map(({ x, y, value }) => (
                <g>
                  <foreignObject
                    x={x - pointWidth / 2}
                    y={y - pointHeight / 2}
                    overflow="visible"
                    width={pointWidth}
                    height={pointHeight}
                  >
                    {/* Point */}
                    <div
                      style={{
                        width: pointWidth,
                        height: pointHeight,
                      }}
                      className={`
                                  group
                                  rounded-full
                                  bg-[var(--graph-blue)]
                                  cursor-pointer
                                  `}
                    >
                      {/* Tooltip */}
                      <div
                        className={`
                                    absolute
                                    bg-[var(--graph-blue)]
                                    text-white text-[11px] font-bold text-center
                                    py-1
                                    px-1.5
                                    rounded-[3px]
                                    translate-y-[calc(-100%)]
                                    translate-x-[calc(-50%+var(--point-width)/2)]
                                    transition-all
                                    duration-300
                                    opacity-0
                                    invisible
                                    group-hover:visible
                                    group-hover:opacity-100
                                    group-hover:translate-y-[calc(-100%-var(--point-width))]
                                  `}
                      >
                        {/* Tooltip Arrow */}
                        <div
                          className={`
                                      relative
                                      after:absolute
                                      after:top-[calc(100%+3px)]
                                      after:left-[calc(50%-var(--point-width))]
                                      after:border-[6px]
                                      after:border-transparent
                                      after:border-t-[var(--graph-blue)]
                                    `}
                        >
                          {value}
                        </div>
                      </div>
                    </div>
                  </foreignObject>
                </g>
              ))}
            </svg>
            <div
              className={`
                flex justify-between
                text-[9px] text-[#949494] uppercase [&_span]:text-center pt-1.5
                @min-[400px]:text-[min(1.25rem,2.5cqw)]
                @min-[400px]:px-4
                `}
            >
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </figure>
          <div></div>
        </section>
        {/* Size Warning */}
        <div
          className={`
            hidden
            @max-[143px]:flex flex-col items-center justify-center gap-2
            absolute top-0 left-0
            w-full h-full z-20
            text-center
            bg-white
            text-black
            `}
        >
          <span className={`text-4xl`}>😡</span>
          <p className={`text-sm`}>TOO SMALL!!!</p>
        </div>
      </div>
      {/* Dimensions Display */}
      <div className="absolute top-0 right-0 bg-black/75 text-white px-2 py-1 text-sm">
        {size.width}px × {size.height}px
      </div>
    </div>
  );
}
