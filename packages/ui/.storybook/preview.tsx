import { Decorator } from "@storybook/react-vite";
import React from "react";
import { ThemeProvider } from "../src/theme";
import { ColorSchemeSwitcher } from "./ColorSchemeSwitcher";

export const globalTypes = {
  colorSchemeMode: {
    toolbar: {
      title: "Color Scheme",
      items: [
        { value: "light", icon: "sun", title: "Light" },
        { value: "dark", icon: "moon", title: "Dark" },
        { value: "system", icon: "computer", title: "System" },
      ],
      dynamicTitle: true,
    },
  },
  initialGlobals: {
    colorSchemeMode: "light",
  },
};

export const decorators: Decorator[] = [
  (Story, { globals }) => {
    return (
      <ThemeProvider>
        <ColorSchemeSwitcher mode={globals.colorSchemeMode} />
        <Story />
      </ThemeProvider>
    );
  },
];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "centered",
};
