import { Radio } from "./Radio";
import { RadioGroup } from "./RadioGroup";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    name: "group",
  },
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="a" label="Option 1" />
      <Radio value="b" label="Option 2" />
      <Radio value="c" label="Option 3" />
    </RadioGroup>
  ),
};
