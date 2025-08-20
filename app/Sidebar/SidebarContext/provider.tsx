"use client";

import { ReactNode, useCallback, useState } from "react";
import { SidebarContext } from "./context";

export default function SidebarContextProvider({
  children,
  visibleByDefault,
}: {
  children: ReactNode;
  visibleByDefault: boolean;
}) {
  const [sidebarShown, setSidebarShown] = useState<boolean | null>(
    visibleByDefault || null
  );

  const toggleSidebarShown = useCallback(() => {
    setSidebarShown((prev) => !Number(prev));
  }, []);

  return (
    <SidebarContext.Provider value={{ sidebarShown, toggleSidebarShown }}>
      {children}
    </SidebarContext.Provider>
  );
}
