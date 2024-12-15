import type { Meta, StoryObj } from "@storybook/react";
import Popover from "./Popover";

const meta = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    children: <button>Hover me</button>,
    popoverContent: (
      <div>
        <span>
          This widget links directly to your public profile so that you can
          easily share your impact with your customers. Turn it off here if you
          do not want the badge to link to it.
        </span>
      </div>
    ),
  },
};
