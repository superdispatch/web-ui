import { Color } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideIconButton(theme: SuperDispatchTheme): void {
  theme.overrides.MuiIconButton = {
    root: {
      color: Color.Dark100,

      backgroundColor: Color.Transparent,

      transition: theme.transitions.create(['color', 'background-color'], {
        duration: theme.transitions.duration.short,
      }),

      '&:hover': { backgroundColor: Color.Transparent },
      '&:active': { color: Color.Dark500 },
      '&:hover ': { color: Color.Dark300 },
      '&:focus': { backgroundColor: Color.Silver400 },

      '&$disabled': { color: Color.Silver500 },
    },
    colorPrimary: {
      '&:active': { color: Color.Blue500 },
      '&:hover ': { color: Color.Blue300 },
      '&:focus': { backgroundColor: Color.Blue50 },
    },

    edgeEnd: { marginRight: theme.spacing(-1) },

    edgeStart: { marginLeft: theme.spacing(-1) },
  };
}
