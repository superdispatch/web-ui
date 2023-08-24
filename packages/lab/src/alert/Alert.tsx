import { CheckCircle, Error, Info, Warning } from '@material-ui/icons';
import {
  Alert as MaterialAlert,
  AlertProps as MaterialAlertProps,
} from '@material-ui/lab';
import { Color } from '@superdispatch/ui';
import { forwardRef, ReactNode } from 'react';
import styled, { css, SimpleInterpolation } from 'styled-components';

function colorMixin(
  textColor: Color,
  iconColor: Color,
  backgroundColor: Color,
  buttonHoverColor: Color,
): readonly SimpleInterpolation[] {
  return css`
    color: ${textColor};
    border-color: ${textColor};
    background-color: ${backgroundColor};

    & .MuiAlert-icon {
      color: ${iconColor};
    }

    & .MuiAlert-action {
      color: ${iconColor};

      & .MuiIconButton-root {
        &:hover,
        &:active {
          color: ${buttonHoverColor};
        }
      }
    }
  `;
}

const StyledAlert = styled(MaterialAlert)`
  &.MuiAlert-outlinedSuccess {
    ${colorMixin(
      Color.Green500,
      Color.Green300,
      Color.Green50,
      Color.Green400,
    )};
  }

  &.MuiAlert-outlinedInfo {
    ${colorMixin(Color.Blue500, Color.Blue300, Color.Blue50, Color.Blue400)};
  }

  &.MuiAlert-outlinedWarning {
    ${colorMixin(
      Color.Yellow500,
      Color.Yellow300,
      Color.Yellow50,
      Color.Yellow400,
    )};
  }

  &.MuiAlert-outlinedError {
    ${colorMixin(Color.Red500, Color.Red300, Color.Red50, Color.Red400)};
  }

  & .MuiAlert-icon {
    opacity: 1;
    padding: 8px 0;
    font-size: 24px;
  }

  & .MuiAlert-action {
    display: block;
    padding-top: 5px;
    margin-right: -3px;

    & .MuiIconButton-root {
      & .MuiSvgIcon-root {
        font-size: 24px;
      }
    }
  }
`;

export type AlertSeverityProp = 'positive' | 'info' | 'caution' | 'critical';

export interface AlertProps {
  onClose?: () => void;
  children?: ReactNode;
  icon?: ReactNode;
  severity?: AlertSeverityProp;
}

function toMaterialSeverity(
  severity: AlertSeverityProp,
): MaterialAlertProps['severity'] {
  return severity === 'info'
    ? 'info'
    : severity === 'caution'
    ? 'warning'
    : severity === 'critical'
    ? 'error'
    : 'success';
}

const iconMapping: MaterialAlertProps['iconMapping'] = {
  success: <CheckCircle />,
  info: <Info />,
  error: <Error />,
  warning: <Warning />,
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ children, onClose, severity = 'positive', icon }, ref) => (
    <StyledAlert
      ref={ref}
      variant="outlined"
      icon={icon}
      iconMapping={iconMapping}
      severity={toMaterialSeverity(severity)}
      onClose={onClose}
    >
      {children}
    </StyledAlert>
  ),
);
