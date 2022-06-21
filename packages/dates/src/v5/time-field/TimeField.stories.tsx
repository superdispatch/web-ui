import { InputAdornment } from '@mui/material';
import { Meta } from '@storybook/react';
import { TimeField } from './TimeField.playroom';

export default {
  title: 'Dates/TimeField',
  component: TimeField,
  parameters: { v5: true },
} as Meta;

export const basic = () => <TimeField />;

export const advanced = () => (
  <TimeField label="Label" placeholder="Placeholder" helperText="Helper Text" />
);

export const errorState = () => (
  <TimeField
    label="Label"
    error={true}
    placeholder="Placeholder"
    helperText="Error Text"
  />
);

export const adornment = () => (
  <TimeField
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">Start Adornment:</InputAdornment>
      ),
    }}
  />
);

export const disabled = () => <TimeField disabled={true} />;