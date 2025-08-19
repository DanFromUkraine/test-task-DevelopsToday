import { ReactNode } from "react";
import "./globals.css";
import SidebarContainer from "./Sidebar";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <html lang="uk">
      <body className="flex">
        <div className="flex flex-col">{children}</div> <SidebarContainer />
      </body>
    </html>
  );
}
