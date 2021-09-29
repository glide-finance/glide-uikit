import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      width={46}
      height={103}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.405 51.5L0 77.25 15.11 103l29.953-51.5L15.11 0 0 25.75 15.405 51.5z"
        fill="url(#prefix__paint0_linear)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={22.534}
          y1={-2.156}
          x2={22.534}
          y2={104.733}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F2AD6C" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
