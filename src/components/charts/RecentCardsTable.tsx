import React from "react";

export interface TableData {
  branch: string;
  cardType: string;
  quantity: number;
  status: string;
  action: string;
  statusBgColor: string;
  statusTextColor: string;
  statusBorderColor: string;
}
export type RecentCardsTableProps = {
  headers: string[];
  data: TableData[];
};
export default function RecentCardsTable({
  data,
  headers,
}: RecentCardsTableProps) {
  return (
    <div className="w-full flex flex-col text-center ">
      <div className="flex flex-row items-center justify-stretch bg-[#F1F7FF] border border-[#E2E2E2]">
        {headers.map((header) => (
          <div
            key={header}
            className="flex-1 text-[12.0px] font-medium text-[#0000008F] px-[24x] py-[12px]"
          >
            {header}
          </div>
        ))}
      </div>
      {data.map((item, index) => (
        <div
          key={index}
          className="w-full flex flex-row items-center justify-stretch bg-white border-b border-[#E2E2E2]"
        >
          <div className="flex-1 text-[10.0px] font-normal text-[#475467] px-[24x] py-[12px]">
            {item.branch}
          </div>
          <div className="flex-1 text-[10.0px] font-normal text-[#475467] px-[24x] py-[12px]">
            {item.cardType}
          </div>
          <div className="flex-1 text-[12.0px] font-normal text-[#475467] px-[24x] py-[12px]">
            {item.quantity}
          </div>
          <div className="flex-1 flex items-center justify-center px-[24x] py-[12px] ">
            <div
              className={`border-[1.0px] rounded-[16.0px] text-[10.0px] font-normal px-[8px] py-[2px]`}
              style={{
                backgroundColor: item.statusBgColor,
                color: item.statusTextColor,
                borderColor: item.statusBorderColor,
              }}
            >
              {item.status}
            </div>
          </div>

          <div className="flex-1 text-[10.0px] font-bold text-[#014DAF] px-[24x] py-[12px] cursor-pointer">
            {item.action}
          </div>
        </div>
      ))}
    </div>
  );
}
