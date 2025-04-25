import { useId, useState } from "react";
import type { Route } from "../+types/day-7";
import "./day-7.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CSS Day 7" },
    { name: "description", content: "Day 7 of 100 Days of CSS challenge" },
  ];
}

export default function Day7() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchContainerId = useId();
  const sidenavId = useId();
  const [isSidenavActive, setIsSidenavActive] = useState(false);
  return (
    <div
      className={`
      min-h-full min-w-full 
      bg-[#264057]
      grid place-items-center
      grid-cols-1 grid-rows-1
      font-['Open_Sans','sans-serif']
      antialiased
      overflow-hidden
      [--blue:#5F98CD]
      [--blue-light:#B2DAFF]
      `}
    >
      {/* Sidenav menu */}
      <div className="row-1 col-1 w-[300px] h-[300px] flex justify-start pt-4">
        <nav
          id={sidenavId}
          className={`
          bg-[#43627D]
          w-[170px] h-[270px]
          rounded-[3px]
          transition-all duration-[.3s] ease-in-out
          ${isSidenavActive ? "translate-x-0" : "translate-x-[20px]"}
      `}
        >
          <ul className={`py-3`}>
            <MenuItem>Dashboard</MenuItem>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Notifications</MenuItem>
            <MenuItem>Messages</MenuItem>
            <MenuItem>Settings</MenuItem>
          </ul>
        </nav>
      </div>
      {/* Panel */}
      <div
        className={`
          w-[300px] h-[300px]
          row-1 col-1
          rounded-sm overflow-hidden
          bg-white
          shadow-[10px_10px_15px_0_rgba(0,0,0,0.3)]
          flex flex-col
          z-[2]
          transition-all duration-[.5s] ease-in-out
          ${isSidenavActive ? "translate-x-[150px]" : "translate-x-0"}
        `}
      >
        <header
          className={`
          grid grid-cols-[29px_1fr_20px] grid-rows-1 items-center
          w-full min-h-[60px]
          bg-[var(--blue)]
          text-white
          font-semibold
          text-[15px]
          px-5
        `}
        >
          <button
            className={`
              w-[29px] h-[15px]
              row-1 col-1
              bg-[var(--blue-light)] hover:bg-white
              transition-[background-color] duration-[.3s] ease
              cursor-pointer`}
            aria-controls={sidenavId}
            aria-expanded={isSidenavActive}
            onClick={() => setIsSidenavActive(!isSidenavActive)}
          ></button>
          <h2 className="text-center row-1 col-2">Notifications</h2>
          <div
            id={searchContainerId}
            className={`
              col-start-1 col-end-3 row-1 
              h-full
              flex flex-col justify-center pr-4 -ml-1
              transition-all duration-[.3s] ease-in-out
              ${
                isSearchActive
                  ? "translate-x-0 opacity-100 pointer-events-auto"
                  : "translate-x-[15px] opacity-0 pointer-events-none"
              }
            `}
          >
            <input
              type="search"
              placeholder="Search ..."
              className={`
                rounded-[17px] 
                bg-white 
                my-auto 
                h-[34px] px-[17px] 
                text-[#666] text-xs`}
            />
          </div>
          <button
            className={`
              w-[20px] h-[21px] 
              bg-[var(--blue-light)] hover:bg-white
              transition-[background-color] duration-[.3s] ease
              cursor-pointer`}
            aria-expanded={isSearchActive}
            aria-controls={searchContainerId}
            onClick={() => setIsSearchActive(!isSearchActive)}
          ></button>
        </header>
        {/* Profile */}
        <section
          className={`
            flex-1
          `}
        >
          <ul
            className={`
            flex flex-col gap-6
            pt-6
            px-5
            text-sm
            relative
            text-[#666]
            h-full

            before:absolute
            before:w-[3px]
            before:h-full
            before:bg-[#EBEBEB]
            before:left-[25px]
            before:top-0
          `}
          >
            <NotificationItem
              className={`[animation-delay:0.4s]`}
              headerContent={<time dateTime="21:24">9:24 PM</time>}
            >
              <strong>John Walker</strong> posted a photo on your wall.
            </NotificationItem>
            <NotificationItem
              className={`[animation-delay:0.6s]`}
              headerContent={<time dateTime="8:19">8:19 AM</time>}
            >
              <strong>Alice Parker</strong> commented on your last post.
            </NotificationItem>
            <NotificationItem
              className={`[animation-delay:0.8s]`}
              headerContent="Yesterday"
            >
              <strong>Luke Wayne</strong> added you as a friend.
            </NotificationItem>
          </ul>
        </section>
      </div>
    </div>
  );
}

function NotificationItem({
  className,
  headerContent,
  children,
}: {
  className?: string;
  headerContent: string | React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <li
      className={`
      group relative ml-5 cursor-pointer
      animate-[here-am-i_0.5s_ease-out]
      [animation-fill-mode:both]
      ${className}
      `}
    >
      <div
        className={`
          absolute
          top-0 left-[-20px]
          w-[11px] h-[11px]
          rounded-full
          border-2 border-[var(--blue)]
          bg-white
          z-2
          shadow-[0_0_0_3px_#fff]
        `}
      ></div>
      <article className={`group-hover:text-[var(--blue)]`}>
        <header className={`leading-none [&>*]:align-top text-[11px]`}>
          {headerContent}
        </header>
        <p>{children}</p>
      </article>
    </li>
  );
}

function MenuItem({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <a
        href="#"
        className={`
        py-[18px] px-[17px]
        flex flex-row items-center gap-2
        text-sm
        group
        hover:bg-[#385269]
        transition-all duration-[.3s] ease-in-out  
      `}
      >
        <span
          className={`
      w-[14px] h-[14px]
      rounded-full
      bg-[#93B2CD] group-hover:bg-white
      transition-all duration-[.3s] ease-in-out
    `}
        ></span>
        <span className="text-[#93B2CD] leading-none group-hover:text-white transition-all duration-[.3s] ease-in-out">
          {children}
        </span>
      </a>
    </li>
  );
}
