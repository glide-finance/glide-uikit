import styled, { DefaultTheme } from "styled-components";
import { space, typography, layout } from "styled-system";
import getThemeValue from "../../util/getThemeValue";
import { TextProps } from "./types";

interface ThemedProps extends TextProps {
  theme: DefaultTheme;
}

const getGradient = ({ color, theme }: ThemedProps) => {
  return getThemeValue(`colors.gradients.${color}`, color)(theme);
};

const getFontSize = ({ fontSize, small }: TextProps) => {
  return small ? "14px" : fontSize || "16px";
};

// const GradientText = styled.div<TextProps>`
//   color: ${getColor};
//   font-size: ${getFontSize};
//   font-weight: ${({ bold }) => (bold ? 600 : 400)};
//   line-height: 1.5;
//   ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
//   ${({ ellipsis }) =>
//     ellipsis &&
//     `white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;`}

//   ${space}
//   ${typography}
//   ${layout}
// `;

const GradientText = styled.div<TextProps>`
  display:inline-block; 
  font-size: ${getFontSize};
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  line-height: 1.5;
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${({ ellipsis }) =>
    ellipsis &&
    `white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;`}

  ${space}
  ${typography}
  ${layout}
  background-color: #F2AD6C;
  background-image: ${getGradient};
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -webkit-text-fill-color: transparent;
`;

GradientText.defaultProps = {
  color: "text",
  small: false,
  ellipsis: false,
};

export default GradientText;
