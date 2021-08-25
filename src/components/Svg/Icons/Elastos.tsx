import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 16 16" {...props}>
    <circle
     r="8"
     cy="8"
     cx="8"
     fill="#ffffff" />
    <path
       fill="#000000"
       d="m 33.912109,23.230469 -16.08789,9.289062 16.08789,9.34375 L 50,51.150391 66.087891,41.863281 82.175781,32.519531 66.087891,23.230469 50,32.519531 Z" />
    <path
       fill="#000000"
       d="m 33.912109,48.849609 -16.08789,9.289063 16.08789,9.341797 L 50,76.769531 66.087891,67.480469 82.175781,58.138672 66.087891,48.849609 50,58.138672 Z" />
    </Svg>
  );
};

export default Icon;
