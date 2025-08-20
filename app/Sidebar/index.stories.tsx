import { Meta, StoryObj } from "@storybook/nextjs";
import SidebarContainer from ".";
import { menuWithTwoLevels, plainMenu } from "./constants";

const meta: Meta = {
    title: "Components/Sidebar",
    component: SidebarContainer,
    parameters: {
        layout: "centered"
    }
};

export default meta;

type Story = StoryObj<typeof SidebarContainer>;

export const Default: Story = {
  args: {
    list: menuWithTwoLevels,
  },
  render: (args) => <SidebarContainer {...args} />,
};

export const PlainSidebar: Story = {
  args: {
    list: plainMenu,
  },
  render: (args) => <SidebarContainer {...args} />,
};
