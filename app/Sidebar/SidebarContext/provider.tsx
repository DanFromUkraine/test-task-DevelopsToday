"use client";

import { ReactNode, useCallback, useState } from "react";
import { SidebarContext } from "./context";

export default function SidebarContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [sidebarShown, setSidebarShown] = useState<boolean | null>(null);

  const toggleSidebarShown = useCallback(() => {
    setSidebarShown((prev) => !Number(prev));
  }, []);

  return (
    <SidebarContext.Provider value={{ sidebarShown, toggleSidebarShown }}>
      {children}
    </SidebarContext.Provider>
  );
}
