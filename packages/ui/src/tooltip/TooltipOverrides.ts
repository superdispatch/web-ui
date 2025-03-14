import { ColorDynamic } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideTooltip(theme: SuperDispatchTheme): void {
  theme.overrides.MuiTooltip = {
    tooltip: {
      ...theme.typography.body2,
      padding: theme.spacing(1, 1.5),
      backgroundColor: ColorDynamic.Dark500,
      '--sd-dark-300': ColorDynamic.Silver500, //tooltip secondary color(Dark300) is invisible in dark mode
    },

    popperArrow: {
      '&[x-placement*="top"] $arrow': {
        '&::before': { borderBottomRightRadius: 2 },
      },
      '&[x-placement*="left"] $arrow': {
        '&::before': { borderTopRightRadius: 2 },
      },
      '&[x-placement*="right"] $arrow': {
        '&::before': { borderBottomLeftRadius: 2 },
      },
      '&[x-placement*="bottom"] $arrow': {
        '&::before': { borderTopLeftRadius: 2 },
      },
    },

    arrow: {
      color: ColorDynamic.Silver500,
      fontSize: theme.spacing(1),
    },
  };
}
