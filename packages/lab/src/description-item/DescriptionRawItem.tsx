import { Typography } from '@material-ui/core';
import { Color, Column, Columns } from '@superdispatch/ui';
import { forwardRef } from 'react';
import styled from 'styled-components';

export const DottedLine = styled.div`
  border-bottom: 1px dashed ${Color.Silver400};
  margin: 0px 8px;
  height: 7px;
`;

interface DescriptionRawItemProps {
  title: string;
  value: string | number | JSX.Element;
  boldValue?: boolean;
}

export const DescriptionRawItem = forwardRef<
  HTMLDivElement,
  DescriptionRawItemProps
>(({ title, value, boldValue }, ref) => (
  <Columns ref={ref} align="center">
    <Column width="content">
      <Typography color="textSecondary" gutterBottom={true}>
        {title}
      </Typography>
    </Column>
    <Column width="fluid">
      <DottedLine />
    </Column>
    <Column width="content">
      <Typography
        align="right"
        color="textPrimary"
        variant={boldValue ? 'h4' : 'body2'}
      >
        {value}
      </Typography>
    </Column>
  </Columns>
));
