import { useId, useRef, useState } from "react";
import type { Route } from "../+types/day-13";
import "./day-13.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CSS Day 13" },
    { name: "description", content: "Day 13 of 100 Days of CSS challenge" },
  ];
}

export default function Day13() {
  const users = [
    {
      id: 1,
      name: "Julia Toth",
      image: "/imgs/day-13/13-1.jpg",
    },
    {
      id: 2,
      name: "John Doe",
      image: "/imgs/day-13/13-2.jpg",
    },
    {
      id: 3,
      name: "Jane Smith",
      image: "/imgs/day-13/13-3.jpg",
    },
    {
      id: 4,
      name: "Elizabeth Doe",
      image: "/imgs/day-13/13-4.jpg",
    },
  ];
  const [selectedUser, setSelectedUser] = useState<
    (typeof users)[number] | null
  >(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Background
    <div
      className={`
      w-full h-full
      bg-white
      font-['Open_Sans',sans-serif] antialiased
      grid grid-rows-1 grid-cols-1 place-items-center
      overflow-hidden
      `}
    >
      {/* User Gallery */}
      <div
        className={`
        row-1 col-1
        grid grid-rows-2 grid-cols-2 gap-1
        bg-white
        w-full h-full
        p-1
        group/gallery
        `}
      >
        {/* User Profile Preview */}
        {users.map((user) => (
          <UserProfilePreview
            onClick={() => {
              setSelectedUser(user);
              setIsOpen(true);
            }}
          >
            <img src={user.image} alt={user.name} />
          </UserProfilePreview>
        ))}
      </div>
      {/* User Detail */}
      <div
        className={`
        row-1 col-1
        w-full h-full
        relative
        flex flex-col justify-stretch gap-0
        ${isOpen ? "pointer-events-auto" : "pointer-events-none"}
      `}
      >
        {/* Close Button */}
        <div
          onClick={() => setIsOpen(false)}
          className={`
            absolute top-2.5 right-2.5
            rounded-full
            bg-[#EC6565]
            w-[50px] h-[50px]
            shadow-[2px_4px_10px_0_rgba(0,0,0,0.5)]
            
            hover:bg-white
            hover:text-[#EC6565]
            flex items-center justify-center
            text-white text-3xl
            rotate-45
            cursor-pointer
            select-none
            z-10
            ${
              isOpen
                ? "[transition:background_.3s_ease-in-out,transform_.6s_ease-out_.6s] transform-[translate3d(0,0,0)]"
                : "[transition:background_.3s_ease-in-out,transform_.5s_ease-in] transform-[translate3d(-105%,-105%,0)]"
            }
          `}
        >
          +
        </div>
        {/* Header Image */}
        <img
          src="/imgs/day-13/13-1-header.jpg"
          alt="Header image"
          className={`w-full h-auto 
            
            ${
              isOpen
                ? "transition-all duration-600 ease-out transform-[translate3d(0,0,0)]"
                : "transition-all duration-600 ease-out delay-400 transform-[translate3d(0,-105%,0)]"
            }`}
        />
        {/* User Profile photo */}
        <img
          src={selectedUser?.image}
          alt="User profile photo"
          className={`
          absolute top-[130px] left-[50%]
          transform translate-x-[-50%]
          w-[100px] h-[100px]
          rounded-full
          border-2 border-white
          shadow-[4px_6px_15px_0_rgba(0,0,0,0.2)]
          z-10
          ${
            isOpen
              ? "transition-all duration-600 ease-out delay-300 translate-y-0"
              : "transition-all duration-600 ease-in delay-200 translate-y-[-250px]"
          }
          `}
        />
        {/* User Info */}
        <div
          className={`
          flex-1
          w-full h-[10px]
          bg-[#EC6565]
          pt-[67px]
          ${
            isOpen
              ? "transition-all duration-600 ease-out translate-y-0"
              : "transition-all duration-600 ease-in delay-400 translate-y-[105%]"
          }
          `}
        >
          <div className="text-center text-white text-base font-semibold">
            <span>{selectedUser?.name}</span>
          </div>
          <div
            role="group"
            className="flex items-center justify-center gap-4 mt-9"
          >
            <UserInfoButton>
              <span className="fa fa-phone"></span>
            </UserInfoButton>
            <UserInfoButton>
              <span className="fa fa-comment text-lg"></span>
            </UserInfoButton>
            <UserInfoButton>
              <span className="fa fa-heart text-lg"></span>
            </UserInfoButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserProfilePreview(props: React.ComponentProps<"div">) {
  const { children, className, ...rest } = props;
  return (
    <div
      className={`
        grid grid-rows-1 grid-cols-1 place-items-center
        cursor-pointer
        group
        ${className ?? ""}
      `}
      {...rest}
    >
      <div className="row-1 col-1">{children}</div>
      {/* Dark Overlay */}
      <div
        className={`
          row-1 col-1
          w-full h-full
          bg-black
          opacity-0
          transition-all duration-600 ease-in-out
          group-hover:opacity-60
          grid grid-rows-1 grid-cols-1 place-items-center
          `}
      ></div>
      {/* Plus Button */}
      <div
        className={`
          row-1 col-1
          rounded-full
          bg-[#EC6565]
          w-[50px] h-[50px]
          shadow-[2px_4px_10px_0_rgba(0,0,0,0.5)]
          transition-all duration-400 ease-in-out
          scale-[2]
          opacity-0
          group-hover:scale-[1]
          group-hover:opacity-100
          flex items-center justify-center
          text-white text-3xl
        `}
      >
        +
      </div>
    </div>
  );
}

function UserInfoButton(props: React.ComponentProps<"button">) {
  const { children, className, ...rest } = props;
  return (
    <button
      className={`
      w-[45px] h-[45px]
      border-[1px] border-solid border-white
      rounded-full
      transition-all duration-200 ease-in-out
      text-white
      flex items-center justify-center
      ${className ?? ""}`}
      {...rest}
    >
      {children}
    </button>
  );
}
