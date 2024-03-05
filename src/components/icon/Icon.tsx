import React from "react";
import sprite from "../../assets/icons/sprite.svg";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      fill={props.fill || "#000000"}
      width={props.width || "120px"}
      height={props.height || "120px"}
      viewBox={props.viewBox || "0 50 50"}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${sprite}#${props.iconId}`}></use>
    </svg>
  );
};
