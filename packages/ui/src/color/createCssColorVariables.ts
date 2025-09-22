import { Color, ColorDark } from "../color";

const CSS_VAR_PREFIX = "sd";

function colorKeyToCssVarName(key: string) {
  return key.toLowerCase().split(/(\d+)/).filter(Boolean).join("-");
}

export function createCssColorVariables(colorScheme: "light" | "dark") {
  const color = colorScheme === "light" ? Color : ColorDark;

  return Object.entries(color).reduce(
    (acc, [key, value]) => {
      acc[`--${CSS_VAR_PREFIX}-${colorKeyToCssVarName(key)}`] = value;
      return acc;
    },
    {} as Record<string, string>,
  );
}
