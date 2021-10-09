import React from "react";
import Text from "../Text/Text";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import LanguageIcon from "../Svg/Icons/Language";
import MenuButton from "./MenuButton";
import { Colors } from "../../theme";
import { Language } from "./types";
import { Position } from "../Dropdown/types";
import { Scale } from "../Button/types";

interface Props {
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
  color: keyof Colors;
  dropdownPosition?: Position;
  buttonScale?: Scale;
  hideLanguage?: boolean;
  padding?: boolean;
}

const LangSelector: React.FC<Props> = ({
  currentLang,
  langs,
  color,
  setLang,
  dropdownPosition = "bottom",
  buttonScale = "sm",
  hideLanguage = false,
  padding = false,
}) => (
  <Dropdown
    position={dropdownPosition}
    target={
      <Button
        style={{ padding: padding ? "0 16px" : "0" }}
        scale={buttonScale}
        variant="text"
        startIcon={<LanguageIcon color={color} width="24px" />}
      >
        {!hideLanguage && <Text color={color}>{currentLang?.toUpperCase()}</Text>}
      </Button>
    }
  >
    {langs.map((lang) => (
      <MenuButton
        key={lang.locale}
        fullWidth
        onClick={() => setLang(lang)}
        // Safari fix
        style={{ minHeight: "32px", height: "auto" }}
      >
        {lang.language}
      </MenuButton>
    ))}
  </Dropdown>
);

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang);
