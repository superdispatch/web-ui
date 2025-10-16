import type { StoryFn, Meta } from "@storybook/react-vite";
import { Avatar, type AvatarProps } from "./Avatar";

const CONTENT_TYPES = ["img", "initials"];

type Args = Omit<AvatarProps<"div">, "icon" | "initials"> & {
  contentType: (typeof CONTENT_TYPES)[number];
};

const meta: Meta<Args> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    controls: {
      exclude: ["icon", "initials"],
    },
  },
  argTypes: {
    contentType: {
      control: {
        type: "radio",
      },
      options: CONTENT_TYPES,
    },
  },
  tags: ["autodocs"],
};

export default meta;

function AvatarRenderer(args: Args) {
  return (
    <Avatar
      {...args}
      src={
        args.contentType === "img" ? "https://picsum.photos/200/300" : undefined
      }
      initials={args.contentType === "initials" ? "AB" : undefined}
    />
  );
}

const Template: StoryFn<Args> = (args) => <AvatarRenderer {...args} />;

export const Default = Template.bind({});

Default.args = {
  size: "medium",
  contentType: "img",
};
