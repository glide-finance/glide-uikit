import React from "react";
import styled from "styled-components";
import { CogIcon } from "../../../components/Svg";
import IconButton from "../../../components/Button/IconButton";
import Flex from "../../../components/Box/Flex";
import { MENU_ENTRY_HEIGHT } from "../config";
import { PanelProps, PushedProps } from "../types";
import ThemeSwitcher from "./ThemeSwitcher";
import SocialLinks from "./SocialLinks";
import LangSelector from "./LangSelector";
import CakePrice from "./CakePrice";

interface Props extends PanelProps, PushedProps {}

// const Container = styled.div`
//   flex: none;
//   padding: 8px 4px;
//   background-color: ${({ theme }) => theme.nav.background};
//   border-top: solid 2px rgba(133, 133, 133, 0.1);
// `;

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;

const PriceFlex = styled(Flex)`
    -webkit-box-pack: center;
    justify-content: center;
    margin-bottom: 16px;
    margin-top: 8px;
    width: 80%;
    border: 2px solid rgba(133, 133, 133, 0.1);
    border-radius: 10px;
`;

// border-top: solid 2px rgba(133, 133, 133, 0.1);
const PriceRow = styled(Flex)`
    -webkit-box-pack: center;
    justify-content: center;
`

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  currentLang,
  langs,
  setLang,
  glidePriceUsd,
  elaPriceUsd
}) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container>
      <PriceRow>
          <PriceFlex>
            <CakePrice glidePriceUsd={glidePriceUsd} elaPriceUsd={elaPriceUsd} />
          </PriceFlex>
      </PriceRow>
      {/* <SettingsEntry> */}
        {/* <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} /> */}
      {/* </SettingsEntry> */}
      <SocialEntry>
        {/* <LangSelector currentLang={currentLang} langs={langs} setLang={setLang} /> */}
        <SocialLinks />
      </SocialEntry>
    </Container>
  );
};

export default PanelFooter;
