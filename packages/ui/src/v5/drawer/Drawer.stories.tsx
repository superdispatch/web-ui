import isLokiRunning from '@loki/is-loki-running';
import {
  ArrowBack as ArrowBackIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import {
  Drawer,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
} from '@mui/material';
import { Meta } from '@storybook/react';
import { PropsLink, UseState } from '@superdispatch/ui-docs';
import { Box } from '@superdispatch/ui-lab';
import { Button, Inline, Stack } from '..';
import { DrawerActions } from './DrawerActions';
import { DrawerContent } from './DrawerContent';
import { DrawerList } from './DrawerList';
import { DrawerTitle } from './DrawerTitle';

export default {
  title: 'Navigation/Drawer',
  component: DrawerTitle,
  subcomponents: { DrawerList },
  parameters: {
    v5: true,
    componentSubtitle: (
      <PropsLink url="https://material-ui.com/api/drawer/#props" />
    ),
  },
  decorators: [
    (Story) => (
      <Box minHeight="900px">
        <Story />
      </Box>
    ),
  ],
} as Meta;

const initialState = isLokiRunning();

export const basic = () => (
  <UseState initialState={initialState}>
    {(state, setState) => (
      <>
        <Button
          onClick={() => {
            setState(true);
          }}
        >
          Open Drawer
        </Button>

        <Drawer
          open={state}
          onClose={() => {
            setState(false);
          }}
        >
          <DrawerTitle title="Title" subtitle="Subtitle" />

          <DrawerContent>
            <Stack>
              <TextField fullWidth={true} label="Field 1" />
              <TextField fullWidth={true} label="Field 2" />
              <TextField fullWidth={true} label="Field 3" />
              <TextField fullWidth={true} label="Field 4" />
            </Stack>
          </DrawerContent>

          <DrawerActions>
            <Inline space="small">
              <Button color="primary" variant="contained">
                Primary
              </Button>

              <Button color="primary" variant="outlined">
                Secondary
              </Button>
            </Inline>
          </DrawerActions>
        </Drawer>
      </>
    )}
  </UseState>
);

export const titleStartAction = () => (
  <UseState initialState={initialState}>
    {(state, setState) => (
      <>
        <Button
          onClick={() => {
            setState(true);
          }}
        >
          Open Drawer
        </Button>

        <Drawer
          open={state}
          onClose={() => {
            setState(false);
          }}
        >
          <DrawerTitle
            title="Title"
            startAction={
              <IconButton edge="start">
                <ArrowBackIcon />
              </IconButton>
            }
          />
        </Drawer>
      </>
    )}
  </UseState>
);

export const titleEndAction = () => (
  <UseState initialState={initialState}>
    {(state, setState) => (
      <>
        <Button
          onClick={() => {
            setState(true);
          }}
        >
          Open Drawer
        </Button>

        <Drawer
          open={state}
          onClose={() => {
            setState(false);
          }}
        >
          <DrawerTitle
            title="Title"
            startAction={
              <IconButton edge="start">
                <ArrowBackIcon />
              </IconButton>
            }
          />
        </Drawer>
      </>
    )}
  </UseState>
);

export const drawerList = () => (
  <UseState initialState={initialState}>
    {(state, setState) => (
      <>
        <Button
          onClick={() => {
            setState(true);
          }}
        >
          Open Drawer
        </Button>

        <Drawer
          open={state}
          onClose={() => {
            setState(false);
          }}
        >
          <DrawerTitle title="Title" />

          <DrawerList>
            {Array.from({ length: 30 }, (_, idx) => (
              <ListItem key={idx} button={true} ContainerComponent="div">
                <ListItemText
                  primary={`Primary text #${idx + 1}`}
                  secondary={`Secondary text #${idx + 1}`}
                />

                <ListItemSecondaryAction>
                  <IconButton edge="end">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </DrawerList>

          <DrawerActions>
            <Inline space="small">
              <Button color="primary" variant="contained">
                Primary
              </Button>

              <Button color="primary" variant="outlined">
                Secondary
              </Button>
            </Inline>
          </DrawerActions>
        </Drawer>
      </>
    )}
  </UseState>
);
