import MuiButton from "@mui/material/Button";

export type ButtonProps = {
  children: React.ReactNode;
};

export function Button({ children }: ButtonProps) {
  return <MuiButton variant="contained">{children}</MuiButton>;
}
