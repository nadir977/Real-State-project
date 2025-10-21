import React, { useState } from "react";
import Container from "../structure/Container";
import { Eye } from "lucide-react";
import { agents } from "../assets/data/data";
import { IoIosSearch } from "react-icons/io";
import CustomDropDown from "../components/CustomDropDown";

const AgentManagement = () => {
  const [selectedExperie, setSelectedExperie] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedAgent, setSelectedAgent] = useState("");

  const dropdownData = {
    Experie: [{ name: "Experienced" }, { name: "Fresh" }],

    Status: [
      { name: "Verified" },
      { name: "Not Verified" },
      { name: "Blocked" },
      { name: "Deleted" },
    ],

    agents: [{ name: "Newest" }, { name: "Oldest" }],
  };

  const statusColors = {
    Verified: "bg-[#E1F7E3] text-[#22C55E]",
    "Not Verified": "bg-[#FFF8E1] text-[#EAB308]",
    Blocked: "bg-[#F3E8FF] text-[#A855F7]",
    Delete: "bg-[#FFE4E6] text-[#F43F5E]",
  };

  const agentTypeColors = {
    Experienced: "bg-[#FCD9A9] text-[#A05A00]",
    Fresh: "bg-[#E0E7FF] text-[#4338CA]",
  };
  console.log(selectedAgent);
  return (
    <Container>
      <div className="mt-4 mb-8">
        <h1 className="text-[min(10vw,28px)] font-[600] leading-[20px] py-2">
          Agent Management
        </h1>
        <p className="text-[12px] font-[500] leading-[18px] text-textp">
          Manage all agents with approval, mentorship, and status controls
        </p>
      </div>

      <div className="border mt-8 border-border rounded-lg bg-bg flex flex-col overflow-hidden">
        <div className="flex flex-wrap items-center justify-between border-b border-border bg-bg px-4 py-4 gap-2">
          <div className="relative w-full md:w-[300px]">
            <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-text text-[18px]" />
            <input
              type="text"
              placeholder="Search agent by name, email or location"
              className="pl-9 pr-3 py-[8px] text-[13px] font-[400] border border-border rounded-lg bg-main outline-none focus:ring-1 focus:ring-primary placeholder:text-text w-full overflow-hidden leading-[22px]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div>
              <CustomDropDown
                options={dropdownData.agents}
                selectedOption={selectedAgent}
                onOptionSelect={(item) => {
                  setSelectedAgent(item.name);
                }}
                isMulti={false}
                searchabel={false}
                calsses="w-[140px] rounded-lg py-1"
              />
            </div>

            <div>
              <CustomDropDown
                options={dropdownData.Experie}
                selectedOption={selectedExperie}
                onOptionSelect={(item) => {
                  setSelectedExperie(item.name);
                }}
                isMulti={false}
                searchabel={false}
                calsses="w-[140px] rounded-lg py-1"
              />
            </div>

            <div>
              <CustomDropDown
                options={dropdownData.Status}
                selectedOption={selectedStatus}
                onOptionSelect={(item) => {
                  setSelectedStatus(item.name);
                }}
                isMulti={false}
                searchabel={false}
                calsses="w-[140px] rounded-lg py-1"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#FFF1E2] text-[16px] font-[500] leading-[20px] text-[#323232]">
              <tr>
                <th className="py-3 px-4">ID</th>
                <th className="py-3 px-4">Agent Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Contact</th>
                <th className="py-3 px-4">Joining Date</th>
                <th className="py-3 px-4">Agent Type</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-center">View</th>
              </tr>
            </thead>
            <tbody>
              {agents.map((agent) => (
                <tr
                  key={agent.id}
                  className="border-t border-border hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition cursor-pointer"
                >
                  <td className="py-3 px-4 text-[14px]">{agent.id}</td>

                  <td className="py-3 px-4 text-[14px] flex items-center gap-2">
                    <img
                      src={agent.img}
                      alt={agent.name}
                      className="w-[28px] h-[28px] rounded-full"
                    />
                    {agent.name}
                  </td>

                  <td className="py-3 px-4 text-[14px]">{agent.email}</td>
                  <td className="py-3 px-4 text-[14px]">{agent.contact}</td>
                  <td className="py-3 px-4 text-[14px]">{agent.joiningDate}</td>

                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-[2px] rounded-full text-[14px] font-[400] ${
                        agentTypeColors[agent.agentType]
                      }`}
                    >
                      {agent.agentType}
                    </span>
                  </td>

                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-[2px] rounded-full text-[14px] font-[400] ${
                        statusColors[agent.status]
                      }`}
                    >
                      {agent.status}
                    </span>
                  </td>

                  <td className="py-3 px-4 text-center">
                    <Eye className="w-4 h-4 text-[#8280FF] mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-wrap items-center justify-between border-t border-border bg-bg px-4 py-3 text-[13px] font-[400] text-text">
            <span className="text-gray-500">1–05 of 18 items</span>

            <div className="flex items-center gap-3">
              <div className="flex items-center  overflow-hidden">
                <button className="px-3 py-[6px] text-text hover:bg-primary/20 cursor-pointer rounded-lg mx-1">
                  {"<"}
                </button>
                <button className="px-3 py-[6px] bg-primary text-white rounded-lg mx-1 cursor-pointer">
                  1
                </button>
                <button className="px-3 py-[6px] text-text hover:bg-primary/20 cursor-pointer rounded-lg mx-1">
                  2
                </button>
                <button className="px-3 py-[6px] text-text hover:bg-primary/20 cursor-pointer rounded-lg mx-1">
                  3
                </button>
                <button className="px-3 py-[6px] text-text hover:bg-primary/20 cursor-pointer rounded-lg mx-1">
                  4
                </button>
                <button className="px-3 py-[6px] text-text hover:bg-primary/20 cursor-pointer rounded-lg mx-1">
                  {">"}
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <select className="px-2 py-[4px]  bg-bg text-text cursor-pointer outline-none">
                <option>10</option>
                <option>15</option>
                <option>18</option>
              </select>
              <span className="text-gray-500">Items per page</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AgentManagement;
