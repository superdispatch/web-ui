import { Card, CardContent } from '@material-ui/core';
import {
  makePlayroomStory,
  PlayroomStoryWrapperProps,
} from '@superdispatch/ui-playroom/makePlayroomStory';
import { startCase } from 'lodash';
import React from 'react';

import { Inline, Stack } from '..';
import { Tag, TagProps } from './Tag';

export default { title: 'Data Display/Tag' };

const colors: Array<TagProps['color']> = [
  'grey',
  'blue',
  'green',
  'purple',
  'red',
  'teal',
  'yellow',
];
const variants: Array<TagProps['variant']> = ['subtle', 'bold'];

function Wrapper({ children }: PlayroomStoryWrapperProps) {
  return (
    <Card>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export const Examples = makePlayroomStory(
  <Stack space={2}>
    {colors.map((color) => (
      <Inline key={color} space={2}>
        {variants.map((variant) => (
          <Tag key={variant} color={color} variant={variant}>
            {startCase(variant)} {startCase(color)}
          </Tag>
        ))}
      </Inline>
    ))}
  </Stack>,
  { wrapper: Wrapper },
);