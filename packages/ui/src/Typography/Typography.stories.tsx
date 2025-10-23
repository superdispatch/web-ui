import { COLOR_VARIANTS } from "./constants";
import { Typography } from "./Typography";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  argTypes: {
    children: {
      control: "text",
    },
    color: {
      control: "select",
      options: COLOR_VARIANTS,
    },
  },
  parameters: {
    controls: {
      exclude: ["component"],
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: "Typography",
    color: "primary",
  },
  render: (args) => <Typography {...args} />,
};

export const Showcase: Story = {
  args: {
    children: "Typography",
  },
  parameters: {
    controls: {
      exclude: ["children", "variant"],
    },
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Typography variant="header1" color={args.color}>
        Heading 1
      </Typography>
      <Typography variant="header2" color={args.color}>
        Heading 2
      </Typography>
      <Typography variant="header3" color={args.color}>
        Heading 3
      </Typography>
      <Typography variant="header4" color={args.color}>
        Heading 4
      </Typography>
      <Typography variant="header5" color={args.color}>
        Heading 5
      </Typography>
      <Typography variant="header6" color={args.color}>
        Heading 6
      </Typography>
      <Typography variant="body" color={args.color}>
        Body
      </Typography>
      <Typography variant="body-semibold" color={args.color}>
        Body-semibold
      </Typography>
      <Typography variant="hint" color={args.color}>
        Hint
      </Typography>
    </div>
  ),
};
