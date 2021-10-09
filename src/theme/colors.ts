import { Colors } from "./types";

// export const baseColors = {
//   failure: "#ED4B9E",
//   primary: "#1FC7D4",
//   primaryBright: "#53DEE9",
//   primaryDark: "#0098A1",
//   secondary: "#7645D9",
//   success: "#31D0AA",
//   warning: "#FFB237",
// };

// export const additionalColors = {
//   binance: "#F0B90B",
//   overlay: "#452a7a",
//   gold: "#FFC700",
//   silver: "#B2B2B2",
//   bronze: "#E7974D",
// };

export const baseColors = {
  failure: "#d11576", // #5d095d
  primary: "#f1a35b",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#2d75b9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#060914",
  gold: "#FFC700",
  silver: "#B2B2B2",
  bronze: "#E7974D",
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#f3b072",
  background: "#09101a",
  backgroundDisabled: "#242c42",
  backgroundAlt: " #0e1730",
  cardBorder: " transparent", // #383241
  contrast: "#FFFFFF",
  dropdown: "#173c5f",
  dropdownDeep: "#0d1726",
  invertedContrast: "#000",
  input: "#173c5f",
  inputSecondary: "#0e1730",
  primaryDark: "#0098A1",
  tertiary: "#3d455c",
  text: "#F4EEFF",
  textDisabled: " #606471",
  textSubtle: "#ADB6D2",
  disabled: "#242c42", 
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #0E1730 0%, #173560 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #173560 0%, #0E1730 100%)",
    cardHeader: "linear-gradient(139.73deg, #0E1730 0%, #173560 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
    glide: "linear-gradient(45deg, #F2AD6C 15%, #FFF 125%)"
  },
};

// export const darkColors: Colors = {
//   ...baseColors,
//   ...additionalColors,
//   secondary: "#F2AD6C",
//   background: "rgb(30, 30, 30)", //#09101a",
//   backgroundDisabled: "rgb(39, 39, 39)",
//   backgroundAlt: "rgb(13, 13, 13)", // #0e1730",
//   cardBorder: "rgb(30, 30, 30)", // #09101a", // #383241
//   contrast: "#FFFFFF",
//   dropdown: "#1E1D20",
//   dropdownDeep: "#100C18",
//   invertedContrast: "#191326",
//   input: "rgb(39, 39, 39)", // #173c5f",
//   inputSecondary: "#262130",
//   primaryDark: "#0098A1",
//   tertiary: "#353547",
//   text: "#F4EEFF",
//   textDisabled: "#8C8C8C", // #666171",
//   textSubtle: "#ADADAD", // B8ADD2
//   disabled: "#524B63", 
//   gradients: {
//     bubblegum: "linear-gradient(139.73deg, #0E1730 0%, #173560 100%)",
//     inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
//     cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
//     blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
//     violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
//     violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
//     gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
//     glide: "linear-gradient(180deg, #F2AD6C 0%, #FFF 100%)"
//   },
// };

//   bubblegum: "linear-gradient(139.73deg, #0E1730 0%, #173560 100%)",
// bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",0e1730


export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  cardBorder: "#E7E3EB",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#280D5F",
  textDisabled: "#BDC2C4",
  textSubtle: "#7A6EAA",
  disabled: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
    glide: "linear-gradient(180deg, #F2AD6C 0%, #FFF 100%)"
  },
};

// export const lightColors: Colors = {
//   ...baseColors,
//   ...additionalColors,
//   background: "#FAF9FA",
//   backgroundDisabled: "#E9EAEB",
//   backgroundAlt: "#FFFFFF",
//   cardBorder: "#E7E3EB",
//   contrast: "#191326",
//   dropdown: "#F6F6F6",
//   dropdownDeep: "#EEEEEE",
//   invertedContrast: "#FFFFFF",
//   input: "#eeeaf4",
//   inputSecondary: "#d7caec",
//   tertiary: "#EFF4F5",
//   text: "#280D5F",
//   textDisabled: "#BDC2C4",
//   textSubtle: "#7A6EAA",
//   disabled: "#E9EAEB",
//   gradients: {
//     bubblegum: "linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",
//     inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
//     cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
//     blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
//     violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
//     violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
//     gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
//   },
// };

// export const darkColors: Colors = {
//   ...baseColors,
//   ...additionalColors,
//   secondary: "#9A6AFF",
//   background: "#08060B",
//   backgroundDisabled: "#3c3742",
//   backgroundAlt: "#27262c",
//   cardBorder: "#383241",
//   contrast: "#FFFFFF",
//   dropdown: "#1E1D20",
//   dropdownDeep: "#100C18",
//   invertedContrast: "#191326",
//   input: "#372F47",
//   inputSecondary: "#262130",
//   primaryDark: "#0098A1",
//   tertiary: "#353547",
//   text: "#F4EEFF",
//   textDisabled: "#666171",
//   textSubtle: "#B8ADD2",
//   disabled: "#524B63",
//   gradients: {
//     bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
//     inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
//     cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
//     blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
//     violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
//     violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
//     gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
//   },
// };
