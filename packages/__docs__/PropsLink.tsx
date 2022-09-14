import { Launch } from '@mui/icons-material';
import { Link } from '@mui/material';
import { Inline } from '@superdispatch/ui';
import { ReactElement } from 'react';

export interface PropsLinkProps {
  url: string;
}

export function PropsLink({ url }: PropsLinkProps): ReactElement {
  return (
    <Link
      href={url}
      target="_blank"
      color="textSecondary"
      rel="noopener noreferrer"
    >
      <Inline verticalAlign="center">
        <span>Component API</span>
        <Launch fontSize="inherit" />
      </Inline>
    </Link>
  );
}
