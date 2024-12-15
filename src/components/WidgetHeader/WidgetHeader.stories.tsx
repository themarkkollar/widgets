import type { Meta, StoryObj } from "@storybook/react";
import WidgetHeader from "./WidgetHeader";
import {
  IWidget,
  WidgetAction,
  WidgetColor,
  WidgetType,
} from "../../types/widget.interface";

const meta = {
  title: "Components/WidgetHeader",
  component: WidgetHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof WidgetHeader>;

export default meta;
type Story = StoryObj<typeof WidgetHeader>;

const baseWidget: IWidget = {
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
    widget: baseWidget,
  },
};

export const GreenPlantsTrees: Story = {
  args: {
    widget: {
      ...baseWidget,
      type: WidgetType.TREES,
      action: WidgetAction.PLANTS,
      selectedColor: WidgetColor.GREEN,
      amount: 10,
    },
  },
};

export const BeigeCollectsPlastic: Story = {
  args: {
    widget: {
      ...baseWidget,
      type: WidgetType.PLASTIC_BOTTLES,
      action: WidgetAction.COLLECTS,
      selectedColor: WidgetColor.BEIGE,
      amount: 50,
    },
  },
};

export const BlackOffsetsCarbon: Story = {
  args: {
    widget: {
      ...baseWidget,
      type: WidgetType.CARBON,
      action: WidgetAction.OFFSETS,
      selectedColor: WidgetColor.BLACK,
      amount: 200,
    },
  },
};
