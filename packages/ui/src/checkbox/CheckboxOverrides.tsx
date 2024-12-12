import { SvgIcon } from '@material-ui/core';
import { ColorDynamic } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideCheckbox(theme: SuperDispatchTheme): void {
  theme.props.MuiCheckbox = {
    color: 'primary',
    icon: (
      <SvgIcon>
        <rect
          width="17"
          height="17"
          x="3.5"
          y="3.5"
          fill={ColorDynamic.White}
          stroke="currentColor"
          rx="1.5"
        />
      </SvgIcon>
    ),
    checkedIcon: (
      <SvgIcon>
        <rect width="18" height="18" x="3" y="3" fill="currentColor" rx="2" />
        <path
          fill={ColorDynamic.White}
          d="M15.73 8l-.63.63c-1.43 1.43-2.94 3.05-4.37 4.5l-1.9-1.57-.7-.57L7 12.38l.7.57 2.53 2.09.63.52.58-.58c1.6-1.62 3.35-3.5 4.93-5.08l.63-.63L15.73 8z"
        />
      </SvgIcon>
    ),
    indeterminateIcon: (
      <SvgIcon>
        <rect width="18" height="18" x="3" y="3" fill="currentIcon" rx="2" />
        <path fill={ColorDynamic.White} d="M7 11h10v2H7v-2z" />
      </SvgIcon>
    ),
  };

  theme.overrides.MuiCheckbox = {
    root: {
      color: ColorDynamic.Dark100,
      width: theme.spacing(3),
      height: theme.spacing(3),
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
      marginTop: theme.spacing(0.5),
      marginBottom: theme.spacing(0.5),
      padding: 0,

      '&:hover': {
        backgroundColor: ColorDynamic.Blue10,
      },
      '&.MuiButtonBase-root': {
        borderRadius: theme.spacing(0.5),
      },
    },

    colorPrimary: {
      '&$checked$disabled': {
        color: ColorDynamic.Silver500,
      },

      '&:hover:not($checked)': {
        color: ColorDynamic.Dark100,
        backgroundColor: ColorDynamic.Blue10,
      },
    },
  };
}
