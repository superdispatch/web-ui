import type {
  Breakpoints,
  TypographyVariantsOptions,
} from "@mui/material/styles";

export function createTypographyOptions(
  breakpoints: Breakpoints,
): TypographyVariantsOptions {
  const xsOnly = breakpoints.only("xs");

  return {
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    fontFamily: '"Inter", sans-serif',

    h1: {
      fontSize: "32px",
      lineHeight: "40px",
      fontWeight: 700,
      [xsOnly]: {
        fontSize: "28px",
        lineHeight: "36px",
      },
    },

    h2: {
      fontSize: "24px",
      lineHeight: "28px",
      fontWeight: 500,
      [xsOnly]: {
        fontSize: "22px",
        lineHeight: "26px",
      },
    },

    h3: {
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: 500,
      [xsOnly]: {
        fontSize: "20px",
        lineHeight: "26px",
      },
    },

    h4: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 500,
      [xsOnly]: {
        fontSize: "17px",
        lineHeight: "26px",
      },
    },

    h5: {
      fontSize: "14px",
      lineHeight: "22px",
      fontWeight: 600,
      [xsOnly]: {
        fontSize: "16px",
        lineHeight: "26px",
      },
    },

    h6: {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      [xsOnly]: {
        fontSize: "14px",
        lineHeight: "20px",
      },
    },

    body: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 600,
      [xsOnly]: {
        fontSize: "16px",
        lineHeight: "26px",
      },
    },

    "body-semibold": {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 400,
      [xsOnly]: {
        fontSize: "16px",
        lineHeight: "26px",
      },
    },

    hint: {
      fontSize: "12px",
      lineHeight: "18px",
      fontWeight: 400,
      [xsOnly]: {
        fontSize: "14px",
        lineHeight: "20px",
      },
    },

    body1: undefined,
    body2: undefined,
    button: undefined,
    overline: undefined,
    subtitle1: undefined,
    subtitle2: undefined,
    caption: undefined,
  };
}
