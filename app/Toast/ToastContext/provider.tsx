"use client";

import { ReactNode, useCallback, useState } from "react";
import { ToastContext } from "./context";

export default function ToastContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [toastVisible, setToastVisible] = useState(() => false);

  const showToast = useCallback(() => {
    setToastVisible(true);
  }, []);

  const hideToast = useCallback(() => {
    setToastVisible(false);
  }, []);

  return (
    <ToastContext.Provider value={{ toastVisible, showToast, hideToast }}>
      {children}
    </ToastContext.Provider>
  );
}
