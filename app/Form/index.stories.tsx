// Form.stories.tsx

import type { Meta, StoryObj } from "@storybook/nextjs";
import Form from ".";

const meta: Meta<typeof Form> = {
  title: "Components/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
  args: {
    inputType: "text",
    clearable: false,
  },

  render: (args) => <Form {...args} />,
};

export const PasswordClearable: Story = {
  args: {
    inputType: "password",
    clearable: true,
  },

  render: (args) => <Form {...args} />,
};

export const NumberUnclearable: Story = {
  args: {
    inputType: "number",
    clearable: false,
  },

  render: (args) => <Form {...args} />,
};
