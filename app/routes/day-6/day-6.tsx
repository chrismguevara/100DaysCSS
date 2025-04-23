import type { Route } from "../+types/day-6";
import "./day-6.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CSS Day 6" },
    { name: "description", content: "Day 6 of 100 Days of CSS challenge" },
  ];
}

export default function Day6() {
  return (
    <div
      className={`
      [--brown:#786450]
      min-h-full min-w-full 
      bg-[#CA7C4E]
      bg-linear-to-tr from-[#EEBE6C] to-[#CA7C4E]
      grid place-items-center
      grid-cols-1 grid-rows-1
      font-['Open_Sans','sans-serif']
      text-[var(--brown)]
      antialiased
      `}
    >
      {/* Card */}
      <div
        className={`
          w-[320px] h-[299px]
          rounded-sm overflow-hidden
          bg-white
          shadow-[10px_10px_15px_0_rgba(0,0,0,0.3)]
          flex flex-row items-stretch
        `}
      >
        {/* Profile */}
        <section
          className={`
          flex-2/3
          flex flex-col justify-center items-center gap-8
          `}
        >
          {/* Avatar */}
          <figure
            className={`
              flex flex-col justify-around items-center gap-3
            `}
          >
            {/* Profile Image */}
            <div
              className={`
              grid place-items-center grid-cols-1 grid-rows-1
              group
              `}
            >
              {/* Outer Circle */}
              <div
                className={`
                row-1 col-1
                rounded-full
                w-[82px] h-[82px]
                bg-transparent
                border-[1px] border-solid border-[var(--brown)] border-r-transparent
                group-hover:rotate-[-360deg]
                transition-all duration-[1.5s] ease-in-out
                `}
              ></div>
              {/* Inner Circle */}
              <div
                className={`
                row-1 col-1
                rounded-full
                w-[76px] h-[76px]
                bg-transparent
                border-[1px] border-solid border-[var(--brown)] border-l-transparent
                group-hover:rotate-360
                transition-all duration-[1.5s] ease-in-out
                `}
              ></div>
              {/* Image */}
              <img
                src="https://100dayscss.com/codepen/jessica-potter.jpg"
                width="70"
                height="70"
                alt="Jessica Potter's profile picture"
                className={`
                row-1 col-1
                rounded-full
                object-cover
                `}
              />
            </div>
            {/* Name and Occupation */}
            <figcaption className={`text-center`}>
              <h2 className={`font-semibold text-base`}>Jessica Potter</h2>
              <p className={`text-xs`}>Visual Artist</p>
            </figcaption>
          </figure>
          {/* Actions */}
          <div
            role="group"
            aria-label="Profile actions"
            className={`
            flex flex-col justify-between items-center gap-[10px]

            [&>button]:w-[120px] [&>button]:h-[30px]
            [&>button]:text-[12px] [&>button]:font-sans [&>button]:font-semibold
            [&>button]:rounded-full
            [&>button]:border-[1px] [&>button]:border-solid [&>button]:border-[var(--brown)]
            [&>button]:bg-transparent
            [&>button]:hover:bg-[var(--brown)] [&>button]:hover:text-white
            [&>button]:transition-all [&>button]:duration-[.3s] [&>button]:ease-in-out
            `}
          >
            <button>Follow</button>
            <button>Message</button>
          </div>
        </section>
        {/* Statistics */}
        <dl
          className={`
          flex-1/3
          flex flex-col gap-[1px]
          `}
        >
          {[
            { label: "Posts", value: 523 },
            { label: "Likes", value: 1387 },
            { label: "Follower", value: 146 },
          ].map(({ label, value }) => (
            <div
              className={`
            flex-1/3
            flex flex-col-reverse items-center justify-center gap-0
            bg-[#F5E8DF]
            transition-all duration-[.4s] ease-in-out
            hover:bg-[#E1CFC2]
            cursor-pointer

            `}
            >
              <dt
                className={`
                text-[11px]
                leading-none
              `}
              >
                {label}
              </dt>
              <dd
                className={`
                font-semibold
                text-lg
                leading-none
              `}
              >
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
