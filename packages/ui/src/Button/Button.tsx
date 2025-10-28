import ButtonBase from "@mui/material/ButtonBase";
import CircularProgress from "@mui/material/CircularProgress";
import React, { type ComponentPropsWithoutRef } from "react";
import { ColorDynamic } from "../color";
import type { BUTTON_VARIANTS, BUTTON_SIZES } from "./constants";
import { Box } from "@mui/material";
import { Typography } from "../Typography";

export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];
export type ButtonSize = (typeof BUTTON_SIZES)[number];

const commonButtonBaseStyle = {
  gap: "4px",
  borderRadius: "4px",
  minWidth: "32px",
  lineHeight: "22px",

  outlineWidth: "2px",
  outlineStyle: "solid",
  outlineColor: "transparent",

  "&:disabled": {
    opacity: 0.3,
    pointerEvents: "none",
  },
};

const sizeStyleMap: Record<ButtonSize, object> = {
  small: {
    padding: "4px 24px",
  },
  medium: {
    padding: "8px 24px",
  },
  large: {
    padding: "14px 64px",
  },
};

const sizeBreakpointStyleMap: Record<ButtonSize, object> = {
  small: {
    height: "26px",
    padding: "2px 16px",
  },
  medium: {
    height: "32px",
    padding: "5px 16px",
  },
  large: {
    height: "40px",
    padding: "8px 32px",
  },
};

const buttonStyleMap: Record<ButtonVariant, React.CSSProperties | object> = {
  critical: {
    backgroundColor: ColorDynamic.Red50,
    color: ColorDynamic.Red500,
    border: `1px solid ${ColorDynamic.Red500}`,
    "&:hover": {
      backgroundColor: ColorDynamic.Red30,
    },
    "&:focus-visible": {
      outlineColor: ColorDynamic.Red30,
    },
  },
  text: {
    color: ColorDynamic.Blue500,
    backgroundColor: ColorDynamic.Transparent,
    "&:hover": {
      backgroundColor: ColorDynamic.Blue50,
    },
    "&:focus-visible": {
      backgroundColor: ColorDynamic.Blue50,
      outlineColor: ColorDynamic.Blue30,
    },
  },
  success: {
    backgroundColor: ColorDynamic.Green300,
    color: "#fff",
    "&:hover": {
      backgroundColor: ColorDynamic.Green500,
    },
    "&:focus-visible": {
      outlineColor: ColorDynamic.Green30,
    },
  },
  inverted: {
    backgroundColor: ColorDynamic.Dark300,
    color: "#fff",
    "&:hover": {
      backgroundColor: ColorDynamic.Dark100,
    },
    "&:disabled": {
      backgroundColor: "#2B3544",
      color: "#959AA1",
      opacity: 1,
    },
    "&:focus-visible": {
      outlineColor: ColorDynamic.Dark30,
    },
  },
  secondary: {
    backgroundColor: ColorDynamic.White,
    color: ColorDynamic.Dark500,
    border: `1px solid ${ColorDynamic.Silver500}`,
    "&:hover": {
      backgroundColor: ColorDynamic.Blue50,
      color: ColorDynamic.Blue500,
      border: `1px solid ${ColorDynamic.Blue500}`,
    },
    "&:focus-visible": {
      outlineColor: ColorDynamic.Blue30,
    },
  },
  primary: {
    backgroundColor: ColorDynamic.Blue300,
    color: "#fff",
    "&:hover": {
      backgroundColor: ColorDynamic.Blue500,
    },
    "&:focus-visible": {
      outlineColor: ColorDynamic.Blue30,
    },
  },
};

const iconSizeMap: Record<ButtonSize, number> = {
  small: 18,
  medium: 20,
  large: 22,
};

export type ButtonProps<Component extends React.ElementType = "button"> =
  ComponentPropsWithoutRef<Component> & {
    children?: React.ReactNode;
    disabled?: boolean;
    loading?: boolean;
    variant?: ButtonVariant;
    size?: ButtonSize;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    component?: Component;
  };

export function Button<Component extends React.ElementType = "button">(
  props: ButtonProps<Component>,
) {
  const {
    children,
    component,
    disabled = false,
    loading = false,
    variant = "primary",
    size = "medium",
    startIcon,
    endIcon,
    ...rest
  } = props;

  const renderIcon = (icon: React.ReactNode) => (
    <Box
      sx={{
        display: "flex",
        "& svg": {
          fontSize: iconSizeMap[size],
        },
      }}
    >
      {icon}
    </Box>
  );

  return (
    <ButtonBase
      {...rest}
      component={component}
      disabled={disabled || loading}
      disableRipple={true}
      disableTouchRipple={true}
      sx={(theme) => ({
        ...commonButtonBaseStyle,
        ...sizeStyleMap[size],
        ...buttonStyleMap[variant],
        [theme.breakpoints.up("sm")]: {
          ...sizeBreakpointStyleMap[size],
        },
      })}
    >
      <Box
        sx={{
          visibility: loading ? "hidden" : "visible",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          gap: "4px",
        }}
      >
        {startIcon && renderIcon(startIcon)}
        {size === "large" ? (
          <Box
            component="span"
            sx={(theme) => ({
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "28px",
              [theme.breakpoints.down("sm")]: {
                fontSize: "18px",
              },
            })}
          >
            {children}
          </Box>
        ) : (
          <Typography component="span" variant="body-semibold">
            {children}
          </Typography>
        )}
        {endIcon && renderIcon(endIcon)}
      </Box>
      {loading && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress size={iconSizeMap[size]} color="inherit" />
        </Box>
      )}
    </ButtonBase>
  );
}
