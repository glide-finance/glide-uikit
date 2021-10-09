import { BoxProps } from "../Box";
import { DropdownMenuItems } from "../DropdownMenu/types";

export type MenuItemsType = {
  label: string;
  href: string;
  icon: string;
  items?: DropdownMenuItems[];
  showOnMobile?: boolean;
  showOnDesktop?: boolean;
  showItemsOnMobile?: boolean;
  glidePriceUsd?: number;
  elaPriceUsd?: number;
};

export interface MenuItemsProps extends BoxProps {
  items: MenuItemsType[];
  activeItem?: string;
  activeSubItem?: string;
}
