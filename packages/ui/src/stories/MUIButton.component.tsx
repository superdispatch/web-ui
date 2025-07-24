// button.component.tsx

import {
  Button as MuiButton,
  type ButtonProps as MuiButtonProps,
} from "@mui/material";

export interface ButtonProps extends MuiButtonProps {
  label: string;
}

export const MUIButton = ({ label, ...rest }: ButtonProps) => (
  <MuiButton {...rest}>{label}</MuiButton>
);
