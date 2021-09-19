import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon, ElastosRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  glidePriceUsd?: number;
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

const CakePrice: React.FC<Props> = ({ glidePriceUsd, elaPriceUsd }) => {
  return glidePriceUsd && elaPriceUsd ? (
    <PriceLink
      href="https://glidefinance.io/#/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
      target="_blank"
    >
      <PancakeRoundIcon width="18px" mr="4px" />
      <Text color="textSubtle" fontSize="18px" bold>{`$${glidePriceUsd.toFixed(3)} = `}</Text>
      <ElastosRoundIcon width="18px" mr="4px" ml="4px"/>
      <Text color="textSubtle" fontSize="18px" bold>{`$${elaPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
