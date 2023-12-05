import { FormControlLabel, FormGroup, Switch } from '@material-ui/core';
import { UseState } from '@superdispatch/ui-docs';
import {
  Button,
  Inline,
  Snackbar,
  SnackbarContent,
  SnackbarStackConsumer,
} from '..';
import { Stack } from '../stack/Stack';

export default {
  title: 'Feedback/Snackbar',
  component: Snackbar,
  subcomponents: { SnackbarContent },
};

export const basic = () => (
  <UseState initialState={false}>
    {(open, setOpen) => (
      <>
        <Button
          onClick={() => {
            setOpen(!open);
          }}
        >
          Toggle snackbar visibility
        </Button>

        <Snackbar open={open}>This is a basic snackbar</Snackbar>
      </>
    )}
  </UseState>
);

export const closable = () => (
  <UseState initialState={false}>
    {(open, setOpen) => (
      <>
        <Button
          onClick={() => {
            setOpen(!open);
          }}
        >
          Toggle snackbar visibility
        </Button>

        <Snackbar
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        >
          This snackbar has a close button
        </Snackbar>
      </>
    )}
  </UseState>
);

export const variants = () => (
  <UseState initialState={{}}>
    {(props, setProps) => (
      <>
        <FormGroup row={true}>
          <FormControlLabel
            label="Default"
            control={<Switch />}
            checked={!!props.open && !props.variant}
            onChange={(_, checked) => {
              setProps({
                ...props,
                open: checked,
                variant: undefined,
              });
            }}
          />

          <FormControlLabel
            label="Success"
            control={<Switch />}
            checked={props.variant === 'success'}
            onChange={(_, checked) => {
              setProps({
                ...props,
                open: checked,
                variant: checked ? 'success' : undefined,
              });
            }}
          />

          <FormControlLabel
            label="Error"
            control={<Switch />}
            checked={props.variant === 'error'}
            onChange={(_, checked) => {
              setProps({
                ...props,
                open: checked,
                hasCloseButton: true,
                variant: checked ? 'error' : undefined,
              });
            }}
          />
        </FormGroup>

        <Snackbar {...props}>This is snackbar content</Snackbar>
      </>
    )}
  </UseState>
);

export const stack = () => (
  <SnackbarStackConsumer>
    {({ addSnackbar, clearStack }) => {
      const getTime = () => new Date().toISOString().slice(11, 23);

      return (
        <Inline>
          <Button
            onClick={() => {
              addSnackbar(`This is default snackbar (${getTime()})`);
            }}
          >
            Add default snackbar
          </Button>
          <Button
            onClick={() => {
              addSnackbar(`This is success snackbar (${getTime()})`, {
                variant: 'success',
              });
            }}
          >
            Add success snackbar
          </Button>
          <Button
            onClick={() => {
              addSnackbar(`This is error snackbar (${getTime()})`, {
                variant: 'error',
              });
            }}
          >
            Add error snackbar
          </Button>

          <Button
            onClick={() => {
              clearStack();
            }}
          >
            Clear stack
          </Button>
        </Inline>
      );
    }}
  </SnackbarStackConsumer>
);

export const undoable = () => (
  <SnackbarStackConsumer>
    {({ addSnackbar, clearStack }) => (
      <Button
        onClick={() => {
          clearStack();

          const trxID = Math.random().toString(32).slice(2, 8).toUpperCase();
          const closeSnackbar = addSnackbar(
            <span>
              Transaction <strong>#{trxID}</strong> confirmed
            </span>,
            {
              variant: 'success',
              action: (
                <Button
                  size="small"
                  color="white"
                  variant="contained"
                  onClick={() => {
                    closeSnackbar();
                    addSnackbar(
                      <span>
                        Transaction <strong>#{trxID}</strong> rejected
                      </span>,
                    );
                  }}
                >
                  Reject
                </Button>
              ),
            },
          );
        }}
      >
        Confirm transaction
      </Button>
    )}
  </SnackbarStackConsumer>
);

export const lotOfText = () => (
  <SnackbarStackConsumer>
    {({ addSnackbar, clearStack }) => (
      <Button
        onClick={() => {
          clearStack();

          const closeSnackbar = addSnackbar(
            <Stack>
              <span>
                The following information is missing. Edit the order and provide
                this information:
              </span>
              <ul style={{ padding: '0 0 0 1rem', margin: 0 }}>
                <li>Delivery information: City, State and ZIP code</li>
                <li>Pickup information: City, State and ZIP code</li>
                <li>Vehicles: Make and Model</li>
                <li>Price: Total Carrier Price can not be empty</li>
              </ul>
              <Button
                size="small"
                variant="outlined"
                onClick={() => {
                  closeSnackbar();
                }}
              >
                Edit Order
              </Button>
            </Stack>,
            {
              variant: 'error',
              hasCloseButton: true,
              autoHideDuration: 99999,
            },
          );
        }}
      >
        Snackbar with a lot of text
      </Button>
    )}
  </SnackbarStackConsumer>
);
