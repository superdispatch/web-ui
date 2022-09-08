import { useTheme } from '@mui/material';
import {
  SuperDispatchTheme,
  ThemeProvider,
  ThemeProviderProps,
} from '@superdispatch/ui';
import { renderHook } from '@testing-library/react-hooks';

export function renderTheme(
  modifier?: ThemeProviderProps['modifier'],
): SuperDispatchTheme {
  const {
    result: { current: theme },
  } = renderHook(() => useTheme<SuperDispatchTheme>(), {
    wrapper: ({ children }) => (
      <ThemeProvider modifier={modifier}>{children}</ThemeProvider>
    ),
  });

  return theme;
}
