import { Box, CircularProgress } from "@mui/material";
import { Avatar, type AvatarProps, type AvatarSize } from "./Avatar";
import { EditIcon } from "../internal/icons";
import { Color, ColorDynamic } from "../color";

export type EditableAvatarProps<RootComponent extends React.ElementType> =
  AvatarProps<RootComponent> & {
    isLoading?: boolean;
    onEdit: () => void;
  };

const sizeToIconFontSize: Record<AvatarSize, number> = {
  small: 16,
  medium: 24,
  large: 24,
};

const sizeToMobileIconFontSize: Record<AvatarSize, number> = {
  small: 24,
  medium: 24,
  large: 24,
};

export function EditableAvatar<
  RootComponent extends React.ElementType = "div"
>({
  isLoading = false,
  onEdit,
  size = "medium",
  className,
  ...avatarProps
}: EditableAvatarProps<RootComponent>) {
  return (
    <Box
      component="button"
      disabled={isLoading}
      sx={{
        position: "relative",
        background: "none",
        padding: 0,
        border: "none",
        cursor: isLoading ? "default" : "pointer",
        outline: "none",

        "&:hover, &:focus-visible": {
          ".EditableAvatar-overlay": {
            opacity: 1,
          },
        },

        ...(isLoading && {
          "& > .MuiAvatar-root": {
            color: ColorDynamic.Dark100,
            backgroundColor: ColorDynamic.Silver400,
          },

          ".MuiAvatar-img": {
            opacity: 0.3,
          },
        }),
      }}
      onClick={onEdit}
      className={className}
    >
      {!isLoading && (
        <Box
          className="EditableAvatar-overlay"
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0,

            "&:before": {
              content: '""',
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              backgroundColor: ColorDynamic.Dark500,
              opacity: 0.5,
              zIndex: 1,
            },
          }}
        >
          <EditIcon
            sx={(theme) => ({
              fontSize: sizeToIconFontSize[size],
              color: Color.White,
              zIndex: 2,

              [theme.breakpoints.only("xs")]: {
                fontSize: sizeToMobileIconFontSize[size],
              },
            })}
          />
        </Box>
      )}

      {isLoading && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            color: ColorDynamic.Blue500,
          }}
        >
          <CircularProgress size="100%" thickness={2} color="inherit" />
        </Box>
      )}

      <Avatar {...avatarProps} size={size} />
    </Box>
  );
}
