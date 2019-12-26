import { Color } from '../Color';
import { SuperDispatchTheme } from '../ThemeProvider';
import { fontHeightVariant, fontSizeVariant } from './TypographyStyles';

export function applyTabsStyles(theme: SuperDispatchTheme) {
  theme.props.MuiTabs = {
    variant: 'scrollable',
    textColor: 'primary',
    indicatorColor: 'primary',
  };

  theme.overrides.MuiTabs = { root: { minHeight: theme.spacing(5) } };

  theme.overrides.MuiTab = {
    root: {
      fontWeight: undefined,
      textTransform: undefined,
      minHeight: theme.spacing(5),

      transition: theme.transitions.create(['color'], {
        duration: theme.transitions.duration.short,
      }),

      fontSize: fontSizeVariant('body1', true),
      lineHeight: fontHeightVariant('body1', true),

      [theme.breakpoints.up('sm')]: {
        minWidth: undefined,
        padding: theme.spacing(0.75, 3),
        fontSize: fontSizeVariant('body1'),
        lineHeight: fontHeightVariant('body1'),
      },
    },

    textColorPrimary: {
      color: Color.Grey500,
      '&:hover, &:focus': { color: Color.Blue300 },
    },
  };
}
