import React from "react";
import { ReactElement } from "react";
import styled from "styled-components";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import Flex from "../../../components/Box/Flex";
import Logo from "./Logo";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "../config";
import { PanelProps, NavProps } from "../types";

interface Props extends PanelProps {
  showMenu: boolean;
  isMobile: boolean;
}

const StyledPanel = styled.div<{ showMenu: boolean }>`
  padding-top: 20px;
  top: 0;
  left: 0;
  display: none;
  border-radius: 20px;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(135deg, #0e1730 19%, rgba(23, 53, 96, 0.5) 100%);
  flex-shrink: 0;
  width: ${SIDEBAR_WIDTH_FULL}px;
  height: 100%;
  transition: padding-top 0.2s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 11;
  overflow: "initial"
  transform: translate3d(0, 0, 0);
  white-space: nowrap;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-left: 20px;
    display: flex;
  }
`;

const StyledFlex = styled(Flex)`
  margin: 0 auto;
  padding: 20px 0 15px 0;
`;

const Panel: React.FC<Props> = (props) => {
  const { showMenu } = props;
  const { isDark, href, userMenu, glidePriceUsd, elaPriceUsd } = props;
  return (
    <StyledPanel showMenu={showMenu}>
      <Logo isDark={isDark} href={href} />
      <StyledFlex>
        {/* {globalMenu} */}
        {userMenu}
      </StyledFlex>
      <PanelBody {...props} />
      <PanelFooter {...props} />
    </StyledPanel>
  );
};

export default Panel;




// padding-top: ${({ showMenu }) => (showMenu ? "80px" : 0)};
// const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean }>`
//   position: fixed;
//   padding-top: 20px;
//   top: 0;
//   left: 0;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   flex-shrink: 0;
//   background-color: ${({ theme }) => theme.nav.background};
//   width: ${({ isPushed }) => (isPushed ? `${SIDEBAR_WIDTH_FULL}px` : 0)};
//   height: 100%;
//   transition: padding-top 0.2s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1);
//   border-right: ${({ isPushed }) => (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0)};
//   z-index: 11;
//   overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
//   transform: translate3d(0, 0, 0);
//   ${({ isPushed }) => !isPushed && "white-space: nowrap;"};

//   ${({ theme }) => theme.mediaQueries.nav} {
//     border-right: 2px solid rgba(133, 133, 133, 0.1);
//     width: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
//   }
// `;