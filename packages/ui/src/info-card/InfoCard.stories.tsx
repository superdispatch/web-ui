import { Typography } from '@material-ui/core';
import { Meta } from '@storybook/react';
import { Button } from '@superdispatch/ui-lab';
import { Stack } from '../stack/Stack';
import { InfoCard } from './InfoCard';

export default { title: 'Surfaces/InfoCard', component: InfoCard } as Meta;

export const basic = () => (
  <InfoCard>
    <Stack space="small">
      <Typography variant="h3">Title</Typography>
      <Typography>Content</Typography>

      <Button variant="neutral">Button</Button>
    </Stack>
  </InfoCard>
);

export const large = () => (
  <InfoCard size="large">
    <Stack space="small">
      <Typography variant="h3">Title</Typography>
      <Typography>Content</Typography>

      <Button variant="neutral">Button</Button>
    </Stack>
  </InfoCard>
);
