import { Theme } from '@material-ui/core';

import { Color } from './Color';
import { iconSizeVariant } from './SvgIconStyles';
import { fontHeightVariant, fontSizeVariant } from './TypographyStyles';

export function applyTextFieldStyles(theme: Theme) {
  theme.props = theme.props || {};
  theme.overrides = theme.overrides || {};

  theme.props.MuiTextField = { rows: 4, rowsMax: 4, variant: 'outlined' };

  theme.overrides.MuiInputBase = {
    root: { '&$disabled': { backgroundColor: Color.Silver100 } },
    inputMultiline: { resize: 'vertical' },
  };

  theme.props.MuiInputLabel = { shrink: true };

  theme.overrides.MuiInputLabel = {
    root: {
      color: Color.Grey400,
      marginBottom: theme.spacing(0.5),

      fontSize: fontSizeVariant('body1', true),
      lineHeight: fontHeightVariant('body1', true),
      [theme.breakpoints.up('sm')]: {
        fontSize: fontSizeVariant('body1'),
        lineHeight: fontHeightVariant('body1'),
      },
    },
    formControl: {
      top: undefined,
      left: undefined,
      position: undefined,
      transform: undefined,
    },
    shrink: { transform: undefined },
    outlined: {
      transform: undefined,
      pointerEvents: undefined,
      '&$shrink': { transform: undefined },
    },
  };

  theme.overrides.MuiFormLabel = {
    root: {
      '&$error': { color: undefined },
      '&$focused': { color: undefined },
      '&$disabled': { color: undefined },

      fontSize: fontSizeVariant('body1', true),
      lineHeight: fontHeightVariant('body1', true),
      [theme.breakpoints.up('sm')]: {
        fontSize: fontSizeVariant('body1'),
        lineHeight: fontHeightVariant('body1'),
      },
    },
  };

  theme.props.MuiOutlinedInput = {
    notched: false,
  };

  theme.overrides.MuiOutlinedInput = {
    root: {
      '& .MuiInputAdornment-root .MuiSvgIcon-root': {
        fontSize: fontHeightVariant('body1', true),
        [theme.breakpoints.up('sm')]: { fontSize: fontHeightVariant('body1') },
      },

      '&:hover $notchedOutline': { borderColor: Color.Grey100 },
    },

    input: {
      height: fontHeightVariant('body1', true),
      fontSize: fontSizeVariant('body1', true),
      padding: theme.spacing(1.25, 2),

      [theme.breakpoints.up('sm')]: {
        height: fontHeightVariant('body1'),
        fontSize: fontSizeVariant('body1'),
        padding: theme.spacing(0.75, 1),
      },
    },

    multiline: { padding: theme.spacing(0.75, 1) },
    inputSelect: { paddingRight: theme.spacing(4) },
    adornedStart: { paddingLeft: theme.spacing(1) },
    adornedEnd: { paddingRight: theme.spacing(1) },
  };

  theme.overrides.MuiSelect = {
    icon: {
      fontSize: iconSizeVariant('default'),
      '$disabled &': { color: Color.Grey100 },
    },
    selectMenu: {
      lineHeight: fontHeightVariant('body1', true),
      [theme.breakpoints.up('sm')]: { lineHeight: fontHeightVariant('body1') },
    },
  };

  theme.overrides.MuiFormHelperText = {
    root: {
      fontSize: fontSizeVariant('body1', true),
      lineHeight: fontHeightVariant('body1', true),
      [theme.breakpoints.up('sm')]: {
        fontSize: fontSizeVariant('body1'),
        lineHeight: fontHeightVariant('body1'),
      },
    },

    contained: { margin: theme.spacing(0.5, 0, 0, 0) },
  };
}
