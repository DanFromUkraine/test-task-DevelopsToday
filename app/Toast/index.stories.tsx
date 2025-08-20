import Toast from ".";
import { Meta, StoryObj } from "@storybook/nextjs";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const DefaultSlide: Story = {
  args: {
    toastAppearenceDuration: 5_000,
    clearable: true,
    animationType: "slide",
  },
  render: (args) => <Toast {...args} />,
};

export const UnclearableAnd3Secs: Story = {
  args: {
    toastAppearenceDuration: 3_000,
    clearable: false,
    animationType: "slide",
  },
};

export const DefaultFade: Story = {
  args: {
    toastAppearenceDuration: 5_000,
    clearable: true,
    animationType: "fade",
  },
};
