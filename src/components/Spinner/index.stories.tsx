import React from "react";
import Spinner from "./Spinner";
import ButterflyLoader from "./ButterflyLoader";

export default {
  title: "Components/Spinner",
  component: Spinner,
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <div>
      <Spinner size={50} />
      <ButterflyLoader size={50} />
    </div>
  );
};
