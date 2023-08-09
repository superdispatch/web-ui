import { Color } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideSwitch(theme: SuperDispatchTheme): void {
  const sm = theme.breakpoints.up('sm');

  theme.props.MuiSwitch = {
    color: 'primary',
    disableRipple: true,
    disableFocusRipple: true,
  };

  theme.overrides.MuiSwitch = {
    root: {
      width: theme.spacing(9.5),
      height: theme.spacing(5.5),
      padding: theme.spacing(0.75, 1.5),
      [sm]: {
        width: theme.spacing(8),
        height: theme.spacing(4),
        padding: theme.spacing(0.5, 1.5),
      },
    },

    track: {
      opacity: undefined,
      boxShadow: `0 0 0 0 ${Color.Transparent}`,

      transition: theme.transitions.create(['box-shadow', 'background-color'], {
        duration: theme.transitions.duration.shortest,
      }),

      borderRadius: theme.spacing(2),
      [sm]: { borderRadius: theme.spacing(1.625) },
    },

    thumb: {
      color: Color.White,
      boxShadow: undefined,
      width: theme.spacing(3),
      height: theme.spacing(3),
      [sm]: { width: theme.spacing(2), height: theme.spacing(2) },
    },

    switchBase: {
      left: theme.spacing(1),
      padding: theme.spacing(1.25, 1),
      [sm]: { padding: theme.spacing(1) },

      '&$checked': {
        transform: `translateX(${theme.spacing(2.5)}px)`,
        [sm]: { transform: `translateX(${theme.spacing(2)}px)` },
      },

      '&$checked + $track': {
        opacity: undefined,
      },

      '&$disabled + $track': {
        opacity: undefined,
      },
    },

    colorPrimary: {
      '&$checked': {
        color: undefined,

        '&:hover': {
          backgroundColor: undefined,

          '& + $track': { backgroundColor: Color.Blue400 },
        },
      },

      '& + $track': { backgroundColor: Color.Silver500 },

      '&$disabled + $track': { backgroundColor: Color.Silver300 },

      '&$checked$disabled + $track': { backgroundColor: Color.Blue100 },

      '&:hover + $track': { backgroundColor: Color.Dark100 },

      '&.Mui-focusVisible + $track': {
        boxShadow: `0 0 0 3px ${Color.Blue100}`,
      },
    },
  };
}
