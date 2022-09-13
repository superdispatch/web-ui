import {
  Card,
  CardContent,
  CardContentProps,
  CardProps,
  styled,
} from '@mui/material';
import { forwardRef, ForwardRefExoticComponent, useState } from 'react';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';
import { assignRef } from '../utils/mergeRefs';

const StyledCardContent = styled(CardContent)(
  ({ theme }: { theme: SuperDispatchTheme }) => {
    return {
      padding: theme.spacing(2),
    };
  },
);

const StyledCard = styled(Card)(({ theme }: { theme: SuperDispatchTheme }) => {
  return {
    '&[data-full-width="true"]': {
      borderRadius: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
    },

    [`&[data-size="large"] > ${StyledCardContent.toString()}`]: {
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(3),
      },
    },
  };
});

export interface InfoCardProps extends CardProps {
  size?: 'medium' | 'large';
  CardContentProps?: CardContentProps;
}

export const InfoCard: ForwardRefExoticComponent<InfoCardProps> = forwardRef(
  (
    {
      size,
      square,
      classes,
      children,
      className,
      CardContentProps: cardContentProps = {},
      ...props
    },
    ref,
  ) => {
    const [rootNode, setRootNode] = useState<HTMLElement | null>(null);

    const clientRect = rootNode?.getBoundingClientRect();
    const isFullWidth = clientRect?.width === window.innerWidth;

    return (
      <StyledCard
        {...props}
        ref={(node: HTMLElement) => {
          assignRef(ref, node);
          setRootNode(node);
        }}
        data-size={size}
        data-full-width={isFullWidth}
      >
        <StyledCardContent {...cardContentProps}>{children}</StyledCardContent>
      </StyledCard>
    );
  },
);
