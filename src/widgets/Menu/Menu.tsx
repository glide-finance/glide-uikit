import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import Flex from "../../components/Box/Flex";
import BottomNav from "../../components/BottomNav";
import LangSelector from "../../components/LangSelector/LangSelector";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./components/Logo";
import Panel from "./components/Panel";
import { NavProps } from "./types";
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledFlex = styled(Flex)`
  margin-left: 8px;
`;

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  z-index: 20;
  transform: translate3d(0, 0, 0);
`;

// border-bottom: solid 2px rgba(133, 133, 133, 0.1);
// border-bottom-left-radius: 24px;
// border-bottom-right-radius: 24px;
// margin-bottom: 50px;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
  max-width: 1450px;
  margin: 0 auto;
  margin-top: 10vh;
  margin-bottom: 10vh;
`;

//margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};

// const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
//   flex-grow: 1;
//   transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
//   transform: translate3d(0, 0, 0);
//   max-width: 100%;

//   ${({ theme }) => theme.mediaQueries.nav} {
//     margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
//     max-width: ${({ isPushed }) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px)`};
//   }
// `;

const Inner = styled.div<{ showMenu: boolean }>`
  flex-grow: 1;
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const Menu: React.FC<NavProps> = ({
  userMenu,
  globalMenu,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  glidePriceUsd,
  elaPriceUsd,
  links,
  children,
  activeItem,
  activeSubItem,
  account,
}) => {
  const { isMobile, isTablet, isDesktop } = useMatchBreakpoints();
  const hideSidebar = isMobile === true || isTablet === true;
  // const [isPushed, setIsPushed] = useState(!isMobile);
  // const [showMenu, setShowMenu] = useState(hideSidebar);
  const refPrevOffset = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      // if (isTopOfPage) {
      //   setShowMenu(true);
      // }
      // Avoid triggering anything at the bottom because of layout shift
      // else if (!isBottomOfPage) {
      //   if (currentOffset < refPrevOffset.current) {
      //     // Has scroll up
      //     setShowMenu(true);
      //   } else {
      //     // Has scroll down
      //     setShowMenu(false);
      //   }
      // }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <Wrapper>
      <StyledNav showMenu={hideSidebar}>
        <Logo
          account={account}
          // isPushed={isPushed}
          // togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
          isDark={isDark}
          href={homeLink?.href ?? "/"}
        />
        <Flex>
          <LangSelector color="textSubtle" currentLang={currentLang} langs={langs} setLang={setLang} hideLanguage />
          {globalMenu} {userMenu}
        </Flex>
      </StyledNav>
      <BodyWrapper>
        <Panel
          account={account}
          // togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
          href={homeLink?.href ?? "/"}
          // globalMenu={globalMenu}
          userMenu={userMenu}
          // isPushed={isPushed}
          isMobile={isMobile}
          showMenu={!hideSidebar}
          isDark={isDark}
          toggleTheme={toggleTheme}
          langs={langs}
          setLang={setLang}
          currentLang={currentLang}
          glidePriceUsd={glidePriceUsd}
          elaPriceUsd={elaPriceUsd}
          // pushNav={setIsPushed}
          links={links}
        />
        <Inner showMenu={!hideSidebar}>{children}</Inner>
        {/* <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" /> */}
      </BodyWrapper>
      {hideSidebar && (
        <BottomNav
          items={links}
          activeItem={activeItem}
          activeSubItem={activeSubItem}
          glidePriceUsd={glidePriceUsd}
          elaPriceUsd={elaPriceUsd}
        />
      )}
    </Wrapper>
  );
};

export default Menu;
