import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../../components/Svg";
import * as IconModule from "../../../components/Svg";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel, LinkStatus } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, NavProps } from "../types";

interface Props extends PanelProps {
  isMobile: boolean;
}

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  padding: 20px 20%;
`;

const PanelBody: React.FC<Props> = ({ isMobile, links }) => {
  const location = useLocation();


  // Close the menu when a user clicks a link on mobile
  // const handleClick = isMobile ? () => pushNav(false) : undefined;

  return (
    <Container>
      {links.map((entry) => {
        const IconElement = Icons[`${entry.icon}Icon`];
        const iconProps = { width: "24px", color: "contrast", mr: "8px" };
        // const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (entry.showOnDesktop === false) {
          return 
        } else {
          return IconElement ? (
            // <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
            <MenuEntry key={entry.label} isActive={entry.href === location.pathname}>
              <MenuLink href={entry.href}>
                <IconElement {...iconProps} />
                <LinkLabel>{entry.label}</LinkLabel>
                {/* {entry.status && (
                  <LinkStatus color={entry.status.color} fontSize="14px">
                    {entry.status.text}
                  </LinkStatus>
                )} */}
              </MenuLink>
            </MenuEntry>
          ) : null;
        }
      })}
    </Container>
  );
};

export default PanelBody;



// if (entry.items) {
//           const itemsMatchIndex = entry.items.findIndex((item) => item.href === location.pathname);
//           const initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;

//           return (
//             <Accordion
//               key={entry.label}
//               isPushed={isPushed}
//               pushNav={pushNav}
//               icon={iconElement}
//               label={entry.label}
//               status={entry.status}
//               initialOpenState={initialOpenState}
//               className={calloutClass}
//               isActive={entry.items.some((item) => item.href === location.pathname)}
//             >
//               {isPushed &&
//                 entry.items.map((item) => (
//                   <MenuEntry key={item.href} secondary isActive={item.href === location.pathname} onClick={handleClick}>
//                     <MenuLink href={item.href}>
//                       <LinkLabel isPushed={isPushed}>{item.label}</LinkLabel>
//                       {item.status && (
//                         <LinkStatus color={item.status.color} fontSize="14px">
//                           {item.status.text}
//                         </LinkStatus>
//                       )}
//                     </MenuLink>
//                   </MenuEntry>
//                 ))}
//             </Accordion>
//           );
//   }