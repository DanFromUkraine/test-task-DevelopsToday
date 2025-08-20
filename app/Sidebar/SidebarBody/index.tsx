"use client";

import clsx from "clsx";
import { useSidebarContext } from "../SidebarContext/context";
import { SubMenuContainer } from "./client";
import { MenuItemUI } from "./UI";
import { Menu } from "..";

function RenderSubMenusAndSubItems({ list }: { list: Menu }) {
  return list.map((item, i) => {
    if (typeof item === "string") {
      return <MenuItemUI key={i} textContent={item} />;
    } else {
      return <SubMenuContainer key={i} {...item} />;
    }
  });
}

export default function SidebarBody({ list }: { list: Menu }) {
  const { sidebarShown } = useSidebarContext();

  return (
    <div
      className={clsx(
        "flex flex-col w-full h-screen px-4 gap-2 absolute pt-20 right-0 border-l will-change-transform border-black",
        {
          "toast--leave": !sidebarShown,
          "toast--enter": sidebarShown,
        }
      )}
    >
      <RenderSubMenusAndSubItems list={list} />
    </div>
  );
}
