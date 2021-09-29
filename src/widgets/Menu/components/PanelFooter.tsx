import React from "react";
import styled from "styled-components";
import { CogIcon } from "../../../components/Svg";
import IconButton from "../../../components/Button/IconButton";
import Flex from "../../../components/Box/Flex";
import { MENU_ENTRY_HEIGHT } from "../config";
import { PanelProps } from "../types";
import ThemeSwitcher from "../../../components/ThemeSwitcher/ThemeSwitcher";
import SocialLinks from "./SocialLinks";
import LangSelector from "../../../components/LangSelector/LangSelector";
import CakePrice from "../../../components/CakePrice/CakePrice";

interface Props extends PanelProps {}

// const Container = styled.div`
//   flex: none;
//   padding: 8px 4px;
//   background-color: ${({ theme }) => theme.nav.background};
//   border-top: solid 2px rgba(133, 133, 133, 0.1);
// `;

const Container = styled.div`
  flex: none;
  padding: 8px 2px;
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
    margin-bottom: 20px;
    margin-top: 8px;
    width: 90%;
    padding: 2px;
    border-radius: 10px;
`;

//  border: 1px solid ${({ theme }) => theme.colors.textSubtle};

const PriceRow = styled(Flex)`
    -webkit-box-pack: center;
    justify-content: center;
`

const PanelFooter: React.FC<Props> = ({
  // isPushed,
  // pushNav,
  toggleTheme,
  isDark,
  currentLang,
  langs,
  setLang,
  glidePriceUsd,
  elaPriceUsd
}) => {
  // if (!isPushed) {
  //   return (
  //     <Container>
  //       <IconButton variant="text" onClick={() => pushNav(true)}>
  //         <CogIcon />
  //       </IconButton>
  //     </Container>
  //   );
  // }

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
