import MuiTypography from "@mui/material/Typography";
import type { TypographyProps as MuiTypographyProps } from "@mui/material/Typography";
import React from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    body: React.CSSProperties;
    "body-semibold": React.CSSProperties;
    hint: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body?: React.CSSProperties;
    "body-semibold"?: React.CSSProperties;
    hint?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body: true;
    "body-semibold": true;
    hint: true;
    body1: false;
    body2: false;
    button: false;
    overline: false;
    subtitle1: false;
    subtitle2: false;
    caption: false;
  }
}

export type TypographyProps = MuiTypographyProps;

export const Typography: React.FC<TypographyProps> = (props) => {
  return <MuiTypography {...props} />;
};
