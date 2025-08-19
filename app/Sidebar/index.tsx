import SidebarBody from "./SidebarBody";
import SidebarContextProvider from "./SidebarContext/provider";
import SidebarVisibilityButton from "./SidebarVisibilityButton";

export default function SidebarContainer() {
  return (
    <SidebarContextProvider>
      <nav
        className="sticky overflow-hidden h-screen top-0 right-0 flex flex-col gap-8 px-4 w-[210px]
  "
      >
        <SidebarVisibilityButton />
        <SidebarBody />
      </nav>
    </SidebarContextProvider>
  );
}
