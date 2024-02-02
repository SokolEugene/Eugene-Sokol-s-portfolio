import React from "react";
import falcon from "../../assets/images/falcon.svg";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      fill="#000000"
      width={props.width || "50px"}
      height={props.height || "50px"}
      // viewBox="0 0 24 24"
      viewBox={props.viewBox || "0 0 24 24"}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${falcon}#${props.iconId}`}></use>
    </svg>
  );
};
