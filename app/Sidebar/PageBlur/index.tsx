"use client";

import clsx from "clsx";
import { useSidebarContext } from "../SidebarContext/context";

export default function PageBlur() {
  const { sidebarShown, toggleSidebarShown } = useSidebarContext();

  return (
    <div
      onClick={toggleSidebarShown}
      className={clsx("hidden duration-200", {
        "w-screen !flex absolute top-0 left-0 h-screen backdrop-blur-md":
          sidebarShown,
      })}
    />
  );
}
