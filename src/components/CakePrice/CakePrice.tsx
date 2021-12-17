import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon, ElastosRoundIcon } from "../Svg";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  elaPriceUsd?: number;
  glidePriceUsd?: number;
  short?: boolean;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  cursor: pointer;
  transition: all 0.15s ease 0s;
  width: 100%;
`;

const CakePrice: React.FC<Props> = ({ glidePriceUsd, elaPriceUsd, short }) => {
  return glidePriceUsd && elaPriceUsd ? (
    <PriceLink
      href="https://glidefinance.io/swap?outputCurrency=0xd39eC832FF1CaaFAb2729c76dDeac967ABcA8F27"
      target="_blank"
    >
      {short ? (
        <>
          <PancakeRoundIcon width="32px" mr="8px" />
          <Text color="contrast" fontSize="20px" bold>{`$${glidePriceUsd.toFixed(3)}`}</Text>
        </>
      ) : (
        <>
          <PancakeRoundIcon width="24px" mr="4px" />
          <Text color="contrast" fontSize="19px" bold>{`$${glidePriceUsd.toFixed(3)} = `}</Text>
          <ElastosRoundIcon width="24px" mr="4px" ml="4px" />
          <Text color="contrast" fontSize="19px" bold>{`${(glidePriceUsd / elaPriceUsd).toFixed(3)}`}</Text>
        </>
      )}
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
