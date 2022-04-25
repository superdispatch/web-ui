import { Divider, Menu, MenuProps } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { v5 } from '@superdispatch/ui';
import { forwardRef } from 'react';
import {
  CountryISO,
  listCountries,
} from '../country-code-metadata/CountryCodeMetadata';
import { PhoneFieldMenuItem } from './PhoneFieldMenuItem';

type SuperDispatchTheme = v5.SuperDispatchTheme;

const useStyles = makeStyles(
  (theme: SuperDispatchTheme) => ({
    paper: {
      maxHeight: theme.spacing(30),
    },
  }),
  { name: 'SD-PhoneFieldMenu' },
);

export interface PhoneFieldMenuProps extends Pick<MenuProps, 'anchorEl'> {
  onClose: () => void;
  value: CountryISO;
  onChange: (country: CountryISO) => void;
}

export const PhoneFieldMenu = forwardRef<unknown, PhoneFieldMenuProps>(
  ({ anchorEl, value, onClose, onChange }, ref) => {
    const styles = useStyles();

    return (
      <Menu
        ref={ref}
        open={!!anchorEl}
        onClose={onClose}
        anchorEl={anchorEl}
        classes={{ paper: styles.paper }}
      >
        {listCountries().map((country) => [
          <PhoneFieldMenuItem
            key={country}
            country={country}
            selected={country === value}
            onClick={() => {
              onChange(country);
              onClose();
            }}
          />,
          country === 'NZ' && <Divider key="divider" />,
        ])}
      </Menu>
    );
  },
);
