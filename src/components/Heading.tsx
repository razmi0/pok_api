import { useState } from "react";
import { Eye } from "../icons/svg";

type HeadingProps = {
  title: string;
  color: string;
  onClick: (index: number) => void;
  isOpen: boolean;
  index: number;
};
export const Heading = ({ title, color, onClick, isOpen, index }: HeadingProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  title = title.charAt(0).toUpperCase() + title.slice(1);
  return (
    <div
      className="heading"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => onClick(index)}
      style={{
        cursor: "pointer",
        filter: isHovering ? `drop-shadow(0px 0px 10px ${color})` : `none`,
      }}
    >
      <Eye isOpen={isOpen} color={color} />
      <h2 style={{ color: color }}>{title}</h2>
    </div>
  );
};
