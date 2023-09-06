import {
  ButtonBase,
  ButtonBaseProps,
  Card as MuiCard,
  FormControlLabel as MuiFormControlLabel,
  Radio,
  Typography,
} from '@material-ui/core';
import { forwardRef, ForwardRefExoticComponent } from 'react';
import styled from 'styled-components';
import { Column } from '../columns/Column';
import { Columns } from '../columns/Columns';
import { Color } from '../theme/Color';

const ClickableCard = styled(ButtonBase)`
  display: block;
  text-align: initial;
  width: 100%;
`;

const Card = styled(MuiCard)`
  width: 100%;
  opacity: ${(props: { disabled?: boolean }) => (props.disabled ? 0.5 : 1)};
`;

const FormControlLabel = styled(MuiFormControlLabel)`
  width: 100%;
`;

const Content = styled.div<{ active?: boolean }>`
  padding: 16px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid
    ${({ active }) => (active ? Color.Blue300 : Color.Silver500)};
`;

const Caption = styled.div`
  padding-left: 30px;
`;

export interface RadioCardItemProps {
  value: string;
  label: string;
  name?: string;
  caption?: string;
  icon?: React.ReactNode;
}

interface RadioCardProps
  extends Omit<ButtonBaseProps, 'name' | 'value'>,
    RadioCardItemProps {
  disabled?: boolean;
  checked?: boolean;
}

export const RadioFieldCard: ForwardRefExoticComponent<RadioCardProps> =
  forwardRef(
    (
      {
        name,
        value,
        label,
        caption,
        disabled,
        icon,
        checked,
        onChange,
        ...props
      },
      ref,
    ) => {
      return (
        <Card disabled={disabled} key={value}>
          <ClickableCard name={name} disabled={disabled} {...props}>
            <Content active={checked}>
              <Columns space="small">
                <Column>
                  <FormControlLabel
                    value={value}
                    name={name}
                    control={<Radio ref={ref} checked={checked} />}
                    label={<Typography variant="h4">{label}</Typography>}
                  />
                  <Caption>
                    <Typography color="textSecondary" variant="caption">
                      {caption}
                    </Typography>
                  </Caption>
                </Column>

                <Column width="content">{icon}</Column>
              </Columns>
            </Content>
          </ClickableCard>
        </Card>
      );
    },
  );
