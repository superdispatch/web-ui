import { Tab, Tabs } from '@mui/material';
import { Meta } from '@storybook/react';
import { UseState } from '@superdispatch/ui-docs';

export default { title: 'Navigation/Tabs', parameters: { v5: true } } as Meta;

export const basic = () => (
  <UseState initialState={1}>
    {(state, setState) => (
      <Tabs
        value={state}
        onChange={(_, next) => {
          setState(next);
        }}
      >
        <Tab value={1} label="Tab 1" />
        <Tab value={2} label="Tab 2" />
        <Tab value={3} label="Tab 3" />
      </Tabs>
    )}
  </UseState>
);

export const scrollButtons = () => (
  <UseState initialState={1}>
    {(state, setState) => (
      <Tabs
        value={state}
        scrollButtons="auto"
        allowScrollButtonsMobile={true}
        onChange={(_, next) => {
          setState(next);
        }}
      >
        <Tab value={1} label="Tab 1" />
        <Tab value={2} label="Tab 2" />
        <Tab value={3} label="Tab 3" />
      </Tabs>
    )}
  </UseState>
);