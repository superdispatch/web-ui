import {
  Divider,
  Grid,
  Menu,
  MenuItem,
  Toolbar,
  ToolbarProps,
  Typography,
} from '@material-ui/core';
import { MoreHoriz } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import {
  forwardRef,
  ForwardRefExoticComponent,
  Key,
  MouseEvent,
  ReactNode,
  RefAttributes,
  useRef,
  useState,
} from 'react';
import { Button, ButtonProps } from '../button/Button';
import { DropdownButton } from '../dropdown-button/DropdownButton';
import { useResizeObserver } from '../utils/ResizeObserver';

const useStyles = makeStyles(
  { actions: { overflow: 'hidden' } },
  { name: 'SD-AdaptiveToolbar' },
);

export interface AdaptiveToolbarDropdownItem {
  key: Key;
  label: ReactNode;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

export interface AdaptiveToolbarItem {
  key: Key;
  groupKey?: Key;
  label: ReactNode;
  dropdown?: AdaptiveToolbarDropdownItem[];
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  ButtonProps?: Omit<ButtonProps, 'type' | 'onClick'>;
}

export interface AdaptiveToolbarProps
  extends RefAttributes<HTMLDivElement>,
    Omit<ToolbarProps, 'children'> {
  items: AdaptiveToolbarItem[];
}

export const AdaptiveToolbar: ForwardRefExoticComponent<AdaptiveToolbarProps> =
  forwardRef(({ items, ...props }, ref) => {
    const styles = useStyles();

    const itemNodes = useRef<Array<null | HTMLElement>>([]);
    const optionsButtonRef = useRef<HTMLDivElement>(null);
    const [firstHiddenIdx, setFirstHiddenIdx] = useState(-1);

    const menuItems = firstHiddenIdx === -1 ? [] : items.slice(firstHiddenIdx);
    const [menuButtonNode, setMenuButtonRef] = useState<HTMLElement>();

    const [rootNode, setRootNode] = useState<null | HTMLDivElement>(null);

    useResizeObserver(rootNode, (node) => {
      const rootRect = node.getBoundingClientRect();
      const rootWidth = rootRect.left + rootRect.width;

      const optionsButtonRect =
        optionsButtonRef.current?.getBoundingClientRect();
      const optionsButtonWidth = optionsButtonRect?.width || 0;
      const maxRightPosition = rootWidth - optionsButtonWidth;

      const mountedNodes = itemNodes.current.filter(
        (x): x is HTMLDivElement => x != null,
      );
      const hiddenIdx = mountedNodes.findIndex((itemNode, idx) => {
        itemNode.removeAttribute('hidden');

        const itemRect = itemNode.getBoundingClientRect();
        const itemRightPosition = itemRect.left + itemRect.width;

        // Ignore options button width when checking last item.
        if (idx === mountedNodes.length - 1) {
          return itemRightPosition > rootWidth;
        }

        return itemRightPosition > maxRightPosition;
      });

      if (hiddenIdx !== -1) {
        mountedNodes.slice(hiddenIdx).forEach((itemNode) => {
          itemNode.setAttribute('hidden', 'true');
        });
      }

      setFirstHiddenIdx(hiddenIdx);
    });

    return (
      <Toolbar {...props} ref={ref}>
        <Grid container={true} spacing={1} ref={setRootNode}>
          <Grid item={true} className={styles.actions}>
            <Grid container={true} spacing={1} wrap="nowrap" component="div">
              {items.map((item, idx) => (
                <Grid
                  key={item.key}
                  item={true}
                  ref={(node) => {
                    itemNodes.current[idx] = node;
                  }}
                >
                  {item.dropdown ? (
                    <DropdownButton
                      type="button"
                      onClick={item.onClick}
                      label={item.label}
                      {...item.ButtonProps}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <MenuItem
                          key={dropdownItem.key}
                          onClick={dropdownItem.onClick}
                        >
                          {dropdownItem.label}
                        </MenuItem>
                      ))}
                    </DropdownButton>
                  ) : (
                    <Button
                      type="button"
                      onClick={item.onClick}
                      {...item.ButtonProps}
                    >
                      <Typography noWrap={true} variant="inherit">
                        {item.label}
                      </Typography>
                    </Button>
                  )}
                </Grid>
              ))}
            </Grid>
          </Grid>

          {menuItems.length > 0 && (
            <Grid item={true} ref={optionsButtonRef} component="div">
              <Button
                type="button"
                onClick={({ currentTarget }) => {
                  setMenuButtonRef(currentTarget);
                }}
              >
                <MoreHoriz />
              </Button>

              <Menu
                open={!!menuButtonNode}
                anchorEl={menuButtonNode}
                onClose={() => {
                  setMenuButtonRef(undefined);
                }}
              >
                {menuItems.map((item, index, arr) => {
                  const next = arr[index + 1];
                  return (
                    <>
                      <MenuItem
                        key={item.key}
                        onClick={(event) => {
                          item.onClick?.(event);
                          setMenuButtonRef(undefined);
                        }}
                      >
                        {item.label}
                      </MenuItem>

                      {item.dropdown?.map((dropdownItem) => (
                        <MenuItem
                          key={dropdownItem.key}
                          onClick={(event) => {
                            dropdownItem.onClick?.(event);
                            setMenuButtonRef(undefined);
                          }}
                        >
                          {dropdownItem.label}
                        </MenuItem>
                      ))}

                      {next && item.groupKey !== next.groupKey && <Divider />}
                    </>
                  );
                })}
              </Menu>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    );
  });
