import type { Meta, StoryObj } from "@storybook/react";
import WidgetList from "./WidgetList";
import {
  IWidget,
  WidgetAction,
  WidgetColor,
  WidgetType,
} from "../../types/widget.interface";

const meta = {
  title: "Components/WidgetList",
  component: WidgetList,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof WidgetList>;

export default meta;
type Story = StoryObj<typeof WidgetList>;

const mockWidgets: IWidget[] = [
  {
    id: 1,
    type: WidgetType.CARBON,
    amount: 100,
    action: WidgetAction.OFFSETS,
    active: true,
    linked: true,
    selectedColor: WidgetColor.BLUE,
  },
  {
    id: 2,
    type: WidgetType.TREES,
    amount: 10,
    action: WidgetAction.PLANTS,
    active: true,
    linked: false,
    selectedColor: WidgetColor.GREEN,
  },
  {
    id: 3,
    type: WidgetType.PLASTIC_BOTTLES,
    amount: 50,
    action: WidgetAction.COLLECTS,
    active: false,
    linked: true,
    selectedColor: WidgetColor.BEIGE,
  },
];

export const Default: Story = {
  args: {
    widgets: mockWidgets,
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
