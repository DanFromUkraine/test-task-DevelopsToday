"use client";

import clsx from "clsx";
import { useSidebarContext } from "../SidebarContext/context";

export default function SidebarVisibilityButton() {
  const { sidebarShown, toggleSidebarShown } = useSidebarContext();

  //   console.log(sidebarShown);

  return (
    <button
      className={clsx(
        "[&>*]:w-8 [&>*]:h-1 [&>*]:bg-black w-full py-8 flex items-end flex-col gap-2 duration-300 z-10"
      )}
      onClick={toggleSidebarShown}
    >
      <div
        className={clsx("transition-transform origin-top-left", {
          "rotate-[24deg] duration-500 -translate-x-[150px]": sidebarShown,
        })}
      />
      <div
        className={clsx("transition-transform origin-bottom-left", {
          "-rotate-[24deg] duration-500 -translate-x-[150px]": sidebarShown,
        })}
      />
    </button>
  );
}
