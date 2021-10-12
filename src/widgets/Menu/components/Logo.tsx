import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon, LogoWithTextIcon } from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import MenuButton from "./MenuButton";
import { useMatchBreakpoints } from "../../../hooks";

interface Props {
  isDark: boolean;
  href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); } 
  50% { transform:  scaleY(0.1); } 
`;

// const StyledLink = styled(Link)`
//   display: flex;
//   align-items: center;
//   margin: 0 auto;
//   .mobile-icon {
//     width: 32px;
//     ${({ theme }) => theme.mediaQueries.nav} {
//       display: none;
//     }
//   }
//   .desktop-icon {
//     width: 160px;
//     display: none;
//     ${({ theme }) => theme.mediaQueries.nav} {
//       display: block;
//     }
//   }
//   .right-eye {
//     animation-delay: 20ms;
//   }
//   &:hover {
//     .left-eye,
//     .right-eye {
//       transform-origin: center 60%;
//       animation-name: ${blink};
//       animation-duration: 350ms;
//       animation-iteration-count: 1;
//     }
//   }
// `;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0 auto;
  .mobile-icon {
    width: 40px;
    ${({ theme }) => theme.mediaQueries.lg} {
      display: none;
    }
  }
  .desktop-icon {
    display: none;
    ${({ theme }) => theme.mediaQueries.lg} {
      display: block;
    }
  }
  .right-eye {
    animation-delay: 20ms;
  }
  &:hover {
    .left-eye,
    .right-eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;

const Logo: React.FC<Props> = ({ isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const { isMobile, isTablet, isDesktop } = useMatchBreakpoints();

  const innerLogo = (
    <>
      {isMobile || isTablet ? (
        <LogoWithTextIcon /> // LogoIcon
      ) : (
        <LogoWithTextIcon />
      )}
      {/* {(isMobile || isTablet) && !account ? <LogoIcon /> : <LogoWithTextIcon />} */}
    </>
  );

  return (
    <Flex style={{ marginLeft: "10px" }}>
      {/* <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </MenuButton> */}
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Glide home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Glide home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
