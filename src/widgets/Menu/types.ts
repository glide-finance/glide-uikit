import { ReactElement } from "react";
import { FooterLinkType } from "../../components/Footer/types";
import { MenuItemsType } from "../../components/MenuItems/types";
import { SubMenuItemsType } from "../../components/SubMenuItems/types";
import { Colors } from "../../theme/types";

export interface Language {
  code: string;
  language: string;
  locale: string;
}

// export interface PushedProps {
//   isPushed: boolean;
//   pushNav: (isPushed: boolean) => void;
// }

export interface NavTheme {
  background: string;
}

export interface LinkStatus {
  text: string;
  color: keyof Colors;
}

export interface MenuSubEntry {
  label: string;
  href: string;
  calloutClass?: string;
  status?: LinkStatus;
}

export interface MenuEntry {
  label: string;
  icon: string;
  items?: MenuSubEntry[];
  href?: string;
  calloutClass?: string;
  initialOpenState?: boolean;
  status?: LinkStatus;
}

export interface PanelProps {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
  glidePriceUsd?: number;
  elaPriceUsd?: number;
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
  // togglePush: () => void;
  links: Array<MenuItemsType>;
  userMenu?: ReactElement;
  // globalMenu?: ReactElement;
  href: string;
}

export interface NavProps {
  userMenu?: ReactElement;
  globalMenu?: ReactElement;
  links: Array<MenuItemsType>;
  subLinks: Array<SubMenuItemsType>;
  footerLinks: Array<FooterLinkType>;
  activeItem: string;
  activeSubItem: string;
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
  glidePriceUsd?: number;
  elaPriceUsd?: number;
  currentLang: string;
  buyCakeLabel: string;
  langs: Language[];
  setLang: (lang: Language) => void;
}
