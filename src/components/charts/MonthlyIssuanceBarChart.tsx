import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type IssuanceData = {
  month: string;
  Instant: number;
  Personalized: number;
};

function MonthlyIssuanceBarChart({ data }: { data: IssuanceData[] }) {
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={data}
          // margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          barGap={0}
          barCategoryGap="20%"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <YAxis
            domain={[0, 100]}
            tickCount={6}
            interval={0}
            tickFormatter={(value) => `${value}`}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />

          <Bar
            dataKey="Personalized"
            fill="#014DAF"
            radius={[4, 4, 0, 0]}
            stackId="a"
          />
          <Bar
            dataKey="Instant"
            fill="#CCE2FF"
            radius={[4, 4, 0, 0]}
            stackId="a"
          />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex gap-4 mt-2 text-sm">
        <div className="flex items-center gap-1">
          <span
            className="w-3 h-3 rounded-full inline-block"
            style={{ backgroundColor: "#0D47A1" }}
          ></span>{" "}
          Personalized
        </div>
        <div className="flex items-center gap-1">
          <span
            className="w-3 h-3 rounded-full inline-block"
            style={{ backgroundColor: "#BBDEFB" }}
          ></span>{" "}
          Instant
        </div>
      </div>
    </div>
  );
}

export default MonthlyIssuanceBarChart;
