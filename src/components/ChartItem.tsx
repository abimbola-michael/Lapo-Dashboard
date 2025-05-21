import React, { ReactNode } from "react";

export default function ChartItem({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="w-full flex flex-col items-start gap-[20px] bg-white rounded-[10.0px] border-[1.0px] border-[#E2E2E2] p-[16px]">
      <h3 className="flex text-[18.0px] font-medium text-[#121212]">{title}</h3>
      <div className="w-full">{children}</div>
    </div>
  );
}
