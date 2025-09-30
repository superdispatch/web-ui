import { SvgIcon, type SvgIconProps } from "@mui/material";

export const CheckmarkIcon = (props: SvgIconProps) => {
  return (
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
};
