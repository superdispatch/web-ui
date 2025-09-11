import { TextField } from '@material-ui/core';
import { Meta } from '@storybook/react';
import { Stack } from '@superdispatch/ui';
import { useState } from 'react';
import { PasswordValidationStepper } from './PasswordStrengthStepper';

export default {
  title: 'Lab/PasswordValidationStepper',
  component: PasswordValidationStepper,
} as Meta;

export const basic = () => <PasswordValidationStepper value="" />;

export const weakPassword = () => <PasswordValidationStepper value="abc" />;

export const averagePassword = () => (
  <PasswordValidationStepper value="password123" />
);

export const goodPassword = () => (
  <PasswordValidationStepper value="Password123" />
);

export const strongPassword = () => (
  <PasswordValidationStepper value="Password123!!" />
);

export const Interactive = () => {
  const [password, setPassword] = useState('');

  return (
    <Stack space="medium">
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Type a password to see strength validation"
        fullWidth={true}
      />
      <PasswordValidationStepper value={password} />
    </Stack>
  );
};

export const ProgressiveExample = () => {
  const examples = [
    { label: 'Empty', value: '' },
    { label: 'Too short', value: 'abc' },
    { label: 'Weak (only lowercase)', value: 'password' },
    { label: 'Average (lowercase + number)', value: 'password123' },
    { label: 'Strong (all requirements)', value: 'Password123!!' },
  ];

  return (
    <Stack space="large">
      {examples.map((example) => (
        <div key={example.label}>
          <h4>
            {example.label}: &quot;{example.value}&quot;
          </h4>
          <PasswordValidationStepper value={example.value} />
        </div>
      ))}
    </Stack>
  );
};
