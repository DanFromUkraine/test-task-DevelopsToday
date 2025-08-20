"use client";

import { createContext, use } from "react";

export interface SidebarContextDataShape {
  sidebarShown: boolean | null;
  toggleSidebarShown: () => void;
}

export const SidebarContext = createContext<SidebarContextDataShape>({
  sidebarShown: false,
  toggleSidebarShown() {},
});

export const useSidebarContext = () => use(SidebarContext);
