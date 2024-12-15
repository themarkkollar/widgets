import type { Meta, StoryObj } from "@storybook/react";
import ColorSelect from "./ColorSelect";
import { WidgetColor } from "../../types/widget.interface";

const meta = {
  title: "Components/ColorSelect",
  component: ColorSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ColorSelect>;

export default meta;
type Story = StoryObj<typeof ColorSelect>;

export const WithBeigeSelected: Story = {
  args: {
    selectedColor: WidgetColor.BEIGE,
    onSelectColor: (color: WidgetColor) => {
      console.log("Selected color:", color);
    },
  },
};

export const WithGreenSelected: Story = {
  args: {
    selectedColor: WidgetColor.GREEN,
    onSelectColor: (color: WidgetColor) => {
      console.log("Selected color:", color);
    },
  },
};

export const WithBlackSelected: Story = {
  args: {
    selectedColor: WidgetColor.BLACK,
    onSelectColor: (color: WidgetColor) => {
      console.log("Selected color:", color);
    },
  },
};

export const WithBlueSelected: Story = {
  args: {
    selectedColor: WidgetColor.BLUE,
    onSelectColor: (color: WidgetColor) => {
      console.log("Selected color:", color);
    },
  },
};

export const WithWhiteSelected: Story = {
  args: {
    selectedColor: WidgetColor.WHITE,
    onSelectColor: (color: WidgetColor) => {
      console.log("Selected color:", color);
    },
  },
};
