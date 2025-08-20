import { Meta, StoryObj } from "@storybook/nextjs";
import SidebarContainer from ".";
import { menuWithTwoLevels, plainMenu } from "./constants";

const meta: Meta = {
  title: "Components/Sidebar",
  component: SidebarContainer,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof SidebarContainer>;

export const Default: Story = {
  args: {
    list: [{
      "subMenuHeading": "Sub menu 1",
      "subItems": ["item 1", "item 2", "item 3"]
    }, {
      "subMenuHeading": "Sub menu 2",
      "subItems": ["item 4", "item 5", "item 6"]
    }, {
      "subMenuHeading": "Sub menu 3",
      "subItems": ["item 7", "item 8", "item 9"]
    }, "item 10", "item 11", "item 22"],
    visibleByDefault: true,
  },
  render: (args) => <SidebarContainer {...args} />,
};

export const PlainSidebar: Story = {
  args: {
    list: plainMenu,
    visibleByDefault: false,
  },
  render: (args) => <SidebarContainer {...args} />,
};
