import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { ChevronDown } from "lucide-react";

const data = [
  { month: "Jan", Website: 320, Agent: 280, Direct: 200, Meta: 150 },
  { month: "Feb", Website: 400, Agent: 310, Direct: 250, Meta: 180 },
  { month: "Mar", Website: 380, Agent: 290, Direct: 230, Meta: 160 },
  { month: "Apr", Website: 420, Agent: 340, Direct: 260, Meta: 190 },
  { month: "May", Website: 450, Agent: 350, Direct: 280, Meta: 210 },
  { month: "Jun", Website: 470, Agent: 370, Direct: 290, Meta: 230 },
  { month: "Jul", Website: 490, Agent: 400, Direct: 310, Meta: 250 },
  { month: "Aug", Website: 520, Agent: 420, Direct: 330, Meta: 270 },
  { month: "Sep", Website: 480, Agent: 390, Direct: 300, Meta: 240 },
  { month: "Oct", Website: 530, Agent: 430, Direct: 350, Meta: 280 },
  { month: "Nov", Website: 550, Agent: 460, Direct: 370, Meta: 300 },
  { month: "Dec", Website: 600, Agent: 480, Direct: 390, Meta: 320 },
];

const LeadsBySource = () => {
  return (
    <div className="bg-bg text-text p-5 rounded-lg flex flex-col border border-border col-span-2">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-[16px] font-[600] leading-[28px] tracking-wide">
          Leads by Source
        </h2>
        <button className="flex items-center bg-bg border border-border text-text px-3 py-[6px] rounded-lg text-xs">
          October
          <ChevronDown size={14} className="ml-1 text-text" />
        </button>
      </div>

      <div className="w-full h-[280px] ">
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: -47, right: 30, left: 36, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.1} />
            <XAxis dataKey="month" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(156, 163, 175, 0.2)",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(156, 163, 175, 0.3)",
                borderRadius: "6px",
                fontSize: "11px",
                color: "var(--text-color, #e5e7eb)",
                padding: "4px 8px",
                lineHeight: "1.2",
              }}
              labelStyle={{
                fontWeight: "500",
                color: "var(--text-secondary, #9ca3af)",
                marginBottom: "2px",
              }}
              cursor={{
                stroke: "rgba(156, 163, 175, 0.3)",
                strokeDasharray: "3 3",
              }}
            />

            <Legend iconType="circle" verticalAlign="top" height={30} />
            <Line
              type="monotone"
              dataKey="Website"
              stroke="#E63946"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="Agent"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="Direct"
              stroke="#E4A853"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="Meta"
              stroke="#6C63FF"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LeadsBySource;
