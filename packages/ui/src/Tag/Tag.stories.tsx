import { Box } from "@mui/material";
import { Tag, type TagProps } from "./Tag";
import { TAG_COLORS, TAG_VARIANTS } from "./constants";
import type { StoryFn, Meta } from "@storybook/react-vite";
import { CheckmarkIcon } from "../internal/icons";

type Args = Omit<TagProps, "startIcon" | "endIcon"> & {
  startIcon?: boolean;
  endIcon?: boolean;
};

const meta: Meta<Args> = {
  title: "Components/Tag",
  component: Tag,
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: TAG_COLORS,
    },
    variant: {
      control: {
        type: "select",
      },
      options: TAG_VARIANTS,
    },
    startIcon: {
      control: {
        type: "boolean",
      },
    },
    endIcon: {
      control: {
        type: "boolean",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

function TagRenderer(args: Args) {
  return (
    <Tag
      {...args}
      startIcon={args.startIcon ? <CheckmarkIcon /> : undefined}
      endIcon={args.endIcon ? <CheckmarkIcon /> : undefined}
    />
  );
}

const Template: StoryFn<Args> = (args) => <TagRenderer {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Text",
  startIcon: false,
  endIcon: false,
};

const AllVariantsAndColorsTemplate: StoryFn<Omit<Args, "variant" | "color">> = (
  args
) => (
  <>
    {TAG_VARIANTS.map((variant) => (
      <Box
        key={variant}
        sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
      >
        {TAG_COLORS.map((color) => (
          <Box key={color} sx={{ display: "flex", justifyContent: "center" }}>
            <TagRenderer {...args} color={color} variant={variant} />
          </Box>
        ))}
      </Box>
    ))}
  </>
);

export const AllVariantsAndColors = AllVariantsAndColorsTemplate.bind({});

AllVariantsAndColors.args = {
  label: "Text",
  startIcon: false,
  endIcon: false,
};

AllVariantsAndColors.parameters = {
  controls: {
    exclude: ["variant", "color"],
  },
};
