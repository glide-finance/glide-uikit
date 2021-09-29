import React from "react";
import styled, { keyframes } from "styled-components";
import Wing from "./Wing";
import { SpinnerProps } from "./types";

const left = keyframes`
  to {
		transform: rotateY(-60deg)
	}
`
const right = keyframes`
  to {
		transform: rotateY(-60deg)
	}
`

const Container = styled.div`
  display: flex;
  position: relative;
  transform: rotate(-18deg);
`;

const LeftFlap = styled.div`
  animation: ${left} 0.5s linear infinite alternate;
  transform-origin: right;
  margin-right: -2px;
`;

const RightFlap = styled.div`
  animation: ${right} 0.5s linear infinite alternate;
  transform-origin: left;
  margin-left: -2px;
`;

const LeftWing = styled(Wing)`
`

const RightWing = styled(Wing)`
  transform: scaleX(-1)
`

const ButterflyLoader: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <LeftFlap>
        <LeftWing />
      </LeftFlap>
      <RightFlap>
        <RightWing />
      </RightFlap>
    </Container>
  );
};

export default ButterflyLoader;
