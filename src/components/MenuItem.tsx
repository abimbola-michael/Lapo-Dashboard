import React from "react";
import { svgPath } from "../utils/image_utils";
import { Svg } from "./icons/Svg";

export default function MenuItem({
  icon,
  title,
  selectedItem,
  color,
  onClick,
  className,
}: {
  icon: string;
  title: string;
  selectedItem?: string;
  color?: string;
  onClick?: (item: string) => void;
  className?: string;
}) {
  const selected = title === selectedItem;
  return (
    <div
      className={`w-full flex flex-row items-center ${
        selected ? "bg-[#F6F6F6] border-[#E2E2E2] border-[0.6px]" : ""
      } rounded-[8.0px] px-[12px] py-[10px] gap-[12px] ${className} cursor-pointer`}
      style={{ color: color }}
      onClick={() => {
        onClick?.(title);
      }}
    >
      <Svg
        src={svgPath(icon)}
        color={color ?? (selected ? "#014DAF" : "#00000080")}
      />
      <span
        className={`text-[12.0px] font-medium ${
          color ?? selected ? "text-[#014DAF]" : "text-[#00000080]"
        }`}
        style={{ color: color }}
      >
        {title}
      </span>
    </div>
  );
}
