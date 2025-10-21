import React, { useState } from "react";
import Container from "../structure/Container";
import { MdOutlineDownload } from "react-icons/md";
import { LuArrowDownUp } from "react-icons/lu";
import { MdOutlineUpload } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { LuPlus } from "react-icons/lu";
import { Eye, Edit } from "lucide-react";
import { lead } from "../assets/data/data";
import CustomDropDown from "../components/CustomDropDown";

const LeadManagement = () => {
  const [selectedExperie, setSelectedExperie] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedAgent, setSelectedAgent] = useState("");

  const dropdownData = {
    Experie: [{ name: "Experienced" }, { name: "Fresh" }],

    Status: [
      { name: "Verified" },
      { name: "Qualified" },
      { name: "New" },
      { name: "Proposal Sent" },
    ],

    agents: [{ name: "Sara Ali" }, { name: "Ahmad Khan" }],
  };

  const sourceColors = {
    Website: "bg-[#EDEDED] text-[#323232]",
    "Social Media": "bg-[#EDEDED] text-[#323232]",
    "Walk-In": "bg-[#EDEDED] text-[#323232]",
    Advertisement: "bg-[#EDEDED] text-[#323232]",
  };

  const statusColors = {
    New: "bg-[#F5EBFF] text-[#B76EFF]",
    Contacted: "bg-[#FFF5D8] text-[#F8B400]",
    Qualified: "bg-[#E6F8E6] text-[#31A24C]",
    "Proposal Sent": "bg-[#FFE6E6] text-[#E74C3C]",
  };
  return (
    <Container>
      <div className="flex justify-between my-8 items-start flex-wrap gap-3 mb-8 mt-4">
        <div>
          <h1 className="text-[min(10vw,28px)] font-[600] leading-[20px] py-2">
            Lead Management
          </h1>
          <p className="text-[12px] font-[500] leading-[18px] text-textp">
            Track, assign and manage incoming leads with bulk operations.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center border hover:bg-gray-100 dark:hover:bg-[#1a1a1a] border-border py-2 px-3 rounded-lg text-[14px] font-[500] leading-[22px] text-[#666666B2]  bg-bg cursor-pointer w-fit flex-shrink-0 justify-center ">
            <MdOutlineDownload className="inline mr-2 w-[18px] h-[18px] " />
            CSV Template
          </button>
          <button className="flex items-center hover:bg-gray-100 dark:hover:bg-[#1a1a1a] border border-border py-2 px-3 rounded-lg text-[14px] font-[500] leading-[22px] text-[#666666B2]  bg-bg cursor-pointer w-fit flex-shrink-0 justify-center ">
            <LuArrowDownUp className="inline mr-2 w-[18px] h-[16px] " />
            Import Leads
          </button>
          <button className="flex items-center hover:bg-gray-100 dark:hover:bg-[#1a1a1a] border border-border py-2 px-3 rounded-lg text-[14px] font-[500] leading-[22px] text-[#666666B2]  bg-bg cursor-pointer w-fit flex-shrink-0 justify-center ">
            <MdOutlineUpload className="inline mr-2 w-[18px] h-[18px] " />
            Export Leads
          </button>

          <button className="flex items-center border border-border py-2 px-3 rounded-lg text-[15px] font-[600] leading-[22px] text-white  bg-primary cursor-pointer w-fit flex-shrink-0 justify-center ">
            <LuPlus className="inline mr-2 w-[16px] h-[16px] " />
            Create Lead
          </button>
        </div>
      </div>

      <div className="border mt-8 border-border rounded-lg bg-bg flex flex-col overflow-hidden">
        <div className="flex flex-wrap items-center justify-between border-b border-border bg-bg px-4 py-4 gap-2">
          <div className="relative w-full md:w-[340px]">
            <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-text text-[18px]" />
            <input
              type="text"
              placeholder="Search agent by name, email, interest or source"
              className="pl-9 pr-3 py-[8px] text-[13px] font-[400] border border-border rounded-lg bg-main outline-none focus:ring-1 focus:ring-primary placeholder:text-text w-full overflow-hidden leading-[22px]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div>
              <CustomDropDown
                options={dropdownData.agents}
                selectedOption={selectedAgent}
                onOptionSelect={(item) =>{
                  setSelectedAgent(item.name)
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
                onOptionSelect={(item) =>{
                  setSelectedExperie(item.name)
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
                onOptionSelect={(item) =>{
                  setSelectedStatus(item.name)
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
            <thead className="bg-[#FFF1E2] text-[16px] leading-[20px] font-[500] text-[#323232]">
              <tr>
                <th className="py-3 px-4">
                  <input
                    type="checkbox"
                    className="border border-[#66666680] outline-0 cursor-pointer"
                  />
                </th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Contact</th>
                <th className="py-3 px-4">Interest</th>
                <th className="py-3 px-4">Source</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Assigned Agent</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {lead.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-t border-border hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition duration-300"
                >
                  <td className="py-2 px-4">
                    <input
                      type="checkbox"
                      className="border border-[#66666680] outline-0 cursor-pointer"
                    />
                  </td>

                  <td className="py-3 px-4 text-[14px] font-[400]">
                    {lead.name}
                  </td>

                  <td className="py-3 px-4 text-[14px] font-[500]">
                    <p>{lead.email}</p>
                    <p className="text-text">{lead.contact}</p>
                  </td>

                  <td className="py-3 px-4 text-[14px]">{lead.interest}</td>

                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-[3px] rounded-full text-[13px] font-[400] ${
                        sourceColors[lead.source]
                      }`}
                    >
                      {lead.source}
                    </span>
                  </td>

                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-[3px] rounded-full text-[13px] font-[400] ${
                        statusColors[lead.status]
                      }`}
                    >
                      {lead.status}
                    </span>
                  </td>

                  <td className="py-2 px-4 text-[14px]">
                    {lead.agent === "Assign Agent" ? (
                      <div className="flex items-center justify-center gap-1 px-1 py-[3px] rounded-full bg-[#F1F1F1] text-[#666] text-[13px] font-[400] cursor-pointer">
                        Assign Agent
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[14px] h-[14px] text-[#666]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    ) : (
                      <span className="bg-[#E6F8E6] text-[#31A24C] font-[400] px-3 py-[3px] rounded-full">
                        {lead.agent}
                      </span>
                    )}
                  </td>

                  <td className="py-6 px-4 text-center flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4 text-[#8280FF] cursor-pointer" />
                    <Edit className="w-4 h-4 text-gray-300 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex flex-wrap items-center justify-between border-t border-border bg-bg px-4 py-3 text-[13px] font-[400] text-text">
            <span className="text-gray-500">1–05 of 18 items</span>

            <div className="flex items-center pt-2 pb-6">
              <button className="px-3 py-[6px] text-text hover:bg-primary/20 cursor-pointer rounded-lg mx-1">
                {"<<"}
              </button>
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
                5
              </button>
              <button className="px-3 py-[6px] text-text hover:bg-primary/20 cursor-pointer rounded-lg mx-1">
                {">"}
              </button>
              <button className="px-3 py-[6px] text-text hover:bg-primary/20 cursor-pointer rounded-lg mx-1">
                {">>"}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <select className="px-2 py-[4px] bg-bg text-text cursor-pointer outline-none">
                <option>5</option>
                <option>10</option>
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

export default LeadManagement;
