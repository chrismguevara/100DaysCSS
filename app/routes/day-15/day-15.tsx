import { useHref } from "react-router";
import type { Route } from "../+types/day-15";
import "./day-15.css";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CSS Day 15" },
    { name: "description", content: "Day 15 of 100 Days of CSS challenge" },
  ];
}

export default function Day15() {
  const path = useHref("/imgs/day-15");
  const [isSyncing, setIsSyncing] = useState(false);
  const [filename, setFilename] = useState("");
  const fileLoaded = filename !== "";
  const [isOver, setIsOver] = useState(false);
  const [isDone, setIsDone] = useState(false);
  return (
    <div
      className={`
      w-full h-full
      bg-[#3A92AF] bg-gradient-to-tr from-[#3A92AF] to-[#5CA05A]
      font-['Open_Sans',sans-serif] antialiased
      grid place-items-center
      overflow-hidden
      `}
    >
      <div
        className={`
          bg-white
            shadow-[8px_10px_15px_0_rgba(0,0,0,0.2)]
            rounded-[3px]
            w-[300px] h-[260px]
            flex flex-col justify-stretch items-stretch
            text-center
        `}
      >
        <header className={`p-4 border-b border-b-[#D8D8D8] relative`}>
          <h2 className={`test-base text-[#676767]`}>Drop file to upload</h2>
          {/* Progress bar */}
          <div
            className={`
            absolute bottom-0 left-0
            w-full h-[3px]
            scale-x-0 origin-left
            bg-[#6ECE3B]
            transition-all duration-3000 ease-out
            ${isSyncing || isDone ? "scale-x-100" : ""}
            `}
          ></div>
        </header>
        <div
          className={`
          flex-1
          grid grid-rows-1 grid-cols-1 place-items-center
        `}
        >
          {/* Dropzone */}
          <div
            onDragEnter={(e) => {
              e.preventDefault();
              setIsOver(true);
            }}
            onDragOver={(e) => e.preventDefault()}
            onDragLeave={() => setIsOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setIsOver(false);

              const file = e.dataTransfer.files[0];
              if (file) {
                setFilename(file.name);
              }
            }}
            className={`
              row-1 col-1
              w-[100px] h-[80px]
              border border-[#A4A4A4] border-dashed
              rounded-[3px]
              grid grid-rows-1 grid-cols-1 place-items-center
              transition-all duration-200 ease-in-out

              ${isOver ? "bg-[#eee] border-[#666]" : ""}
              ${isSyncing || isDone ? "opacity-0" : "opacity-100"}
            `}
          >
            {/* Upload icon */}
            <img
              src={`${path}/upload.svg`}
              alt="Upload"
              className={`row-1 col-1 ${fileLoaded ? "opacity-0" : ""}`}
            />
            <div
              className={`row-1 col-1 text-[#676767] text-sm ${
                fileLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              {filename}
            </div>
            <input
              type="file"
              className={`row-1 col-1 w-full h-full opacity-0 z-10`}
            />
          </div>
          {/* Syncing icon */}
          <img
            src={`${path}/syncing.svg`}
            alt="Syncing"
            className={`row-1 col-1 opacity-0 ${
              isSyncing ? "animate-[syncing_3.2s_ease-in-out]" : ""
            }`}
          />
          {/* Done icon */}
          <img
            src={`${path}/checkmark.svg`}
            alt="Done"
            className={`row-1 col-1 opacity-0 ${
              isSyncing || isDone
                ? "animate-[done_0.5s_ease-in_3.2s] [animation-fill-mode:both]"
                : ""
            }`}
          />
        </div>
        {/* Button */}
        <div className={`pb-6`}>
          <button
            className={`
              p-10 py-2 bg-[#6ECE3B] text-white text-sm rounded-[3px]
              shadow-[0_2px_0_0_#498C25]
              transition-all duration-200 ease-in-out
              hover:shadow-[0_2px_0_0_#498C25,_0_2px_10px_0_#6ECE3B]
              `}
            onClick={() => {
              if (fileLoaded && !isSyncing && !isDone) {
                setIsSyncing(true);
                setTimeout(() => {
                  setIsSyncing(false);
                  setIsDone(true);
                }, 3200);
              }
            }}
          >
            {isSyncing ? "Uploading..." : isDone ? "Done" : "Upload file"}
          </button>
        </div>
      </div>
    </div>
  );
}
