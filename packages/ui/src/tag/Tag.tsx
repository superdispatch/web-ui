import { Theme, Typography, TypographyProps } from '@material-ui/core';
import { ClassNameMap, makeStyles } from '@material-ui/styles';
import cx from 'clsx';
import {
  ElementType,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import { Color } from '../theme/Color';

export type TagClassKey =
  | 'root'
  | 'colorGrey'
  | 'colorBlue'
  | 'colorGreen'
  | 'colorPurple'
  | 'colorRed'
  | 'colorTeal'
  | 'colorYellow'
  | 'variantSubtle'
  | 'variantBold';

const useStyles = makeStyles<
  Theme,
  { classes?: Partial<ClassNameMap<TagClassKey>> },
  TagClassKey
>(
  (theme) => ({
    root: {
      maxWidth: '100%',
      alignItems: 'center',
      display: 'inline-flex',
      borderRadius: theme.spacing(0.5),
      padding: theme.spacing(0, 0.5),
    },

    variantSubtle: {
      '&$colorGrey': { color: Color.Dark300, backgroundColor: Color.Silver200 },
      '&$colorBlue': { color: Color.Blue500, backgroundColor: Color.Blue50 },
      '&$colorGreen': { color: Color.Green500, backgroundColor: Color.Green50 },
      '&$colorPurple': {
        color: Color.Purple500,
        backgroundColor: Color.Purple50,
      },
      '&$colorRed': { color: Color.Red500, backgroundColor: Color.Red50 },
      '&$colorTeal': { color: Color.Teal500, backgroundColor: Color.Teal50 },
      '&$colorYellow': {
        color: Color.Yellow500,
        backgroundColor: Color.Yellow50,
      },
    },

    variantBold: {
      color: Color.White,

      '&$colorGrey': { backgroundColor: Color.Dark300 },
      '&$colorBlue': { backgroundColor: Color.Blue500 },
      '&$colorGreen': { backgroundColor: Color.Green500 },
      '&$colorPurple': { backgroundColor: Color.Purple500 },
      '&$colorRed': { backgroundColor: Color.Red500 },
      '&$colorTeal': { backgroundColor: Color.Teal500 },
      '&$colorYellow': { backgroundColor: Color.Yellow500 },
    },

    colorGrey: {},
    colorBlue: {},
    colorGreen: {},
    colorPurple: {},
    colorRed: {},
    colorTeal: {},
    colorYellow: {},
  }),
  { name: 'SD-Tag' },
);

export interface TagProps
  extends RefAttributes<unknown>,
    Omit<TypographyProps, 'ref' | 'classes' | 'color' | 'variant'> {
  classes?: Partial<ClassNameMap<TagClassKey>>;
  component?: ElementType;

  color: 'grey' | 'blue' | 'green' | 'purple' | 'red' | 'teal' | 'yellow';
  variant: 'subtle' | 'bold';
  fontWeight?: 'regular' | 'bold';
}

export const Tag: ForwardRefExoticComponent<TagProps> = forwardRef(
  (
    {
      color,
      variant,
      children,
      classes,
      className,
      noWrap = true,
      fontWeight = 'bold',
      component = 'div' as const,
      ...props
    },
    ref,
  ) => {
    const styles = useStyles({ classes });

    return (
      <Typography
        {...props}
        ref={ref}
        noWrap={noWrap}
        component={component}
        variant={fontWeight === 'bold' ? 'body1' : 'body2'}
        className={cx(
          styles.root,
          color === 'grey' && styles.colorGrey,
          color === 'blue' && styles.colorBlue,
          color === 'green' && styles.colorGreen,
          color === 'purple' && styles.colorPurple,
          color === 'red' && styles.colorRed,
          color === 'teal' && styles.colorTeal,
          color === 'yellow' && styles.colorYellow,
          variant === 'subtle' && styles.variantSubtle,
          variant === 'bold' && styles.variantBold,
          className,
        )}
      >
        {children}
      </Typography>
    );
  },
);
