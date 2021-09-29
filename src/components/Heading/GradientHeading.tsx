import styled from "styled-components";
import GradientText from "../Text/GradientText";
import { tags, scales, HeadingProps } from "./types";

const style = {
  [scales.MD]: {
    fontSize: "20px",
    fontSizeLg: "20px",
  },
  [scales.LG]: {
    fontSize: "26px",
    fontSizeLg: "26px",
  },
  [scales.XL]: {
    fontSize: "32px",
    fontSizeLg: "40px",
  },
  [scales.XXL]: {
    fontSize: "48px",
    fontSizeLg: "64px",
  },
};

export const GradientHeading = styled(GradientText).attrs({ bold: true })<HeadingProps>`
  font-size: ${({ scale }) => style[scale || scales.LG].fontSize};
  font-weight: 600;
  line-height: 1.1;

  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: ${({ scale }) => style[scale || scales.LG].fontSizeLg};
  }
`;

GradientHeading.defaultProps = {
  as: tags.H2,
};

export default GradientHeading;
