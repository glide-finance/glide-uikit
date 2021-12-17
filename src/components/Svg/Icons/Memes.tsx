import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.901 17.901" {...props}>
      <g fill="none" stroke="#fff" strokeLinecap="round">
        <path
          d="M17.526 8.95a8.575 8.575 0 01-8.576 8.576A8.575 8.575 0 01.375 8.95 8.575 8.575 0 018.95.375a8.575 8.575 0 018.576 8.575z"
          strokeWidth={0.75}
          strokeLinejoin="round"
          paintOrder="stroke fill markers"
        />
        <path d="M10.817 6.54s0 4.111-4.064 4.017" strokeWidth={0.75} />
        <path
          d="M9.535 3.43s-1.186-.784-2.155-.1c-.969.685.017 2.105.017 2.105M5.593 7.39s-1.381-.734-2.139 0c-.735.712.05 2.088.05 2.088"
          strokeWidth={0.5}
        />
      </g>
    </Svg>
  );
};

export default Icon;
