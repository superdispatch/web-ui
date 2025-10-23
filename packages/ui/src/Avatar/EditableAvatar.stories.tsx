import type { StoryFn, Meta } from "@storybook/react-vite";

import { EditableAvatar, type EditableAvatarProps } from "./EditableAvatar";

import testImage from "./test-image.webp";

const CONTENT_TYPES = ["img", "initials"];

type Args = Omit<EditableAvatarProps<"div">, "icon" | "initials"> & {
  contentType: (typeof CONTENT_TYPES)[number];
};

const meta: Meta<Args> = {
  title: "Components/Avatar/Editable",
  component: EditableAvatar,
  parameters: {
    controls: {
      exclude: ["icon", "initials", "onEdit"],
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

function EditableAvatarRenderer(args: Args) {
  return (
    <EditableAvatar
      {...args}
      src={args.contentType === "img" ? testImage : undefined}
      initials={args.contentType === "initials" ? "AB" : undefined}
    />
  );
}

const Template: StoryFn<Args> = (args) => <EditableAvatarRenderer {...args} />;

export const Default = Template.bind({});

Default.args = {
  size: "medium",
  contentType: "img",
};
