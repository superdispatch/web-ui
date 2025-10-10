import { SvgIcon, type SvgIconProps } from "@mui/material";

export const CheckmarkIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      d="M9.08471 15.4676L5.29164 11.736L4 12.9978L9.08471 18L20 7.26174L18.7175 6L9.08471 15.4676Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.29165 11.736L9.08472 15.4676L18.7175 6L20 7.26174L9.08474 18L4.00001 12.9978L5.29165 11.736ZM9.08488 14.7663L18.7176 5.29877L20.713 7.26174L9.08472 18.7014L3.28577 12.9965L5.29289 11.0358L9.08488 14.7663Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export const CloseIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.239 12L17 8.23899L15.761 7L12 10.761L8.23899 7L7 8.239L10.761 12L7 15.761L8.23899 17L12 13.239L15.761 17L17 15.761L13.239 12Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export const EditIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
