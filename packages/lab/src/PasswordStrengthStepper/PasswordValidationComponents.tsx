import { Check } from '@material-ui/icons';
import { Color, ColorDynamic, Inline } from '@superdispatch/ui';
import { Box } from '@superdispatch/ui-lab';
import styled from 'styled-components';
import { PasswordStrength } from './PasswordUtils';

const ListItem = styled.div`
  display: flex;
  align-items: center;
`;

const Dot = styled.div`
  height: 4px;
  width: 4px;
  background-color: ${Color.Blue300};
  border-radius: 100px;
`;

const TickBox = styled(Box)`
  width: 13.33px;
  height: 13.33px;
  border-radius: 15px;
  background-color: ${ColorDynamic.Blue50};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function CheckPasswordItem({
  isDone,
  text,
}: {
  isDone: boolean;
  text: string;
}): JSX.Element {
  return (
    <ListItem>
      <Box minWidth="16px">
        <Inline verticalAlign="center" horizontalAlign="center">
          {isDone ? (
            <TickBox>
              <Check
                style={{
                  fontSize: 10,
                  color: Color.Blue300,
                }}
              />
            </TickBox>
          ) : (
            <Dot />
          )}
        </Inline>
      </Box>
      {text}
    </ListItem>
  );
}

export const Stepper = styled.div`
  height: 5px;
  display: flex;
  width: 100%;
  margin-bottom: 8px;
  margin-top: 4px;
`;

export const StepperItem = styled.div<{
  isActive: boolean;
  passwordStrength?: PasswordStrength;
}>`
  height: 2px;
  background-color: ${({ isActive, passwordStrength }) =>
    getStepperItemColor(isActive, passwordStrength)};
  flex: 1;
  border-radius: 100px;
  &:not(:last-child) {
    margin-right: 10px;
    flex: 1;
  }
`;

function getStepperItemColor(
  isActive: boolean,
  passwordStrength?: PasswordStrength,
): string {
  if (!isActive || !passwordStrength) return ColorDynamic.Silver400;

  switch (isActive) {
    case passwordStrength === 'strong':
      return ColorDynamic.Green500;
    case passwordStrength === 'weak':
      return ColorDynamic.Red500;
    case passwordStrength === 'average':
      return ColorDynamic.Yellow500;
    case passwordStrength === 'good':
      return ColorDynamic.Green500;
    default:
      return ColorDynamic.Silver400;
  }
}
