import { Box } from "@mui/material";
import type { ComponentPropsWithoutRef } from "react";
import { Typography } from "../Typography";
import { CloseIcon } from "../internal/icons";
import { ColorDynamic } from "../color";

export type ChipProps<Component extends React.ElementType> =
  ComponentPropsWithoutRef<Component> & {
    label: string;
    icon?: React.ReactNode;
    disabled?: boolean;
    onDismiss?: () => void;
    onClick?: () => void;
    component?: Component;
  };

export function Chip<Component extends React.ElementType = "div">(
  props: ChipProps<Component>
) {
  const {
    label,
    icon,
    onDismiss,
    onClick,
    disabled = false,
    component,
    ...rest
  } = props;

  return (
    <Box
      {...rest}
      component={component ?? onClick ? "button" : "div"}
      disabled={disabled}
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",
        backgroundColor: ColorDynamic.Silver200,
        borderRadius: "4px",
        gap: 0.5,
        height: "22px",
        paddingLeft: theme.spacing(0.5),
        paddingRight: theme.spacing(0.5),
        outline: "none",
        border: "none",
        cursor: onClick ? "pointer" : "default",

        ...(onClick &&
          !disabled && {
            "&:hover": {
              backgroundColor: ColorDynamic.Silver400,
            },
          }),

        "&:focus-visible": {
          outline: `2px solid ${ColorDynamic.Dark100}`,
        },

        "&:disabled": {
          color: ColorDynamic.Dark100,
          cursor: "default",
          backgroundColor: ColorDynamic.Silver200,
        },

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
            borderRadius: "inherit",

            "&:focus-visible": {
              outline: `2px solid ${ColorDynamic.Dark100}`,
            },

            [theme.breakpoints.only("xs")]: {
              fontSize: 16,
              width: 26,
              height: 26,
            },
          })}
          onClick={(e) => {
            e.stopPropagation();
            onDismiss?.();
          }}
        >
          <CloseIcon fontSize="inherit" />
        </Box>
      )}
    </Box>
  );
}
