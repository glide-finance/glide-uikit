import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* <circle
        r={8}
        cy={8}
        cx={8}
        fill="#000"
        paintOrder="stroke fill markers"
      /> */}
      <path d="M5.04 3.074l-2.96 1.71 2.96 1.719L8 8.212l2.96-1.71 2.96-1.718-2.96-1.71L8 4.784z" fill="#fff"/>
      <path d="M5.04 7.788l-2.96 1.71 2.96 1.718L8 12.926l2.96-1.71 2.96-1.718-2.96-1.71L8 9.498z" fill="#fff"/>
    </Svg>
  );
};

export default Icon;
