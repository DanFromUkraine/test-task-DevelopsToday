"use client";

import clsx from "clsx";
import { useSidebarContext } from "../SidebarContext/context";
import { SubMenuContainer } from "./client";
import { MenuItemUI } from "./UI";

export default function SidebarBody() {
  const { sidebarShown } = useSidebarContext();

  return (
    <div
      className={clsx("flex flex-col w-full h-full", {
        invisible: !sidebarShown,
      })}
    >
      <SubMenuContainer
        subMenuHeading="SubMenu 1"
        subItems={["subItem1", "subItem2", "subItem4"]}
      />
      <SubMenuContainer
        subMenuHeading="SubMenu 2"
        subItems={["subItem5", "subItem6", "subItem7"]}
      />
      <SubMenuContainer
        subMenuHeading="Submenu 3"
        subItems={["subItem8", "subItem9", "subItem10"]}
      />
      <MenuItemUI textContent="ending subItem" />
    </div>
  );
}
