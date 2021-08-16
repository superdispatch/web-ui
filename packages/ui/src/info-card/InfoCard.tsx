import {
  Card,
  CardClassKey,
  CardContent,
  CardContentProps,
  CardProps,
} from '@material-ui/core';
import { CSSProperties, makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { forwardRef, ForwardRefExoticComponent, useState } from 'react';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export type InfoCardClassKey = 'sizeLarge' | 'content' | CardClassKey;

const useStyles = makeStyles(
  (theme: SuperDispatchTheme): Record<InfoCardClassKey, CSSProperties> => ({
    root: {},
    sizeLarge: {},
    content: {
      padding: theme.spacing(2),

      '$sizeLarge > &': {
        [theme.breakpoints.up('sm')]: {
          padding: theme.spacing(3),
        },
      },
    },
  }),
  { name: 'SD-InfoCard' },
);

export interface InfoCardProps extends CardProps {
  size?: 'medium' | 'large';
  CardContentProps?: CardContentProps;
}

export const InfoCard: ForwardRefExoticComponent<InfoCardProps> = forwardRef(
  (
    {
      size,
      square,
      classes,
      children,
      className,
      CardContentProps: cardContentProps = {},
      ...props
    },
    ref,
  ) => {
    const {
      content: contentClassName,
      sizeLarge: sizeLargeClassName,
      ...styles
    } = useStyles({ classes });
    const [rootNode, setRootNode] = useState<HTMLElement | null>(null);

    const clientRect = rootNode?.getBoundingClientRect();
    const isFullWidth = clientRect?.width === window.innerWidth;

    return (
      <Card
        {...props}
        ref={(node: HTMLElement) => {
          setRootNode(node);
          if (typeof ref === 'function') {
            ref(node);
          }
        }}
        classes={styles}
        square={square ?? isFullWidth}
        className={clsx(className, { [sizeLargeClassName]: size === 'large' })}
      >
        <CardContent
          {...cardContentProps}
          className={clsx(cardContentProps.className, contentClassName)}
        >
          {children}
        </CardContent>
      </Card>
    );
  },
);
