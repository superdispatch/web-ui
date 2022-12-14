import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { Color } from '@superdispatch/ui';
import {
  ComponentType,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  useMemo,
} from 'react';
import styled from 'styled-components';
import { useNavbarContext } from './NavbarContext';

const StyledBottomNavigation = styled(BottomNavigation)`
  background: ${Color.Dark500};
`;

const StyledBottomNavigationAction = styled(BottomNavigationAction)`
  && {
    background: #1b2638;
    color: ${Color.Silver500};
    padding: 6px 0 8px;
    line-height: 20px;
  }

  &:first-child {
    padding-left: 12px;
  }

  &:last-child {
    padding-right: 12px;
  }

  &.Mui-selected {
    color: ${Color.White};

    .MuiBottomNavigationAction-label {
      font-size: 0.75rem;
    }
  }
`;

const IconWrapper = styled.div`
  position: relative;
`;

const IconLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  border-radius: 50%;
  color: ${Color.White};
  background: ${Color.Red300};

  position: absolute;
  top: 0;
  right: 0;

  width: 8px;
  height: 8px;
`;

export interface NavbarBottomBarItem {
  active?: boolean;
  value: string;
  hasBadge?: boolean;
  label: ReactNode;
  icon: ReactNode;
  onClick?: () => void;
  component?: ComponentType<HTMLAttributes<HTMLElement>>;
}

interface NavbarBottomBarProps {
  items: NavbarBottomBarItem[];
  hasMenuBadge?: boolean;
}

export function NavbarBottomBar({
  items,
  hasMenuBadge,
}: NavbarBottomBarProps): ReactElement {
  const { isDrawerOpen, setDrawerOpen } = useNavbarContext();

  const activeItem = useMemo(() => items.find((item) => item.active), [items]);

  return (
    <StyledBottomNavigation
      value={activeItem?.value}
      showLabels={true}
      onChange={(_event, newValue) => {
        if (newValue) {
          if (newValue === 'menu') {
            setDrawerOpen(!isDrawerOpen);
          } else {
            setDrawerOpen(false);
          }
        }
      }}
    >
      {items.map(({ active, ...item }) => (
        <StyledBottomNavigationAction
          {...item}
          key={item.value}
          icon={
            item.hasBadge ? (
              <IconWrapper>
                <IconLabel />
                {item.icon}
              </IconWrapper>
            ) : (
              item.icon
            )
          }
        />
      ))}

      <StyledBottomNavigationAction
        value="menu"
        label="Menu"
        icon={
          hasMenuBadge ? (
            <IconWrapper>
              <IconLabel />
              <Menu fontSize="small" />
            </IconWrapper>
          ) : (
            <Menu fontSize="small" />
          )
        }
      />
    </StyledBottomNavigation>
  );
}
