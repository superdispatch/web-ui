import type { StoryFn, Meta } from "@storybook/react-vite";
import { CheckmarkIcon } from "../internal/icons";
import { Chip, type ChipProps } from "./Chip";

type Args = Omit<ChipProps, "icon"> & {
  icon?: boolean;
  isDismissable?: boolean;
};

const meta: Meta<Args> = {
  title: "Components/Chip",
  component: Chip,
  argTypes: {
    icon: {
      control: {
        type: "boolean",
      },
    },
    isDismissable: {
      control: {
        type: "boolean",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

function ChipRenderer(args: Args) {
  return (
    <Chip
      {...args}
      icon={args.icon ? <CheckmarkIcon /> : undefined}
      onDismiss={args.isDismissable ? () => {} : undefined}
    />
  );
}

const Template: StoryFn<Args> = (args) => <ChipRenderer {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Text",
  icon: false,
  isDismissable: false,
};
