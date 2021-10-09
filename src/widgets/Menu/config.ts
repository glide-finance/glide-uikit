import { noop } from "lodash";
import { DropdownMenuItems, DropdownMenuItemType } from "../../components/DropdownMenu/types";
import { MenuItemsType } from "../../components/MenuItems/types";
import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links: MenuItemsType[] = [
  {
    label: "Trade",
    href: "/swap",
    icon: "Trade",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.pancakeswap.finance",
      },
      {
        label: "Liquidity",
        href: "https://exchange.pancakeswap.finance/#/pool",
      },
    ],
  },
  {
    label: 'Farm',
    icon: 'Farm',
    href: '/farms',
  },
  {
    label: '',
    href: '/info',
    icon: 'More',
    showOnDesktop: false,
    items: [
      {
        type: DropdownMenuItemType.PRICE,
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        type: DropdownMenuItemType.SOCIALS,
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      }
    ],
  }
];

export const userMenulinks: DropdownMenuItems[] = [
  {
    label: "Wallet",
    onClick: noop,
    type: DropdownMenuItemType.BUTTON,
  },
  {
    label: "Transactions",
    type: DropdownMenuItemType.BUTTON,
  },
  {
    type: DropdownMenuItemType.DIVIDER,
  },
  {
    type: DropdownMenuItemType.BUTTON,
    disabled: true,
    label: "Dashboard",
  },
  {
    type: DropdownMenuItemType.BUTTON,
    disabled: true,
    label: "Portfolio",
  },
  {
    label: "Profile",
    href: "/profile",
  },
  {
    type: DropdownMenuItemType.EXTERNAL_LINK,
    href: "https://pancakeswap.finance",
    label: "Link",
  },
  {
    type: DropdownMenuItemType.DIVIDER,
  },
  {
    type: DropdownMenuItemType.BUTTON,
    onClick: noop,
    label: "Disconnect",
  },
];


// Social icons config
export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/GlideFinance",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    // items: [
    //   {
    //     label: "English",
    //     href: "https://t.me/glide_finance",
    //   },
    // ],
    href: "https://t.me/glide_finance"
  },
  {
    label: "Medium",
    icon: "Medium",
    href: "https://medium.com/glide-finance"
  },
  {
    label: "Docs",
    icon: "Gitbook",
    href: "https://docs.glidefinance.io"
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/glide-finance"
  }
];


export const MENU_HEIGHT = 56;
export const MENU_ENTRY_HEIGHT = 40;
export const MOBILE_MENU_HEIGHT = 44;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
