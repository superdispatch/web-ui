import { useTheme } from '@material-ui/core';
import { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

export interface LabProviderProps {
  children?: ReactNode;
}

export function LabProvider({ children }: LabProviderProps): ReactElement {
  const theme = useTheme();

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
