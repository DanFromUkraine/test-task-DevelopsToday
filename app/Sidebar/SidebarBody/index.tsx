"use client";

import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { useSidebarContext } from "../SidebarContext/context";
import clsx from "clsx";

function useSubItemsVisibility() {
  const [areSubItemsShown, setSubItemsShown] = useState(false);
  const toggleSubItemsShown = useCallback(() => {
    setSubItemsShown((prev) => !prev);
  }, []);

  return { areSubItemsShown, toggleSubItemsShown };
}

function SubMenuContainer({
  subItems,
  submenuHeading,
}: {
  submenuHeading: string;
  subItems: string[];
}) {
  const { areSubItemsShown, toggleSubItemsShown } = useSubItemsVisibility();

  return (
    <div className="flex flex-col whitespace-nowrap ">
      <button onClick={toggleSubItemsShown}>{submenuHeading}</button>
      <RenderSubMenuItems {...{ subMenuItems: subItems, areSubItemsShown }} />
    </div>
  );
}

function useElHeight() {
  const elementRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.style.height = "0px";
      elementRef.current.style.overflow = "auto";

      console.log(elementRef.current);

      setHeight(elementRef.current.scrollHeight);
    }
  }, [elementRef]);

  useEffect(() => {
    console.log({ height });
  }, [height]);

  return { elementRef, height };
}

function getExpendOrCollapse({
  elementRef,
  targetHeight,
  shouldExpend,
}: {
  elementRef: RefObject<HTMLDivElement>;
  targetHeight: number;
  shouldExpend: boolean;
}) {
  const TIME_STEP = 5;
  const PERCENT_STEP = 3;
  let prevTimestamp = 0;
  let currentPercentage = Math.round(
    elementRef.current.clientHeight / targetHeight * 100
  );

  if (!shouldExpend) {
    console.log({ currentPercentage });
  }

  return function callback(timestamp: number) {
    if (timestamp - prevTimestamp || 1 > TIME_STEP) {
      elementRef.current.style.height =
        Math.round((targetHeight * currentPercentage) / 100) + "px";
      prevTimestamp = timestamp;
      if (shouldExpend) {
        currentPercentage += PERCENT_STEP;
      } else {
        currentPercentage -= PERCENT_STEP;
      }
      console.log("call callback", currentPercentage);
      if (shouldExpend) {
        if (currentPercentage < 100) {
          requestAnimationFrame(callback);
        } else {
          elementRef.current.style.height = targetHeight + "px";
        }
      } else {
        if (currentPercentage > 1) {
          requestAnimationFrame(callback);
        } else {
          elementRef.current.style.height = "0px";
        }
      }
    }
  };
}

function useAnimateExtension({
  areSubItemsShown,
  elementRef,
  height,
}: {
  areSubItemsShown: boolean;
  elementRef: RefObject<HTMLDivElement | null>;
  height: number;
}) {
  useEffect(() => {
    if (!elementRef.current) return;
    if (areSubItemsShown) {
      requestAnimationFrame(() => {
        requestAnimationFrame(
          getExpendOrCollapse({
            elementRef,
            shouldExpend: true,
            targetHeight: height,
          })
        );
      });
    } else {
      //   elementRef.current.style.height = "0px";
      requestAnimationFrame(() => {
        requestAnimationFrame(
          getExpendOrCollapse({
            elementRef,
            shouldExpend: false,
            targetHeight: height,
          })
        );
      });
    }
  }, [height, areSubItemsShown, elementRef]);
}

function RenderSubMenuItems({
  subMenuItems,
  areSubItemsShown,
}: {
  subMenuItems: string[];
  areSubItemsShown: boolean;
}) {
  const { elementRef, height } = useElHeight();
  useAnimateExtension({ areSubItemsShown, elementRef, height });

  return (
    <div ref={elementRef} className={clsx("flex flex-col gap-2")}>
      {subMenuItems.map((text, i) => (
        <MenuItem key={i} textContent={text} />
      ))}
    </div>
  );
}

function MenuItem({ textContent }: { textContent: string }) {
  return <p>{textContent}</p>;
}

export default function SidebarBody() {
  const { sidebarShown } = useSidebarContext();

  return (
    <div
      className={clsx("flex flex-col w-full h-full", {
        invisible: !sidebarShown,
      })}
    >
      <SubMenuContainer
        submenuHeading="SubMenu 1"
        subItems={["subItem1", "subItem2", "subItem4"]}
      />
      <SubMenuContainer
        submenuHeading="SubMenu 2"
        subItems={["subItem5", "subItem6", "subItem7"]}
      />
      <SubMenuContainer
        submenuHeading="Submenu 3"
        subItems={["subItem8", "subItem9", "subItem10"]}
      />
      <MenuItem textContent="ending subItem" />
    </div>
  );
}
