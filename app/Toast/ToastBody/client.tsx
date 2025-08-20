"use client";

import { useEffect, useRef } from "react";
import { ToastContextShape } from "../ToastContext/context";

export function useHideToastBodyOnTimeout({
  toastAppearenceDuration,
  toastVisible,
  hideToast,
}: Omit<ToastContextShape, "showToast"> & {
  toastAppearenceDuration: number;
}) {
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    if (toastVisible === null) return;
    if (toastVisible) {
      timer.current = setTimeout(() => {
        hideToast();
      }, toastAppearenceDuration);
    } else {
      clearTimeout(timer.current);
    }
  }, [toastVisible]);

  return {
    flushAndHideToast: hideToast,
  };
}
