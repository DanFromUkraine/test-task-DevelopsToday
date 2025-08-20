"use client";

import clsx from "clsx";
import { useToastContext } from "../ToastContext/context";
import { useHideToastBodyOnTimeout } from "./client";
import { ToastBodyContentUI, ToastBodyHeadingUI } from "./UI";

export type ToastBodyProps = {
  toastAppearenceDuration: number;
  clearable: boolean;
};

export default function ToastBody(
  { toastAppearenceDuration, clearable }: ToastBodyProps = {
    toastAppearenceDuration: 5_000,
    clearable: true,
  }
) {
  const { toastVisible, hideToast } = useToastContext();
  const { flushAndHideToast } = useHideToastBodyOnTimeout({
    toastAppearenceDuration,
    toastVisible,
    hideToast,
  });

  return (
    <div
      className={clsx(
        "toast w-full h-fit border-2 border-black rounded-xl p-8",
        {
          "slide-out-x": !toastVisible,
          "slide-in-x": toastVisible,
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
