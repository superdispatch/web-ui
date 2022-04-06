import { Meta } from '@storybook/react';
import { Stack } from '@superdispatch/ui';
import { Box } from '../box/Box';
import { LinkComponentProps, LinkedText } from './LinkedText';

export default {
  title: 'Lab/LinkedText',
  component: LinkedText,
  decorators: [
    (Story) => (
      <Box maxWidth="200px">
        <Story />
      </Box>
    ),
  ],
} as Meta;

export const basic = () => (
  <Stack>
    <LinkedText>
      Component works with (http://www.google.com) or without (www.google.com)
      protocols in link. Emails are detected too: email@ex.com
    </LinkedText>
  </Stack>
);

export const customLinkComponent = () => {
  const CustomLinkComponent = ({ children, ...props }: LinkComponentProps) => (
    <a {...props}>
      <i>{children}</i>
    </a>
  );

  return (
    <Stack>
      <LinkedText linkComponent={CustomLinkComponent}>
        Component works with (http://www.google.com) or without (www.google.com)
        protocols in link. Emails are detected too: email@ex.com
      </LinkedText>
    </Stack>
  );
};
