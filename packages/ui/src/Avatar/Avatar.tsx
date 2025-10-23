import {
  Avatar as MuiAvatar,
  type AvatarProps as MuiAvatarProps,
} from "@mui/material";
import { Typography, type TypographyProps } from "../Typography";
import { ColorDynamic } from "../color";

export type AvatarSize = "small" | "medium" | "large";

export type AvatarProps<RootComponent extends React.ElementType> = Omit<
  MuiAvatarProps<RootComponent>,
  "imgProps" | "variant" | "sx"
> & {
  size?: AvatarSize;
  initials?: string;
};

const sizeToTypographyVariant: Record<
  AvatarSize,
  TypographyProps<"p">["variant"]
> = {
  small: "body-semibold",
  medium: "header5",
  large: "header2",
};

export function Avatar<RootComponent extends React.ElementType = "div">({
  size = "medium",
  initials,
  ...restProps
}: AvatarProps<RootComponent>) {
  return (
    <MuiAvatar
      {...restProps}
      sx={(theme) => ({
        width: 48,
        height: 48,
        backgroundColor: ColorDynamic.Silver400,
        color: ColorDynamic.Dark300,

        ...(size === "small" && {
          width: 32,
          height: 32,

          [theme.breakpoints.only("xs")]: {
            width: 40,
            height: 40,
          },
        }),

        ...(size === "large" && {
          width: 64,
          height: 64,

          [theme.breakpoints.only("xs")]: {
            width: 56,
            height: 56,
          },
        }),
      })}
    >
      {initials && (
        <Typography variant={sizeToTypographyVariant[size]}>
          {initials}
        </Typography>
      )}
    </MuiAvatar>
  );
}
