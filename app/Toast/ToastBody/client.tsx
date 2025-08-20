"use client";

import { useCallback, useEffect, useRef } from "react";

export function useHideToastBodyOnTimeout({
  toastAppearenceDuration,
  toastVisible,
  hideToast,
}: {
  toastAppearenceDuration: number;
  toastVisible: boolean;
  hideToast: () => void;
}) {
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
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
