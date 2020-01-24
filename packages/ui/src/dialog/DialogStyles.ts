import { SuperDispatchTheme } from '../theme/ThemeProvider';

export function applyDialogStyles(theme: SuperDispatchTheme) {
  theme.props.MuiDialogTitle = { disableTypography: true };

  theme.overrides.MuiDialogTitle = {
    root: { ...theme.typography.h3 },
  };

  theme.overrides.MuiDialogContent = {
    root: { padding: theme.spacing(0, 3) },
  };

  theme.overrides.MuiDialogActions = {
    root: { padding: theme.spacing(3) },

    spacing: {
      '& > :not(:first-child)': { marginLeft: theme.spacing(2) },
    },
  };
}
