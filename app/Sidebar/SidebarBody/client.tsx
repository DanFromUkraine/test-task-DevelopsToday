"use client";

import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { MenuItemUI, RenderSubMenuItemsUI, SubMenuContainerUI } from "./UI";
import clsx from "clsx";

export function useSubItemsVisibility() {
  const [areSubItemsShown, setSubItemsShown] = useState(false);
  const toggleSubItemsShown = useCallback(() => {
    setSubItemsShown((prev) => !prev);
  }, []);

  return { areSubItemsShown, toggleSubItemsShown };
}

export function useElHeight() {
  const elementRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.style.height = "0px";
      elementRef.current.style.overflow = "auto";
      setHeight(elementRef.current.scrollHeight);
      elementRef.current.style.overflow = "hidden";
    }
  }, [elementRef]);

  useEffect(() => {
    console.log({ height });
  }, [height]);

  return { elementRef, height };
}

function getCurrentPercentage({
  element,
  targetHeight,
  isCollapsing,
}: {
  element: HTMLDivElement;
  targetHeight: number;
  isCollapsing: boolean;
}) {
  return isCollapsing
    ? Math.round((element.clientHeight / targetHeight) * 100)
    : 0;
}

function updatePrevTimestamp(prevStamp: number, newTimeStamp: number) {
  prevStamp = newTimeStamp;
}

function getHeight({
  targetHeight,
  currentPercentage,
}: {
  targetHeight: number;
  currentPercentage: number;
}) {
  return Math.round((targetHeight * currentPercentage) / 100) + "px";
}

function updateElementHeight({
  targetHeight,
  currentPercentage,
  element,
}: {
  element: HTMLDivElement;
  targetHeight: number;
  currentPercentage: number;
}) {
  element.style.height = getHeight({ targetHeight, currentPercentage });
}

function getExpendOrCollapse({
  element,
  targetHeight,
  shouldExpend,
}: {
  element: HTMLDivElement;
  targetHeight: number;
  shouldExpend: boolean;
}) {
  const TIME_STEP = 5;
  const PERCENT_STEP = 5;
  let prevTimestamp = 0;
  let currentPercentage = getCurrentPercentage({
    element,
    isCollapsing: !shouldExpend,
    targetHeight,
  });

  return function callback(timestamp: number) {
    if (!(timestamp - prevTimestamp || 1 > TIME_STEP)) return;
    updateElementHeight({ targetHeight, element, currentPercentage });
    updatePrevTimestamp(prevTimestamp, timestamp);
    shouldExpend
      ? (currentPercentage += PERCENT_STEP)
      : (currentPercentage -= PERCENT_STEP);
    if (shouldExpend ? currentPercentage < 100 : currentPercentage > 1) {
      requestAnimationFrame(callback);
    } else {
      element.style.height = shouldExpend ? targetHeight + "px" : "0px";
    }
  };
}

export function useAnimateExtension({
  areSubItemsShown,
  elementRef,
  height,
}: {
  areSubItemsShown: boolean;
  elementRef: RefObject<HTMLDivElement | null>;
  height: number;
}) {
  useEffect(() => {
    if (elementRef.current === null) return;
    const element = elementRef.current;

    requestAnimationFrame(() => {
      requestAnimationFrame(
        getExpendOrCollapse({
          element,
          shouldExpend: areSubItemsShown,
          targetHeight: height,
        })
      );
    });
  }, [height, areSubItemsShown, elementRef]);
}

export function RenderSubMenuItems({
  subMenuItems,
  areSubItemsShown,
}: {
  subMenuItems: string[];
  areSubItemsShown: boolean;
}) {
  const { elementRef, height } = useElHeight();
  useAnimateExtension({ areSubItemsShown, elementRef, height });

  return (
    <RenderSubMenuItemsUI {...{subMenuItems, elementRef}}/>
  );
}

export function SubMenuContainer({
  subItems,
  subMenuHeading,
}: {
  subMenuHeading: string;
  subItems: string[];
}) {
  const { areSubItemsShown, toggleSubItemsShown } = useSubItemsVisibility();

  return (
    <SubMenuContainerUI {...{toggleSubItemsShown, areSubItemsShown, subItems, subMenuHeading}}/>
  );
}