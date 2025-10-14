import React from "react";
import { IoMdTrendingUp } from "react-icons/io";
import SalesChart from "../components/SalesChart ";
import LeadsBySource from "../components/LeadsBySource";
import { statsData } from "../assets/data/data";
import Container from "../structure/Container";
import { people } from "../assets/data/data";
import { Eye } from "lucide-react";
import { leads } from "../assets/data/data";
import { statusColors } from "../assets/data/data";
import { actions } from "../assets/data/data";

const Dashboard = () => {
  return (
    <Container>
      <div>
        <h1 className="text-[min(10vw,28px)] font-[600] leading-[20px] py-4 ">
          Dashboard
        </h1>
        <p className="text-[12px] font-[500] leading-[18px] text-textp">
          Welcome back! Here's what's happening in your Dubai360 dashboard.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 ">
        {statsData.map((item, index) => (
          <div
            key={index}
            className="bg-bg border border-border rounded-[10px] p-4 text-center"
          >
            <div className="flex justify-between items-start">
              <div className="text-left">
                <h2 className="text-[16px] font-[500] text-textp">
                  {item.title}
                </h2>
                <p className="text-xl font-[700] text-text mt-1">
                  {item.value}
                </p>
              </div>
              <img src={item.image} alt="image" />
            </div>
            <div className="flex text-center items-center mt-4 gap-1">
              <IoMdTrendingUp className="text-green-500" />
              <p className="text-[12px] font-[600] text-green-500 ml-1">
                {item.prcent}
              </p>
              <p className="text-[12px] font-[400] text-textp ">{item.month}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 my-6">
        <SalesChart />
        <LeadsBySource />
      </div>
      <div className="grid grid-cols-3 gap-4 my-6">
        <div className="border border-border rounded-lg bg-bg h-[400px] flex flex-col overflow-hidden">
          <div className="flex items-center justify-between border-b border-[#4E25DF1F] p-4 py-6 flex-shrink-0">
            <h3 className="text-[18px] font-[600] leading-[28px] text-text">
              Recent Activity
            </h3>
            <button className="text-[#0088FF] text-[12px] font-[500] cursor-pointer">
              View More
            </button>
          </div>

          <div className="overflow-y-auto flex-1 no-scrollbar scroll-fade ">
            <ul>
              {people.map((person, index) => (
                <li key={index}>
                  <div className="flex p-4 justify-between items-center border-b border-border hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors cursor-pointer">
                    <div className="flex gap-2 items-center">
                      <img
                        src={person.imageUrl}
                        alt={person.name}
                        className="w-[40px] h-[40px] rounded-full object-cover"
                      />
                      <div>
                        <h2 className="text-text text-[14px] font-[600] leading-[14px]">
                          {person.name}
                        </h2>
                        <p className="text-text text-[14px] font-[400] leading-[14px]">
                          {person.details}
                        </p>
                      </div>
                    </div>
                    <p className="text-text text-[10px] font-[400] leading-[20px]">
                      {person.time}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-2 border border-border rounded-lg bg-bg h-[400px] flex flex-col overflow-hidden">
          <div className="flex items-center justify-between border-b border-border bg-bg px-4 py-3 flex-shrink-0">
            <h3 className="text-[18px] font-[600] text-text">Recent Leads</h3>
            <button className="text-[#0088FF] text-[12px] font-[500] cursor-pointer">
              View More
            </button>
          </div>

          <div className="flex-1 overflow-y-auto no-scrollbar scroll-fade">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#FFF1E2] text-[16px] leading-[20px] font-[500] text-[#323232] sticky top-0 z-10">
                <tr>
                  <th className="py-3 px-4">ID</th>
                  <th className="py-3 px-4">Customer</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Source</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-center">View</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, index) => (
                  <tr
                    key={index}
                    className="border-t border-[#4E25DF1F] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors cursor-pointer"
                  >
                    <td className="py-3 px-4 text-[14px] font-[400] leading-[20px]">
                      {lead.id}
                    </td>
                    <td className="py-3 px-4 text-[14px] font-[400] leading-[20px]">
                      {lead.customer}
                    </td>
                    <td className="py-3 px-4 text-[14px] font-[400] leading-[20px]">
                      {lead.email}
                    </td>
                    <td className="py-3 px-4 text-[14px] font-[400] leading-[20px]">
                      {lead.source}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-[2px] rounded-md text-[12px] font-[500] ${
                          statusColors[lead.status] || ""
                        }`}
                      >
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 pl-8 text-center">
                      <Eye className="w-4 h-4 text-[#8280FF]" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-bg rounded-lg p-4 pb-8 mb-6 text-text border border-border">
        <h2 className="text-[18px] font-[600] leading-[28px] mb-4">
          Quick Actions
        </h2>
        <div className="flex justify-between items-center">
          {actions.map((action, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center justify-center w-[150px] cursor-pointer">
                {action.icon}
                <h3 className="mt-3 text-[16px] font-[500]">{action.title}</h3>
              </div>
              {index !== actions.length - 1 && (
                <div className="h-12 w-[1px] bg-gray-600 opacity-40"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
