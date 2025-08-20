// Form.stories.tsx
import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import Form from "./";

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
  render: (args) => <Form {...args} />,
};
