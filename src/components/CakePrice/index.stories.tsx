import React from "react";
import { CakePrice, CakePriceProps } from ".";
import { Flex } from "../Box";

export default {
  title: "Components/CakePrice",
  component: CakePrice,
};

const Template: React.FC<CakePriceProps> = ({ ...args }) => {
  return (
    <Flex p="10px">
      <CakePrice {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});
Default.args = {
  glidePriceUsd: 2,
  elaPriceUsd: 10,
  short: true,
};
