import React from "react";
import { svgPath } from "../utils/image_utils";

export default function AnalyticsItem({
  icon,
  title,
  value,
  rate,
  duration,
  info,
}: {
  icon: string;
  title: string;
  value: string;
  rate?: string;
  duration?: string;
  info?: string;
}) {
  return (
    <div className="w-full flex flex-col items-start gap-[8px] bg-white rounded-[10.0px] border-[1.0px] border-[#E2E2E2] p-[12px]">
      <img src={svgPath(icon)} alt={title} />
      <h3 className="flex text-[14.0px] font-medium text-[#0000008F]">
        {title}
      </h3>
      <div className="w-full flex flex-row items-center justify-between">
        <span className="flex text-[24.0px] font-bold text-[#121212]">
          {value}
        </span>
        <div className="flex flex-row items-center justify-start gap-[4px]">
          {rate && (
            <div className="flex flex-row gap-[2px] items-center bg-[#EFFAF6] rounded-[4.0px]">
              <img src={svgPath("arrow-up.svg")} alt={"Arrow up icon"} />
              <span className="flex text-[12.0px] font-medium text-[#29A174]">
                {rate}
              </span>
            </div>
          )}
          {duration && (
            <span className="flex text-[12.0px] font-normal text-[#0000008F]">
              {duration}
            </span>
          )}
          {info && (
            <div className="flex flex-row items-center gap-[2px]">
              <img src={svgPath("alert-circle.svg")} alt={"Info icon"} />
              <span className="flex text-[12.0px] font-normal text-[#E78020]">
                {info}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
