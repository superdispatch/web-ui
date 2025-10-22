import { Box, createSvgIcon } from "@mui/material";
import MuiRadio from "@mui/material/Radio";
import type { RadioProps as MuiRadioProps } from "@mui/material/Radio";
import { ColorDynamic } from "../color";
import { Typography } from "../Typography";

const UncheckedIcon = createSvgIcon(
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="8.5"
      fill={ColorDynamic.White}
      stroke={ColorDynamic.Dark100}
    />
  </svg>,
  "UncheckedIcon"
);

const CheckedIcon = createSvgIcon(
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="8.5"
      fill={ColorDynamic.Blue300}
      stroke={ColorDynamic.Blue300}
    />
    <circle cx="12" cy="12" r="4" fill={ColorDynamic.White} />
  </svg>,
  "CheckedIcon"
);

type CustomRadioProps = {
  label?: string;
  description?: string;
};

export type RadioProps = Omit<
  MuiRadioProps,
  | "color"
  | "icon"
  | "checkedIcon"
  | "disableRipple"
  | "disableFocusRipple"
  | "disableTouchRipple"
> &
  CustomRadioProps;

export function Radio({
  label,
  description,
  disabled,
  ...muiRadioProps
}: RadioProps) {
  const radio = (
    <MuiRadio
      {...muiRadioProps}
      sx={{ cursor: disabled ? "default" : "pointer" }}
      slotProps={{
        root: {
          sx: {
            padding: 0,
            opacity: disabled ? 0.3 : 1,

            "&.Mui-focusVisible:before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              border: `3px solid ${ColorDynamic.Blue300}`,
              opacity: 0.1,
            },
          },
        },
      }}
      disabled={disabled}
      disableRipple={true}
      disableFocusRipple={true}
      disableTouchRipple={true}
      icon={<UncheckedIcon />}
      checkedIcon={<CheckedIcon />}
    />
  );

  if (!label) {
    return radio;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.25 }}>
      <Box
        component="label"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          cursor: disabled ? "default" : "pointer",
        }}
      >
        {radio}
        <Typography variant="body" sx={{ opacity: disabled ? 0.3 : undefined }}>
          {label}
        </Typography>
      </Box>

      {description && (
        <Typography
          variant="body"
          sx={{
            marginLeft: 4,
            color: ColorDynamic.Dark300,
            opacity: disabled ? 0.3 : undefined,
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
}
