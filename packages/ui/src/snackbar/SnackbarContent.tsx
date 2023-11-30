import {
  Grid,
  IconButton,
  SnackbarContent as MuiSnackbarContent,
  SnackbarContentClassKey as MuiSnackbarContentClassKey,
  SnackbarContentProps as MuiSnackbarContentProps,
  Theme,
} from '@material-ui/core';
import { CheckCircle, Close, Error } from '@material-ui/icons';
import { ClassNameMap, makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import {
  forwardRef,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
} from 'react';
import { Color } from '../theme/Color';

type SnackbarContentClassKey =
  | MuiSnackbarContentClassKey
  | 'icon'
  | 'closeButton'
  | 'variantError'
  | 'variantSuccess';

const useStyles = makeStyles<
  Theme,
  { classes?: Partial<ClassNameMap<SnackbarContentClassKey>> },
  SnackbarContentClassKey
>(
  (theme) => ({
    root: {
      color: Color.White,
      backgroundColor: Color.Dark500,
    },

    action: {
      paddingLeft: theme.spacing(1),
    },

    message: {
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        fontSize: theme.spacing(2),
      },
    },

    icon: {
      marginRight: theme.spacing(1),
      fontSize: theme.spacing(3),
    },

    closeButton: {
      color: Color.White40,
      '&:hover, &:focus': {
        backgroundColor: Color.White08,
        color: Color.White40,
      },
    },
    variantError: {
      color: Color.Red500,
      borderRadius: '4px',
      background: `var(--R-50, ${Color.Red50})`,
      '& $closeButton': {
        color: Color.Red500, // This ensures the style applies when variant is error
      },
    },
    variantSuccess: {},
  }),
  { name: 'SD-SnackbarContent' },
);
export type SnackbarVariant = 'default' | 'error' | 'success';

export interface SnackbarContentProps
  extends RefAttributes<unknown>,
    Omit<MuiSnackbarContentProps, 'classes' | 'message' | 'variant'> {
  children?: ReactNode;
  onClose?: () => void;
  variant?: SnackbarVariant;
  classes?: Partial<ClassNameMap<SnackbarContentClassKey>>;
}

export const SnackbarContent: ForwardRefExoticComponent<SnackbarContentProps> =
  forwardRef(
    (
      {
        action,
        children,
        onClose,
        className,
        classes,
        variant = 'default',
        ...props
      },
      ref,
    ) => {
      const { icon, closeButton, variantError, variantSuccess, ...styles } =
        useStyles({ classes });
      const Icon =
        variant === 'error'
          ? Error
          : variant === 'success'
          ? CheckCircle
          : undefined;

      return (
        <MuiSnackbarContent
          {...props}
          ref={ref}
          classes={styles}
          className={clsx(className, {
            [variantError]: variant === 'error',
            [variantSuccess]: variant === 'success',
          })}
          message={
            <>
              {Icon && <Icon className={icon} />}
              {children}
            </>
          }
          action={
            !action && !onClose ? null : (
              <Grid
                container={true}
                spacing={1}
                alignItems="center"
                wrap="nowrap"
              >
                {!!action && <Grid item={true}>{action}</Grid>}

                {onClose && (
                  <Grid item={true}>
                    <IconButton
                      aria-label="close"
                      onClick={onClose}
                      className={closeButton}
                    >
                      <Close fontSize="small" />
                    </IconButton>
                  </Grid>
                )}
              </Grid>
            )
          }
        />
      );
    },
  );
