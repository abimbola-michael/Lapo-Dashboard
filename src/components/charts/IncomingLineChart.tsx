import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type IncomeData = {
  day: string;
  income: number;
};

function IncomeLineChart({ data }: { data: IncomeData[] }) {
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={data}
          // margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            domain={[0, 100]}
            tickCount={6}
            interval={0}
            tickFormatter={(value) => `${value}`}
            axisLine={false}
            tickLine={false}
            tickMargin={10}
          />
          <Tooltip formatter={(value: number) => [`${value}`, "Income"]} />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#4DAF01"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default IncomeLineChart;
