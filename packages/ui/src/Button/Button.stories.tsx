import { Button } from "./Button";

import type { Args, Meta, StoryObj } from "@storybook/react-vite";
import type { ButtonProps } from "./Button";
import { CheckmarkIcon } from "../internal/icons";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "./constants";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: BUTTON_VARIANTS,
    },
    size: {
      control: { type: "select" },
      options: BUTTON_SIZES,
    },
    children: {
      control: { type: "text" },
    },
    startIcon: {
      control: { type: "boolean" },
    },
    endIcon: {
      control: { type: "boolean" },
    },
    component: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "medium",
    disabled: false,
    loading: false,
    startIcon: false,
    endIcon: false,
  } as ButtonProps,
  render: (args: Args) => {
    const { startIcon, endIcon, ...rest } = args;

    return (
      <Button
        {...rest}
        startIcon={startIcon ? <CheckmarkIcon /> : undefined}
        endIcon={endIcon ? <CheckmarkIcon /> : undefined}
      />
    );
  },
};
