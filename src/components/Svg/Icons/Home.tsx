import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    // <Svg viewBox="0 0 24 24" {...props}>
    //   <path d="M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" />
    // </Svg>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 420.02 359.1"
      {...props}
    >
      <g data-name="Layer 2">
        <path
          d="M420 210v109.6a39.49 39.49 0 01-39.49 39.49H246.34v-54.16A36.33 36.33 0 00210 268.6a36.33 36.33 0 00-36.32 36.33v54.17H39.49A39.49 39.49 0 010 319.61V210a39.51 39.51 0 0111.56-27.91L182.09 11.56a39.51 39.51 0 0155.85 0l170.52 170.53A39.5 39.5 0 01420 210z"
          fill="#fff"
          data-name="Layer 1"
        />
      </g>
    </Svg>
  );
};

export default Icon;
