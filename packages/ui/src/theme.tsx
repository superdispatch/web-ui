import { CssBaseline, type ColorSystemOptions } from "@mui/material";
import {
  createTheme as createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import type { ReactNode } from "react";
import { ThemeCssVariables } from "./ThemeCssVariables";
import { Color, ColorDark } from "./color";

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

function createTheme() {
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
  });

  return theme;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = createTheme();

  return (
    <MuiThemeProvider
      theme={theme}
      modeStorageKey="sd-theme-mode"
      colorSchemeStorageKey="sd-theme-color-scheme"
    >
      <CssBaseline>
        <ThemeCssVariables />
        {children}
      </CssBaseline>
    </MuiThemeProvider>
  );
}
