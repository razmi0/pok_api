import { useState } from "react";
import { Eye } from "./icons/svg";

type HeadingProps = {
  title: string;
  color: string;
  onClick: (index: number) => void;
  isOpen: boolean;
  index: number;
  children?: React.ReactNode;
};
export const Heading = ({ title, color, onClick, isOpen, index, children }: HeadingProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  title = title.charAt(0).toUpperCase() + title.slice(1);
  return (
    <>
      <style>
        {`
          .heading {
            all : unset;
            display: flex;
            flex-direction: row;
            place-items: center;
            justify-content: flex-start;
            gap: 10px;
            width: fit-content;
            cursor: pointer;
            transition: filter 0.5s ease-in-out;
            width: 100%;
          }
          .heading:hover {
            transition: filter 0.2s ease-in;
          }
           .heading h2 {
            font-size: 40px;
          }
        `}
      </style>
      <button
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
        {children}
      </button>
    </>
  );
};
