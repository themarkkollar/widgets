import type { Meta, StoryObj } from "@storybook/react";
import Toggle from "./Toggle";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Unchecked: Story = {
  args: {
    isChecked: false,
    onChange: (checked: boolean) => {
      console.log("Toggle changed:", checked);
    },
  },
};

export const Checked: Story = {
  args: {
    isChecked: true,
    onChange: (checked: boolean) => {
      console.log("Toggle changed:", checked);
    },
  },
};
