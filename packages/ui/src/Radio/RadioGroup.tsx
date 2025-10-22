import MuiRadioGroup from "@mui/material/RadioGroup";
import type { RadioGroupProps as MuiRadioGroupProps } from "@mui/material/RadioGroup";

export type RadioGroupProps = Omit<MuiRadioGroupProps, "classes" | "row">;

export function RadioGroup(props: RadioGroupProps) {
  return <MuiRadioGroup {...props} />;
}
