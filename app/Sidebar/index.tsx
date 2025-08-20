import PageBlur from "./PageBlur";
import SidebarBody from "./SidebarBody";
import SidebarContextProvider from "./SidebarContext/provider";
import SidebarVisibilityButton from "./SidebarVisibilityButton";

export default function SidebarContainer() {
  return (
    <SidebarContextProvider>
        <PageBlur />
      <nav
        className="fixed z-10 bg-white overflow-hidden h-screen top-0 right-0 flex flex-col gap-8 px-4 w-[210px]
  "
      >
        <SidebarVisibilityButton />
        <SidebarBody />
      </nav>
    </SidebarContextProvider>
  );
}
