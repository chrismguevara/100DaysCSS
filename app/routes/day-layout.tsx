import { Outlet } from "react-router";

export default function DayLayout() {
  return (
    // TODO Match the layout of the 100 Days of CSS website
    <div className="grid place-items-center h-screen bg-white">
      <div className="w-[400px] h-[400px] shadow-[1px_2px_10px_rgba(0,0,0,0.3)] rounded-sm">
        <Outlet />
      </div>
    </div>
  );
}
