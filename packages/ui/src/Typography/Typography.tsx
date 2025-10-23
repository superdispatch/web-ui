import { Box } from "@mui/material";
import React, { type ComponentPropsWithoutRef } from "react";
import { getTypographyColor, type TypographyColor } from "./constants";

export type TypographyVariant =
  | "header1"
  | "header2"
  | "header3"
  | "header4"
  | "header5"
  | "header6"
  | "body"
  | "body-semibold"
  | "hint";

const variantToSemanticElementMap: Record<
  TypographyVariant,
  React.ElementType
> = {
  header1: "h1",
  header2: "h2",
  header3: "h3",
  header4: "h4",
  header5: "h5",
  header6: "h6",
  body: "p",
  "body-semibold": "p",
  hint: "span",
};

export type TypographyProps<Component extends React.ElementType> =
  ComponentPropsWithoutRef<Component> & {
    variant: TypographyVariant;
    children?: React.ReactNode;
    component?: Component;
    color?: TypographyColor;
  };

export function Typography<Component extends React.ElementType = "div">(
  props: TypographyProps<Component>
) {
  const {
    variant,
    children,
    color = "inherit",
    component = variantToSemanticElementMap[variant],
    ...rest
  } = props;

  return (
    <Box
      {...rest}
      component={component}
      sx={(theme) => ({
        fontFamily: '"Inter", sans-serif',
        color: getTypographyColor(color),
        marginTop: 0,
        marginBottom: 0,

        ...(variant === "header1" && {
          fontSize: "32px",
          lineHeight: "40px",
          fontWeight: 700,
          [theme.breakpoints.only("xs")]: {
            fontSize: "28px",
            lineHeight: "36px",
          },
        }),
        ...(variant === "header2" && {
          fontSize: "24px",
          lineHeight: "28px",
          fontWeight: 500,
          [theme.breakpoints.only("xs")]: {
            fontSize: "22px",
            lineHeight: "26px",
          },
        }),
        ...(variant === "header3" && {
          fontSize: "20px",
          lineHeight: "28px",
          fontWeight: 500,
          [theme.breakpoints.only("xs")]: {
            fontSize: "20px",
            lineHeight: "26px",
          },
        }),
        ...(variant === "header4" && {
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: 500,
          [theme.breakpoints.only("xs")]: {
            fontSize: "17px",
            lineHeight: "26px",
          },
        }),
        ...(variant === "header5" && {
          fontSize: "14px",
          lineHeight: "22px",
          fontWeight: 600,
          [theme.breakpoints.only("xs")]: {
            fontSize: "16px",
            lineHeight: "26px",
          },
        }),
        ...(variant === "header6" && {
          fontSize: "12px",
          lineHeight: "16px",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          [theme.breakpoints.only("xs")]: {
            fontSize: "14px",
            lineHeight: "20px",
          },
        }),
        ...(variant === "body" && {
          fontSize: "14px",
          lineHeight: "22px",
          fontWeight: 400,
          [theme.breakpoints.only("xs")]: {
            fontSize: "16px",
            lineHeight: "26px",
          },
        }),
        ...(variant === "body-semibold" && {
          fontSize: "14px",
          lineHeight: "22px",
          fontWeight: 600,
          [theme.breakpoints.only("xs")]: {
            fontSize: "16px",
            lineHeight: "26px",
          },
        }),
        ...(variant === "hint" && {
          fontSize: "12px",
          lineHeight: "18px",
          fontWeight: 400,
          [theme.breakpoints.only("xs")]: {
            fontSize: "14px",
            lineHeight: "20px",
          },
        }),
      })}
    >
      {children}
    </Box>
  );
}
