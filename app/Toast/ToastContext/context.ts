"use client";

import { createContext, use } from "react";

export type ToastContextShape = {
  toastVisible: boolean | null;
  showToast: () => void;
  hideToast: () => void;
};

export const ToastContext = createContext<ToastContextShape>({
  toastVisible: null,
  showToast() {},
  hideToast() {},
});

export const useToastContext = () => use(ToastContext);
