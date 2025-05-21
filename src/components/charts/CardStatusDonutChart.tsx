import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

type DonutData = {
  name: string;
  value: number;
};

const COLORS = ["#01A4AF", "#FFBA24", "#FF4457", "#8020E7", "#014DAF"];
const LABELS = ["Active", "Expired", "Inactive", "Blocked", "Lost"];

function CardStatusDonutChart({ data }: { data: DonutData[] }) {
  // Calculate total for center text
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="w-full relative">
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={80}
            paddingAngle={3}
            cornerRadius={10}
            strokeWidth={0}
            startAngle={0}
            endAngle={-360}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <div className="absolute top-[calc(50%-10px)] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
        <span className="flex text-[12.0px] font-medium text-[#808080]">
          Total Cards
        </span>
        <h2 className="flex text-[24.0px] font-medium text-[#121212]">
          {total}
        </h2>
      </div>

      <div className="flex justify-around mt-2 text-sm">
        {LABELS.map((label, index) => (
          <div key={label} className="flex items-center gap-1">
            <span
              style={{ backgroundColor: COLORS[index] }}
              className="w-3 h-3 inline-block rounded-full"
            ></span>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardStatusDonutChart;
