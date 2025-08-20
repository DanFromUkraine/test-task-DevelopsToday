import { ReactNode } from "react";
import "./globals.css";
import SidebarContainer from "./Sidebar";
import { menuWithTwoLevels } from "./Sidebar/constants";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <html lang="uk">
      <body className="flex">
        <div className="flex flex-col">{children}</div>{" "}
        <SidebarContainer list={menuWithTwoLevels} visibleByDefault={false} />
      </body>
    </html>
  );
}
