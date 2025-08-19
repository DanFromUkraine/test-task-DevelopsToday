import { RefObject } from "react";
import { RenderSubMenuItems } from "./client";
import clsx from "clsx";

export function MenuItemUI({ textContent }: { textContent: string }) {
  return (
    <p>
      --{">"} {textContent}
    </p>
  );
}

export function SubMenuContainerUI({
  toggleSubItemsShown,
  subItems,
  subMenuHeading,
  areSubItemsShown,
}: {
  toggleSubItemsShown: () => void;
  subMenuHeading: string;
  subItems: string[];
  areSubItemsShown: boolean;
}) {
  return (
    <div className="flex  flex-col whitespace-nowrap ">
      <button
        onClick={toggleSubItemsShown}
        className="bg-gray-700 rounded-md text-white"
      >
        {subMenuHeading}
      </button>
      <RenderSubMenuItems {...{ subMenuItems: subItems, areSubItemsShown }} />
    </div>
  );
}

export function RenderSubMenuItemsUI({
  elementRef,
  subMenuItems,
}: {
  elementRef: RefObject<HTMLDivElement | null>;
  subMenuItems: string[];
}) {
  return (
    <div
      ref={elementRef}
      className={clsx("flex bg-gray-200 rounded-b-md p-1 flex-col gap-2")}
    >
      {subMenuItems.map((text, i) => (
        <MenuItemUI key={i} textContent={text} />
      ))}
    </div>
  );
}
