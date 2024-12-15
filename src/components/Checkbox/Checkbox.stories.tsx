import type { StoryFn } from "@storybook/react";
import Checkbox, { CheckboxProps } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
};

const Template: StoryFn<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  isChecked: false,
  onChange: () => {},
};

export const Checked = Template.bind({});
Checked.args = {
  isChecked: true,
  onChange: () => {},
};
