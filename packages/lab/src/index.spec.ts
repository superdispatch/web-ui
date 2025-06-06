import * as api from '.';

test('api', () => {
  expect(api).toMatchInlineSnapshot(`
    Object {
      "Alert": React.forwardRef(Alert),
      "AnchorButton": React.forwardRef(AnchorButton),
      "Banner": React.forwardRef(Banner),
      "Box": React.forwardRef(Box),
      "Button": React.forwardRef(Button),
      "ButtonArea": React.forwardRef(ButtonArea),
      "Chat": React.forwardRef(Chat),
      "ChatMessage": React.forwardRef(ChatMessage),
      "Container": React.forwardRef(Container),
      "DescriptionItem": React.forwardRef(DescriptionItem),
      "DescriptionLineItem": React.forwardRef(DescriptionLineItem),
      "DottedLine": React.forwardRef(DescriptionLineItem__DottedLine),
      "FileDropZone": React.forwardRef(FileDropZone),
      "FileListItem": React.forwardRef(FileListItem),
      "FlagList": React.forwardRef(FlagList),
      "FlagListItem": React.forwardRef(FlagListItem),
      "LinkedText": [Function],
      "MultilineText": React.forwardRef(MultilineText),
      "Navbar": [Function],
      "NavbarAvatar": [Function],
      "NavbarBadge": React.forwardRef(NavbarItem__NavbarBadge),
      "NavbarBottomBar": [Function],
      "NavbarItem": [Function],
      "NavbarLabel": React.forwardRef(NavbarItem__NavbarLabel),
      "NavbarList": [Function],
      "NavbarMenu": [Function],
      "NavbarMenuItem": [Function],
      "Sidebar": React.forwardRef(Sidebar),
      "SidebarBackButton": [Function],
      "SidebarContainer": React.forwardRef(SidebarContainer),
      "SidebarContent": [Function],
      "SidebarDivider": React.forwardRef(SidebarDivider),
      "SidebarMenuItem": React.forwardRef(SidebarMenuItem),
      "SidebarMenuItemAction": React.forwardRef(SidebarMenuItemAction),
      "SidebarMenuItemAvatar": React.forwardRef(SidebarMenuItemAvatar),
      "SidebarSubheader": React.forwardRef(SidebarSubheader),
      "TextBox": React.forwardRef(TextBox),
      "formatBytes": [Function],
      "toBytes": [Function],
      "useNavbarContext": [Function],
      "useSidebarContext": [Function],
    }
  `);
});
