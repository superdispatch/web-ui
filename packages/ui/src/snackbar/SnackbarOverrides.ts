import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideSnackbar(theme: SuperDispatchTheme): void {
  theme.components.MuiSnackbar = {
    defaultProps: {
      anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
    },
    styleOverrides: {
      anchorOriginBottomCenter: { left: 0, right: 0, bottom: 0 },
    },
  };

  theme.components.MuiSnackbarContent = {
    styleOverrides: {
      root: {
        width: '100%',
        borderRadius: 0,
        minHeight: theme.spacing(7.5),

        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(54),
          maxWidth: theme.spacing(54),
          borderRadius: theme.spacing(0.5),
        },
      },

      message: { flex: 1, display: 'flex' },
    },
  };
}
