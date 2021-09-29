import React from "react";
import styled, { keyframes, DefaultTheme } from "styled-components";
import { Text } from "../../../components/Text";
import { Colors } from "../../../theme/types";
import { MENU_ENTRY_HEIGHT } from "../config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

// color: ${({ isPushed, theme }) => (isPushed ? theme.colors.contrast : "transparent")};

const LinkLabel = styled.div`
  color: ${({ theme }) => theme.colors.contrast};
  transition: color 0.4s;
  flex-grow: 1;
`;

  // box-shadow: ${({ isActive, theme }) => (isActive ? `inset 4px 0px 0px ${theme.colors.primary}` : "none")};

// .css-15kdn3h {
//     -webkit-box-pack: start;
//     justify-content: flex-start;
//     white-space: nowrap;
//     color: white;
//     fill: white;
//     border-radius: 20px;
//     background: linear-gradient(94.31deg, rgb(186, 40, 255) 7.48%, rgb(126, 66, 255) 94.08%);
//     padding: 8px 1rem;
// }
  // background-color: ${({ isActive, theme }) => (isActive  && `${theme.colors.primary}`)};

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary }) => (secondary ? "0 32px" : "0 16px")};
  font-size: ${({ secondary }) => (secondary ? "14px" : "16px")};
  border-radius: 20px;
  margin-bottom: 8px;
  background: ${({ isActive, theme }) => (isActive  && theme.colors.primary)};
  color: ${({ theme }) => theme.colors.contrast};

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  svg {
    fill: ${({ theme }) => theme.colors.contrast};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 400% 100%;
  }
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
};

const LinkStatus = styled(Text)<{ color: keyof Colors }>`
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 0 8px;
  border: 2px solid;
  border-color: ${({ theme, color }) => theme.colors[color]};
  box-shadow: none;
  color: ${({ theme, color }) => theme.colors[color]};
  margin-left: 8px;
`;

// const LinkLabelMemo = React.memo(LinkLabel, (prev, next) => prev.isPushed === next.isPushed);
const LinkLabelMemo = React.memo(LinkLabel);

export { MenuEntry, LinkStatus, LinkLabelMemo as LinkLabel };
