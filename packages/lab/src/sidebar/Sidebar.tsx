import { ColorV2, Column, Columns, useUID } from '@superdispatch/ui';
import { forwardRef, ReactNode } from 'react';
import styled from 'styled-components';
import { TextBox } from '../text-box/TextBox';

const SidebarRoot = styled.aside`
  top: 0;
  position: sticky;
  overflow-y: auto;
  overflow-x: hidden;

  height: 100vh;
  background-color: ${ColorV2.White};
  border-right: 1px solid ${ColorV2.Silver400};
`;

const SidebarHeader = styled.div`
  top: 0;
  z-index: 2;
  position: sticky;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 8px;
  background-color: ${ColorV2.White};
`;

const SidebarTitle = styled.div`
  height: 64px;
  max-height: 64px;
  display: flex;
  align-items: center;
`;

export interface SidebarProps {
  id?: string;
  title?: ReactNode;
  count?: null | number;
  header?: ReactNode;
  children?: ReactNode;
}

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  ({ title, count, header, children, id: idProp }, ref) => {
    const id = useUID(idProp);
    const titleID = `${id}-title`;

    return (
      <SidebarRoot id={id} ref={ref}>
        <SidebarHeader>
          {title && (
            <SidebarTitle>
              <Columns space="xsmall" align="center">
                <Column width="fluid">
                  <TextBox variant="heading-2" noWrap={true} id={titleID}>
                    {title}
                  </TextBox>
                </Column>

                {!!count && (
                  <Column width="content">
                    <TextBox color="secondary">{count}</TextBox>
                  </Column>
                )}
              </Columns>
            </SidebarTitle>
          )}

          {header}
        </SidebarHeader>

        <div aria-labelledby={titleID}>{children}</div>
      </SidebarRoot>
    );
  },
);
