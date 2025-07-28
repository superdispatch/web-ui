import { CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import type { ReactNode } from "react";
import { createCssColorVariables } from "./createCssColorVariables";
import { createTheme } from "./createTheme";

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

export function ThemeCssVariables() {
  return (
    <GlobalStyles
      styles={{
        ":root, .sd-theme-light": {
          colorScheme: "light",
          ...createCssColorVariables("light"),
        },
        ".sd-theme-dark": {
          colorScheme: "dark",
          ...createCssColorVariables("dark"),
        },
      }}
    />
  );
}
