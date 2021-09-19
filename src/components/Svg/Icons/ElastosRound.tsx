import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" height={16} width={16} {...props}>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(83.96 0 0 -88.1 -430035.42 -632293.51)"
          y2={-7178.97}
          x2={5126.72}
          y1={-7178.97}
          x1={5126.21}
          id="prefix__a"
        >
          <stop stopColor="#f2ad6c" offset={0} />
          <stop stopColor="#fff" offset={1} />
        </linearGradient>
      </defs>
      <circle
        r={8}
        cy={8}
        cx={8}
        fill="#fff"
        paintOrder="stroke fill markers"
      />
      <path d="M4.806 2.686L1.613 4.53l3.193 1.855L8 8.228l3.194-1.843 3.193-1.855-3.193-1.844L8 4.53z" />
      <path d="M4.806 7.772L1.613 9.616l3.193 1.854L8 13.314l3.194-1.844 3.193-1.854-3.193-1.844L8 9.616z" />
    </Svg>
  );
};

export default Icon;
