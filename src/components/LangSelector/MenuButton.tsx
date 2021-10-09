import styled from "styled-components";
import Button from "../Button/Button";

const MenuButton = styled(Button)`
  color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;
`;

MenuButton.defaultProps = {
  variant: "text",
  size: "sm",
};

export default MenuButton;
