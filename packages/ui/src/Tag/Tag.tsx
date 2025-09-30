import { Box } from "@mui/material";
import { ColorDynamic } from "../color";
import { Typography } from "../Typography";
import type { TAG_COLORS, TAG_VARIANTS } from "./constants";

export type TagColor = (typeof TAG_COLORS)[number];
export type TagVariant = (typeof TAG_VARIANTS)[number];

export interface TagProps {
  label: string;
  color?: TagColor;
  variant?: TagVariant;
  isBold?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const variantToColorMap: Record<
  TagVariant,
  Record<
    TagColor,
    {
      color: string;
      backgroundColor: string;
    }
  >
> = {
  filled: {
    blue: {
      color: ColorDynamic.White,
      backgroundColor: ColorDynamic.Blue300,
    },
    teal: {
      color: ColorDynamic.White,
      backgroundColor: ColorDynamic.Teal300,
    },
    gray: {
      color: ColorDynamic.White,
      backgroundColor: ColorDynamic.Dark300,
    },
    green: {
      color: ColorDynamic.White,
      backgroundColor: ColorDynamic.Green300,
    },
    purple: {
      color: ColorDynamic.White,
      backgroundColor: ColorDynamic.Purple300,
    },
    red: {
      color: ColorDynamic.White,
      backgroundColor: ColorDynamic.Red300,
    },
    yellow: {
      color: ColorDynamic.White,
      backgroundColor: ColorDynamic.Yellow300,
    },
  },
  subtle: {
    blue: {
      color: ColorDynamic.Blue500,
      backgroundColor: ColorDynamic.Blue50,
    },
    teal: {
      color: ColorDynamic.Teal500,
      backgroundColor: ColorDynamic.Teal50,
    },
    gray: {
      color: ColorDynamic.Dark300,
      backgroundColor: ColorDynamic.Silver200,
    },
    green: {
      color: ColorDynamic.Green500,
      backgroundColor: ColorDynamic.Green50,
    },
    purple: {
      color: ColorDynamic.Purple500,
      backgroundColor: ColorDynamic.Purple50,
    },
    red: {
      color: ColorDynamic.Red500,
      backgroundColor: ColorDynamic.Red50,
    },
    yellow: {
      color: ColorDynamic.Yellow500,
      backgroundColor: ColorDynamic.Yellow50,
    },
  },
};

export function Tag({
  label,
  variant = "subtle",
  color = "blue",
  isBold = true,
  startIcon,
  endIcon,
}: TagProps) {
  const colorMap = variantToColorMap[variant][color];

  return (
    <Box
      sx={(theme) => ({
        color: colorMap.color,
        backgroundColor: colorMap.backgroundColor,
        borderRadius: "4px",
        height: "22px",
        paddingLeft: theme.spacing(0.5),
        paddingRight: theme.spacing(0.5),
        display: "inline-flex",
        flexWrap: "nowrap",
        whiteSpace: "nowrap",
        alignItems: "center",
        gap: theme.spacing(0.5),

        [theme.breakpoints.only("xs")]: {
          height: "26px",
        },
      })}
    >
      {startIcon && <TagIcon>{startIcon}</TagIcon>}

      <Typography variant={isBold ? "body-semibold" : "body"}>
        {label}
      </Typography>

      {endIcon && <TagIcon>{endIcon}</TagIcon>}
    </Box>
  );
}

function TagIcon({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="span"
      sx={{ display: "inherit", "& > :nth-of-type(1)": { fontSize: "16px" } }}
    >
      {children}
    </Box>
  );
}
