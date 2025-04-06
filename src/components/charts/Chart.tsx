/* eslint-disable @typescript-eslint/no-explicit-any */
import { LineChart, Line, XAxis, ResponsiveContainer } from "recharts";

export default function Chart({ data }: any) {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <LineChart width={500} height={300} data={data}>
        <XAxis
          dataKey="date"
          stroke="#56616B"
          fontSize={"14px"}
          fontWeight={"normal"}
        />
        <Line type="monotone" dataKey="amount" stroke="#FF5403" />
      </LineChart>
    </ResponsiveContainer>
  );
}
