import { ButtonBase, InputAdornment, Typography } from '@material-ui/core';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { ColorDynamic, SuperDispatchTheme } from '@superdispatch/ui';
import { forwardRef, useMemo } from 'react';
import {
  CountryISO,
  formatCountry,
  getCountryCode,
} from '../country-code-metadata/CountryCodeMetadata';
import { PhoneFieldFlag } from './PhoneFieldFlag';

const useStyles = makeStyles(
  (theme: SuperDispatchTheme) => ({
    root: {
      marginLeft: theme.spacing(-1),
      marginRight: 0,
    },
    button: {
      color: ColorDynamic.Blue300,
      padding: theme.spacing(0.5, 0.5, 0.5, 1),
      borderRadius: theme.spacing(0.5, 0, 0, 0.5),
      '&:hover, &:focus': {
        backgroundColor: ColorDynamic.Blue50,
      },
    },
  }),
  { name: 'SD-PhoneFieldStartAdornment' },
);

export interface PhoneFieldProps {
  onClick?: () => void;
  isExpanded?: boolean;
  country: CountryISO;
}

export const PhoneFieldStartAdornment = forwardRef<
  HTMLDivElement,
  PhoneFieldProps
>(({ country, onClick, isExpanded }, ref) => {
  const styles = useStyles();
  const [title, countryCode] = useMemo(() => {
    const code = `+${getCountryCode(country)}`;

    return [`${formatCountry(country)}: ${code}`, code];
  }, [country]);

  return (
    <InputAdornment ref={ref} position="start" className={styles.root}>
      <ButtonBase
        title={title}
        onClick={onClick}
        className={styles.button}
        aria-expanded={isExpanded}
      >
        <PhoneFieldFlag country={country} />

        {isExpanded ? (
          <ArrowDropUp htmlColor={ColorDynamic.Dark200} />
        ) : (
          <ArrowDropDown htmlColor={ColorDynamic.Dark200} />
        )}

        <Typography color="textPrimary">{countryCode}</Typography>
      </ButtonBase>
    </InputAdornment>
  );
});
