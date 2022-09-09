import {
  Portal,
  Slide,
  Snackbar as MaterialSnackbar,
  SnackbarCloseReason as MaterialSnackbarCloseReason,
  SnackbarProps as MaterialSnackbarProps,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import {
  forwardRef,
  ForwardRefExoticComponent,
  ReactElement,
  ReactNode,
} from 'react';
import { SnackbarContent, SnackbarVariant } from './SnackbarContent';

function SlideTransition(
  props: TransitionProps & { children: ReactElement },
): ReactElement {
  return <Slide {...props} direction="up" />;
}

export type SnackbarCloseReason = 'timeout' | 'explicit';

export interface SnackbarProps
  extends Omit<MaterialSnackbarProps, 'onClose' | 'message' | 'children'> {
  children?: ReactNode;
  variant?: SnackbarVariant;
  hasCloseButton?: boolean;
  onClose?: (reason: SnackbarCloseReason) => void;
}

export const Snackbar: ForwardRefExoticComponent<SnackbarProps> = forwardRef(
  (
    {
      open,
      action,
      variant,
      onClose,
      children,
      ContentProps,
      hasCloseButton = onClose != null,
      TransitionComponent = SlideTransition,
      ...props
    },
    ref,
  ) => {
    function handleClose(
      reason: SnackbarCloseReason | MaterialSnackbarCloseReason,
    ): void {
      if (reason !== 'clickaway') {
        onClose?.(reason === 'timeout' ? 'timeout' : 'explicit');
      }
    }

    return (
      <Portal>
        <MaterialSnackbar
          {...props}
          ref={ref}
          open={open}
          TransitionComponent={TransitionComponent}
          onClose={(_, reason) => {
            handleClose(reason);
          }}
        >
          <SnackbarContent
            {...ContentProps}
            action={action}
            variant={variant}
            onClose={
              !hasCloseButton
                ? undefined
                : () => {
                    handleClose('explicit');
                  }
            }
          >
            {children}
          </SnackbarContent>
        </MaterialSnackbar>
      </Portal>
    );
  },
);
