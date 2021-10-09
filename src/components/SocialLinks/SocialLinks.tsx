import React from "react";
import { SvgProps } from "../Svg";
import Flex from "../Box/Flex";
import Dropdown from "../Dropdown/Dropdown";
import Link from "../Link/Link";
import * as IconModule from "../Svg";
import { socials } from "./config";
import { SocialContainer } from "./styles";

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };

const SocialLinks: React.FC = () => {
  return (
    <SocialContainer>
      <Flex>
        {socials.map((social, index) => {
          const Icon = Icons[`${social.icon}Icon`];
          const iconProps = { width: "24px", color: "contrast", style: { cursor: "pointer" } };
          const mr = index < socials.length - 1 ? "24px" : 0;
          // if (social.items) {
          //   return (
          //     <Dropdown key={social.label} position="top" target={<Icon {...iconProps} mr={mr} />}>
          //       {social.items.map((item) => (
          //         <Link external key={item.label} href={item.href} aria-label={item.label} color="textSubtle">
          //           {item.label}
          //         </Link>
          //       ))}
          //     </Dropdown>
          //   );
          // }
          return (
            <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
              <Icon {...iconProps} />
            </Link>
          );
        })}
      </Flex>
    </SocialContainer>
  );
};

export default SocialLinks;
