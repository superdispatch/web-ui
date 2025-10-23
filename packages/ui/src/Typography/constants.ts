import { ColorDynamic } from "../color";

export const colorMap = {
  primary: ColorDynamic.Dark500,
  secondary: ColorDynamic.Dark300,
  disabled: ColorDynamic.Dark100,
  critical: ColorDynamic.Red500,
  warning: ColorDynamic.Yellow500,
  success: ColorDynamic.Green500,
  info: ColorDynamic.Blue500,
  purple: ColorDynamic.Purple500,
  teal: ColorDynamic.Teal500,
  inherit: undefined,
} as const;

export type TypographyColor = keyof typeof colorMap;

export const COLOR_VARIANTS = Object.keys(colorMap) as TypographyColor[];

export function getTypographyColor(color: TypographyColor) {
  return colorMap[color];
}
