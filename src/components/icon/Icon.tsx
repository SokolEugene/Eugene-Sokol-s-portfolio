import React from "react";
import sprite from "../../assets/icons/sprite.svg";
import footerSprite from "../../assets/icons/footerSprite.svg";
import contactSprite from "../../assets/icons/contactSprite.svg";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  sprite?: string;
};

export const Icon = (props: IconPropsType) => {
  const determineSprite = () => {
    if (props.iconId.startsWith("footer")) {
      return footerSprite;
    } else if (props.iconId.startsWith("contact")) {
      return contactSprite;
    } else {
      return sprite;
    }
  };

  const selectedSprite = determineSprite() || props.sprite;
  return (
    <svg
      fill={props.fill || "#000000"}
      width={props.width || "120px"}
      height={props.height || "120px"}
      viewBox={props.viewBox || "0 50 50"}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${selectedSprite}#${props.iconId}`}></use>
    </svg>
  );
};
