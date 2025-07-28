import { CssBaseline } from "@mui/material";
import {
  createTheme as createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import type { ReactNode } from "react";

function createTheme() {
  const theme = createMuiTheme({
    colorSchemes: {
      dark: true,
      light: true,
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
    <MuiThemeProvider theme={theme}>
      <CssBaseline>{children}</CssBaseline>
    </MuiThemeProvider>
  );
}
