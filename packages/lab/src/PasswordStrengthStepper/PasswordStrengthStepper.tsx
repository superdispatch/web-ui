import { Typography } from '@material-ui/core';
import { Color, ColorDynamic, Stack } from '@superdispatch/ui';
import { Box } from '@superdispatch/ui-lab';
import { useMemo } from 'react';
import styled from 'styled-components';
import {
  getPasswordStrength,
  has8OrMoreCharacters,
  hasLowerCaseAndUpperCase,
  hasNumber,
  hasSpecialCharacter,
  PasswordStrength,
} from './PasswordUtils';
import {
  CheckPasswordItem,
  Stepper,
  StepperItem,
} from './PasswordValidationComponents';

const passwordStepperTitle = {
  weak: { textColor: ColorDynamic.Red500, text: 'Weak Password' },
  average: { textColor: ColorDynamic.Yellow500, text: 'Average Password' },
  good: { textColor: ColorDynamic.Green500, text: 'Good Password' },
  strong: { textColor: ColorDynamic.Green500, text: 'Strong Password' },
};

const passwordStrengthToActiveStepsCount = {
  weak: 1,
  average: 2,
  good: 3,
  strong: 4,
};

function steps(passwordStrength: string): boolean[] {
  return [
    passwordStrengthToActiveStepsCount[passwordStrength as PasswordStrength] >=
      1,
    passwordStrengthToActiveStepsCount[passwordStrength as PasswordStrength] >=
      2,
    passwordStrengthToActiveStepsCount[passwordStrength as PasswordStrength] >=
      3,
    passwordStrengthToActiveStepsCount[passwordStrength as PasswordStrength] >=
      4,
  ];
}

const PasswordText = styled(Typography)<{ colorProp?: string }>`
  color: ${({ colorProp }) => colorProp ?? Color.Dark100};
`;

interface PasswordValidationStepperProps {
  value: string;
}

export function PasswordValidationStepper({
  value,
}: PasswordValidationStepperProps): JSX.Element {
  const passwordStrength = useMemo(() => getPasswordStrength(value), [value]);

  return (
    <Box>
      <Box>
        <PasswordText
          variant="body2"
          colorProp={
            passwordStrength && passwordStepperTitle[passwordStrength].textColor
          }
        >
          {passwordStrength
            ? passwordStepperTitle[passwordStrength].text
            : 'Password Strength'}
        </PasswordText>
        <Stepper>
          {steps(passwordStrength ?? '').map((isStepActive, index) => (
            <StepperItem
              key={index}
              isActive={isStepActive}
              passwordStrength={passwordStrength}
            />
          ))}
        </Stepper>
      </Box>
      <Box>
        <Typography variant="body2">It must have:</Typography>
        <Stack space="xxsmall">
          <CheckPasswordItem
            isDone={has8OrMoreCharacters(value)}
            text="At least 8 characters"
          />
          <CheckPasswordItem
            isDone={hasLowerCaseAndUpperCase(value)}
            text="Upper & lowercase letters"
          />
          <CheckPasswordItem isDone={hasNumber(value)} text="A number" />
          <CheckPasswordItem
            isDone={hasSpecialCharacter(value)}
            text="A special character (%, $, #, etc.)"
          />
        </Stack>
      </Box>
    </Box>
  );
}
