import type { Meta, StoryObj } from "@storybook/react";
import WidgetCard from "./WidgetCard";
import {
  IWidget,
  WidgetAction,
  WidgetColor,
  WidgetType,
} from "../../types/widget.interface";

const meta = {
  title: "Components/WidgetCard",
  component: WidgetCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof WidgetCard>;

export default meta;
type Story = StoryObj<typeof WidgetCard>;

const mockWidget: IWidget = {
  id: 1,
  type: WidgetType.CARBON,
  amount: 100,
  action: WidgetAction.OFFSETS,
  active: true,
  linked: true,
  selectedColor: WidgetColor.BLUE,
};

export const Default: Story = {
  args: {
    widget: mockWidget,
    onToggleActive: (id: number, active: boolean) => {
      console.log("Toggle active:", { id, active });
    },
    onToggleLinked: (id: number, linked: boolean) => {
      console.log("Toggle linked:", { id, linked });
    },
    onSelectColor: (id: number, color: WidgetColor) => {
      console.log("Color selected:", { id, color });
    },
  },
};

export const Inactive: Story = {
  args: {
    widget: {
      ...mockWidget,
      active: false,
    },
    onToggleActive: (id: number, active: boolean) => {
      console.log("Toggle active:", { id, active });
    },
    onToggleLinked: (id: number, linked: boolean) => {
      console.log("Toggle linked:", { id, linked });
    },
    onSelectColor: (id: number, color: WidgetColor) => {
      console.log("Color selected:", { id, color });
    },
  },
};

export const Unlinked: Story = {
  args: {
    widget: {
      ...mockWidget,
      linked: false,
    },
    onToggleActive: (id: number, active: boolean) => {
      console.log("Toggle active:", { id, active });
    },
    onToggleLinked: (id: number, linked: boolean) => {
      console.log("Toggle linked:", { id, linked });
    },
    onSelectColor: (id: number, color: WidgetColor) => {
      console.log("Color selected:", { id, color });
    },
  },
};
