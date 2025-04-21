import { Outlet, useLocation } from "react-router";
import { posts } from "./posts";
export default function DayLayout() {
  const location = useLocation();
  const dayIndex = parseInt(location.pathname.split("/").pop() ?? "0");
  console.log(dayIndex);
  const dayInfo = posts[dayIndex - 1];

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
            <div className="mt-10 flex">
              {/* TODO Add a link to next or previous days */}
              {/* <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join our team <span aria-hidden="true">&rarr;</span>
              </a> */}
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <div className="w-[400px] h-[400px] shadow-[1px_2px_10px_rgba(0,0,0,0.3)] rounded-sm">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
