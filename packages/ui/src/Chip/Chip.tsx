import { Box } from "@mui/material";
import type { ComponentPropsWithoutRef } from "react";
import { Typography } from "../Typography";
import { CloseIcon } from "../internal/icons";
import { ColorDynamic } from "../color";

export type ChipProps<C extends React.ElementType = "div"> =
  ComponentPropsWithoutRef<C> & {
    label: string;
    icon?: React.ReactNode;
    onDismiss?: () => void;
  };

export function Chip<C extends React.ElementType = "div">(props: ChipProps<C>) {
  const { label, icon, onDismiss, ...rest } = props;

  return (
    <Box
      {...rest}
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",
        backgroundColor: ColorDynamic.Silver200,
        borderRadius: "4px",
        gap: 0.5,
        height: "22px",
        paddingLeft: theme.spacing(0.5),
        paddingRight: theme.spacing(0.5),

        [theme.breakpoints.only("xs")]: {
          height: "26px",
        },
      })}
    >
      {icon && (
        <Box
          sx={(theme) => ({
            fontSize: 14,
            display: "flex",
            color: ColorDynamic.Dark100,

            "& > svg": {
              fontSize: "inherit",
            },

            [theme.breakpoints.only("xs")]: {
              fontSize: 16,
            },
          })}
        >
          {icon}
        </Box>
      )}
      <Typography variant="body">{label}</Typography>
      {onDismiss && (
        <Box
          component="button"
          sx={(theme) => ({
            width: 22,
            height: 22,
            fontSize: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
            marginLeft: theme.spacing(-0.5),
            marginRight: theme.spacing(-0.5),
            color: ColorDynamic.Dark100,

            [theme.breakpoints.only("xs")]: {
              fontSize: 16,
              width: 26,
              height: 26,
            },
          })}
          onClick={onDismiss}
        >
          <CloseIcon fontSize="inherit" />
        </Box>
      )}
    </Box>
  );
}
