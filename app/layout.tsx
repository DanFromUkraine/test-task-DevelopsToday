import { ReactNode } from "react";
import "./globals.css"

export default function layout({ children }: { children: ReactNode }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
