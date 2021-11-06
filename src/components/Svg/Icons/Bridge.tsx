import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
	<Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 377.54 122.55"
      {...props}
    >
      <g data-name="Layer 2">
        <path
          d="M375 99.11a227 227 0 00-27.61-33.41A224.43 224.43 0 0032.1 63.76 226.69 226.69 0 002.58 99.08a15.06 15.06 0 0025 16.83 194.2 194.2 0 01322.41 0 15.06 15.06 0 0025-16.8z"
          fill="#fff"
          data-name="Layer 1"
        />
      </g>
    </Svg>
  );
};

export default Icon;
