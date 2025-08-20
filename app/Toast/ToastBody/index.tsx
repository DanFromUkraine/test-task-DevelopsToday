"use client";

import clsx from "clsx";
import { useToastContext } from "../ToastContext/context";
import { useHideToastBodyOnTimeout } from "./client";
import { ToastBodyContentUI, ToastBodyHeadingUI } from "./UI";
import { useEffect, useLayoutEffect, useState } from "react";

export type ToastBodyProps = {
  toastAppearenceDuration: number;
  clearable: boolean;
  animationType: "fade" | "slide";
};

// function useMakeInvisibleIfLoading() {
//   const [canBeVisible, setCanBeVisible] = useState(() => false);

//   useLayoutEffect(() => {
//     setCanBeVisible(true);
//   }, []);

//   return canBeVisible;
// }

export default function ToastBody(
  { toastAppearenceDuration, clearable, animationType }: ToastBodyProps = {
    toastAppearenceDuration: 5_000,
    clearable: true,
    animationType: "slide",
  }
) {
  const { toastVisible, hideToast } = useToastContext();
  const { flushAndHideToast } = useHideToastBodyOnTimeout({
    toastAppearenceDuration,
    toastVisible,
    hideToast,
  });
  const canBeVisible = toastVisible !== null;
  // const canBeVisible = useMakeInvisibleIfLoading();

  console.log({ toastVisible });

  return (
    <div
      className={clsx(
        "toast w-full h-fit border-2 border-black rounded-xl p-8",
        {
          "slide-out-x":
            !toastVisible && animationType === "slide" && canBeVisible,
          "slide-in-x": toastVisible && animationType === "slide",
          fadeIn: toastVisible && animationType === "fade",
          fadeOut: !toastVisible && animationType === "fade" && canBeVisible,
          "!flex": canBeVisible,
        }
      )}
    >
      <ToastBodyHeadingUI
        {...{ clearable, clear: flushAndHideToast, classNameIcon: "!text-2xl" }}
      />
      <ToastBodyContentUI />
    </div>
  );
}
