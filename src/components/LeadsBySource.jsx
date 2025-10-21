import React, {useState} from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"; 
import CustomDropDown from "./CustomDropDown";

const data = [
  { name: "Website", value: 320, color: "#E63946" },
  { name: "Agent", value: 320, color: "#3B82F6" },
  { name: "Direct", value: 300, color: "#E4A853" },
  { name: "Meta", value: 100, color: "#6C63FF" },
];

const total = data.reduce((sum, d) => sum + d.value, 0);

const LeadsBySource = () => {

   const [selectedMonth, setSelectedMonth] = useState("");
  
    const dropdownData = {
      months: [
        { name: "January" },
        { name: "February" },
        { name: "March" },
        { name: "April" },
        { name: "May" },
        { name: "June" },
        { name: "July" },
        { name: "August" },
        { name: "September" },
        { name: "October" },
        { name: "November" },
        { name: "December" },
      ],
    };
  return (
    <div className="bg-bg text-text p-5 rounded-lg flex flex-col justify-between border border-border">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-[16px] font-[600] leading-[28px] tracking-wide">
          Leads by Source
        </h2>
        <div>
          <CustomDropDown
            options={dropdownData.months}
            selectedOption={selectedMonth}
            onOptionSelect={(item) => {
              setSelectedMonth(item.name);
            }}
            isMulti={false}
            searchabel={false}
            calsses="w-[120px] rounded-lg py-1"
          />
        </div>
      </div>

      <div className="relative flex justify-center items-center mb-5">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={90}
              paddingAngle={0}
              cornerRadius={0}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute text-center">
          <p className="text-xs text-text">Total</p>
          <p className="text-2xl font-bold">{total}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm text-text">
        {data.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-start gap-2 transition-colors"
          >
            <span
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: item.color }}
            ></span>
            <span className="flex-1">{item.name}</span>
            <span className="text-text text-xs">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadsBySource;
