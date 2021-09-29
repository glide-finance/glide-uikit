import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "../config";
import { LinkLabel, LinkStatus as LinkStatusComponent, MenuEntry } from "./MenuEntry";
import { LinkStatus } from "../types";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../../../components/Svg";

interface Props {
  label: string;
  status?: LinkStatus;
  icon: React.ReactElement;
  initialOpenState?: boolean;
  className?: string;
  children: ReactNode;
  isActive?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // Safari fix
  flex-shrink: 0;
`;

const AccordionContent = styled.div<{ isOpen: boolean, maxHeight: number }>`
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : 0)};
  transition: max-height 0.3s ease-out;
  overflow: hidden;
  border-color: ${({ isOpen }) => (isOpen ? "rgba(133, 133, 133, 0.1)" : "transparent")};
  border-style: solid;
  border-width: 1px 0;
`;

const Accordion: React.FC<Props> = ({
  label,
  status,
  icon,
  initialOpenState = false,
  children,
  className,
  isActive,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpenState);
  // const handleClick = () => {
  //   if (isPushed) {
  //     setIsOpen((prevState) => !prevState);
  //   } else {
  //     pushNav(true);
  //     setIsOpen(true);
  //   }
  // };

  return (
    <Container>
      <MenuEntry className={className} isActive={isActive} role="button">
        {icon}
        <LinkLabel>{label}</LinkLabel>
        {status && (
          <LinkStatusComponent color={status.color} fontSize="14px">
            {status.text}
          </LinkStatusComponent>
        )}
        {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </MenuEntry>
      <AccordionContent
        isOpen={isOpen}
        // isPushed={isPushed}
        maxHeight={React.Children.count(children) * MENU_ENTRY_HEIGHT}
      >
        {children}
      </AccordionContent>
    </Container>
  );
};

export default Accordion;
