import ButtonBase from "@mui/material/ButtonBase";
import React from "react";
import { ColorDynamic } from "../color";
import type { ButtonVariant } from "./constants";

const commonButtonStyle = {
  padding: "6px 16px",
  borderRadius: "4px",
  minWidth: "32px",
  fontSize: "14px",
  fontWeight: 600,
  textTransform: "none",
  fontFamily: "Inter",
  fontStyle: "normal",
  lineHeight: "22px",
};

const buttonStyleMap: Record<ButtonVariant, React.CSSProperties | object> = {
  critical: {
    ...commonButtonStyle,
  },
  text: {
    ...commonButtonStyle,
  },
  success: {
    ...commonButtonStyle,
  },
  inverted: {
    ...commonButtonStyle,
  },
  secondary: {
    ...commonButtonStyle,
  },
  primary: {
    ...commonButtonStyle,
    backgroundColor: ColorDynamic.Blue300,
    color: "#fff",
    "&:hover": {
      opacity: 0.7,
    },
  },
};

function getButtonStyle(variant?: ButtonVariant) {
  return buttonStyleMap[variant ?? "primary"];
}

export interface ButtonProps {
  children?: React.ReactNode;
  variant?: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { variant, ...rest } = props;
  const buttonStyle = getButtonStyle(variant);

  return (
    <ButtonBase {...rest} sx={{ ...buttonStyle }}>
      {props.children}
    </ButtonBase>
  );
};
