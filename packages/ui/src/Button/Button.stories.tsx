import { Button } from "./Button";

import type { Args, Meta, StoryObj } from "@storybook/react-vite";
import type { ButtonProps } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button",
  } as ButtonProps,
  render: (args: Args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Button {...args} variant="primary">
        Primary
      </Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      <Button {...args} variant="inverted">
        Inverted
      </Button>
      <Button {...args} variant="text">
        Text
      </Button>
      <Button {...args} variant="critical">
        Critical
      </Button>
      <Button {...args} variant="success">
        Success
      </Button>
    </div>
  ),
};
