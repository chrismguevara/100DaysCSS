import { Link } from "react-router";
import { posts } from "../posts";
import type { Route } from "./+types/day-page";

export default function DayPage({ params }: Route.ComponentProps) {
  const { day } = params;
  const dayIndex = parseInt(day ?? "0");
  const dayInfo = posts[dayIndex - 1];
  const DayComponent = dayInfo.component;
  const isFirstDay = dayIndex === 1;
  const isLastDay = dayIndex === posts.length;

  return (
    <div className="overflow-hidden bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {dayInfo.title}
            </h2>
            <p className="mt-6 text-xl/8 text-gray-600">Day {dayIndex}</p>
            <p className="mt-6 text-base/7 text-gray-600">
              {dayInfo.description}
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-start">
              <div className="w-[400px] h-[400px] shadow-[1px_2px_10px_rgba(0,0,0,0.3)] rounded-sm">
                <DayComponent />
              </div>
              <div className="flex items-center justify-center gap-2 w-full pt-4">
                {isFirstDay ? (
                  <div className="w-6 h-6">
                    <span className="sr-only">No previous day available</span>
                  </div>
                ) : (
                  <Link to={`/days/${dayIndex - 1}`}>
                    <NavArrow direction="left" />
                    <span className="sr-only">Go to previous day</span>
                  </Link>
                )}
                <span className="text-sm text-gray-500">Switch Day</span>
                {isLastDay ? (
                  <div className="w-6 h-6">
                    <span className="sr-only">No next day available</span>
                  </div>
                ) : (
                  <Link to={`/days/${dayIndex + 1}`}>
                    <NavArrow direction="right" />
                    <span className="sr-only">Go to next day</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Navigation arrow icon component. Change the direction prop to change the direction of the arrow.
 * @param param0
 * @returns
 */
function NavArrow({ direction }: { direction: "left" | "right" }) {
  return (
    <div
      className={`
    w-6 h-6
    rounded-full
    relative
    bg-transparent
    transition-background-color duration-150 ease-in-out

    after:absolute after:top-0 after:left-0
    after:scale-100 after:origin-center
    after:w-full after:h-full
    after:rounded-full
    after:transition-transform after:duration-[.1s] after:ease-in-out
    after:border-0

  hover:bg-blue-500
    hover:text-white
    
    active:after:border-1 after:border-blue-500
    active:after:scale-125
    `}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d={direction === "left" ? "M14 18l-6 -6 6 -6" : "M10 18l 6 -6 -6 -6"}
        />
      </svg>
    </div>
  );
}
