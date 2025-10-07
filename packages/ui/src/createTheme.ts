import { type ColorSystemOptions } from "@mui/material";
import { createTheme as createMuiTheme } from "@mui/material/styles";
import { Color, ColorDark } from "./color";
import { createTypographyOptions } from "./Typography/typographyOptions";

export function createTheme() {
  const basicTheme = createMuiTheme();

  const theme = createMuiTheme({
    colorSchemes: {
      light: {
        palette: createPalette("light"),
      },
      dark: {
        palette: createPalette("dark"),
      },
    },
    cssVariables: {
      colorSchemeSelector: ".sd-theme-%s",
    },
    typography: createTypographyOptions(basicTheme.breakpoints),
  });

  return theme;
}

function createPalette(
  colorScheme: "light" | "dark"
): ColorSystemOptions["palette"] {
  const color = colorScheme === "light" ? Color : ColorDark;

  return {
    primary: {
      main: color.Blue300,
    },
    error: {
      main: color.Red300,
    },
    action: {
      hover: color.Silver200,
      selected: color.Blue50,
      disabled: color.Silver400,
    },
    text: {
      primary: color.Dark500,
      secondary: color.Dark300,
      disabled: color.Dark100,
    },
    common: {
      white: color.White,
      black: color.Black,
    },
    divider: color.Silver400,
    background: {
      paper: color.White,
    },
  };
}
