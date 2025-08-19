"use client"

import { createContext, use } from "react";

export type ToastContextShape = {
  toastVisible: boolean;
  showToast: () => void;
  hideToast: () => void;
};

export const ToastContext = createContext<ToastContextShape>({
  toastVisible: false,
  showToast() {},
  hideToast() {},
});

export const useToastContext = () => use(ToastContext);
