import PageBlur from "./PageBlur";
import SidebarBody from "./SidebarBody";
import SidebarContextProvider from "./SidebarContext/provider";
import SidebarVisibilityButton from "./SidebarVisibilityButton";

type SubItem = string;

type SubMenu = {
  subMenuHeading: string;
  subItems: SubItem[];
};

export type Menu = (SubMenu | SubItem)[];

export default function SidebarContainer({
  list,
  visibleByDefault,
}: {
  list: Menu;
  visibleByDefault: boolean;
}) {
  return (
    <SidebarContextProvider visibleByDefault={visibleByDefault}>
      <PageBlur />
      <nav
        className="fixed z-10 bg-white overflow-hidden h-screen top-0 right-0 flex flex-col gap-8 px-4 w-[210px]
  "
      >
        <SidebarVisibilityButton />
        <SidebarBody list={list} />
      </nav>
    </SidebarContextProvider>
  );
}
