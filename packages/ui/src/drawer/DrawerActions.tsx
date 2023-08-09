import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { forwardRef, HTMLAttributes } from 'react';
import { Color } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';
import { VisibilityObserver } from '../utils/VisibilityObserver';

const useStyles = makeStyles(
  (theme: SuperDispatchTheme) => ({
    appBar: {
      '&&': {
        bottom: 0,
        top: 'auto',
        borderLeft: 'none',
        borderRight: 'none',
        borderBottom: 'none',
        transition: theme.transitions.create(['border-color']),

        '&:not($appBarSticky)': {
          borderTopColor: Color.Transparent,
        },
      },
    },
    appBarSticky: {},

    toolbar: {
      '&.MuiToolbar-gutters': {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),

        [theme.breakpoints.up('md')]: {
          paddingLeft: theme.spacing(4),
          paddingRight: theme.spacing(4),
        },
      },
    },
  }),
  { name: 'SD-DrawerActions' },
);

export type DrawerActionsProps = Omit<HTMLAttributes<HTMLDivElement>, 'color'>;

export const DrawerActions = forwardRef<HTMLDivElement, DrawerActionsProps>(
  ({ children, className, ...props }, appBarRef) => {
    const styles = useStyles();

    return (
      <VisibilityObserver
        render={({ ref, visibility }) => (
          <>
            <AppBar
              {...props}
              ref={appBarRef}
              position="sticky"
              className={clsx(className, styles.appBar, {
                [styles.appBarSticky]: visibility === 'invisible',
              })}
            >
              <Toolbar className={styles.toolbar}>{children}</Toolbar>
            </AppBar>

            <div ref={ref} />
          </>
        )}
      />
    );
  },
);
