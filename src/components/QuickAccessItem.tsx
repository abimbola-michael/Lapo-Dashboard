import React from "react";
import { svgPath } from "../utils/image_utils";

export default function QuickAccessItem({
  icon,
  title,
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
  return (
    <div
      className={`w-full flex flex-row items-center justify-start bg-[#F6F6F6] border-[#E2E2E2] border-[0.6px] rounded-[8.0px] px-[12px] py-[10px] gap-[12px] ${className} cursor-pointer`}
      style={{ color: color }}
      onClick={() => {
        onClick?.(title);
      }}
    >
      <div className="shrink-0 flex items-center justify-center bg-[#014DAF] w-[28px] h-[28px] rounded-full">
        <img
          src={svgPath(icon)}
          alt={title}
          // className={`text-[#121212]`}
          // style={{ color: "#121212" }}
        />
      </div>

      <div className="flex flex-row items-center gap-[5px]">
        <span
          className={`text-[#121212] line-clamp-1`}
          style={{ color: color }}
        >
          {title}
        </span>
        <img src={svgPath("chevron-right.svg")} alt={"Right arrow"} />
      </div>
    </div>
  );
}
