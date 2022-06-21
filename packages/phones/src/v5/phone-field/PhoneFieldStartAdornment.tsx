import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { ButtonBase, InputAdornment, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { v5 } from '@superdispatch/ui';
import { forwardRef, useMemo } from 'react';
import {
  CountryISO,
  formatCountry,
  getCountryCode,
} from '../country-code-metadata/CountryCodeMetadata';
import { PhoneFieldFlag } from './PhoneFieldFlag';

type SuperDispatchTheme = v5.SuperDispatchTheme;
const { Color } = v5;

const useStyles = makeStyles(
  (theme: SuperDispatchTheme) => ({
    root: {
      marginLeft: theme.spacing(-1),
      marginRight: 0,
    },
    button: {
      color: Color.Blue300,
      padding: theme.spacing(0.5, 0.5, 0.5, 1),
      borderRadius: theme.spacing(0.5, 0, 0, 0.5),
      '&:hover, &:focus': {
        backgroundColor: Color.Blue50,
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
          <ArrowDropUp htmlColor={Color.Dark200} />
        ) : (
          <ArrowDropDown htmlColor={Color.Dark200} />
        )}

        <Typography color="textPrimary">{countryCode}</Typography>
      </ButtonBase>
    </InputAdornment>
  );
});