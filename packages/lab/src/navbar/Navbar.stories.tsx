import {
  AccountCircle as ProfileIcon,
  AllInbox,
  Dashboard,
  ExitToApp,
  Notifications,
  People,
  Settings,
} from '@material-ui/icons';
import { Meta } from '@storybook/react';
import { noop } from 'lodash';
import { Box, Navbar, NavbarAvatar, NavbarMenu, TextBox } from '../..';

export default {
  title: 'Lab/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const bottomItems = [
  {
    value: '/orders',
    label: 'All Orders',
    icon: <AllInbox fontSize="small" />,
  },
  {
    label: 'Customers',
    value: 'Customers',
    icon: <People />,
  },
  {
    value: 'profile',
    label: 'Profile',
    icon: <ProfileIcon />,
  },
];

const menuItems = [
  {
    key: 'profile',
    icon: <ProfileIcon />,
    label: 'Profile',
    onClick: noop,
  },
  {
    key: 'notification-settings',
    icon: <Notifications />,
    label: 'Notification Settings',
    onClick: noop,
  },
  {
    key: 'logout',
    icon: <ExitToApp />,
    label: 'Log Out',
    onClick: noop,
  },
];

const items = [
  {
    icon: <People />,
    label: 'Customers',
    groupKey: 1,
    key: 'Customers',
  },
  {
    icon: <Settings />,
    label: 'Settings',
    groupKey: 2,
    key: 'Settings',
  },
  {
    icon: <Dashboard />,
    label: 'Dashboard',
    groupKey: 2,
    key: 'Dashbaord',
  },
  {
    icon: <AllInbox />,
    label: 'Orders',
    groupKey: 3,
    key: 'Orders',
    items: [
      {
        icon: <People />,
        label: 'Customers',
        groupKey: 2,
        key: 'Customers',
      },
      {
        icon: <Settings />,
        label: 'Settings',
        groupKey: 2,
        key: 'Settings',
        active: true,
      },
    ],
  },
];

export const basic = () => {
  return (
    <Box height="100vh">
      <Navbar
        items={items}
        bottomItems={bottomItems}
        header={
          <TextBox variant="heading-3" color="white">
            Super Navbar
          </TextBox>
        }
        footer={
          <NavbarMenu items={menuItems}>
            <NavbarAvatar
              title="John"
              subtitle="Smith"
              src="https://source.unsplash.com/featured/256x256/?avatar"
            >
              JS
            </NavbarAvatar>
          </NavbarMenu>
        }
      >
        Hello
      </Navbar>
    </Box>
  );
};
