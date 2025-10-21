import { Radio } from "./Radio";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: "Label",
    description: "Description text",
    value: "a",
  },
};
