import React, { useState } from "react";
import Container from "../structure/Container";
import { Eye, Edit, Trash2 } from "lucide-react";
import { LuPlus } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { developers } from "../assets/data/data";
import CustomDropDown from "../components/CustomDropDown";

const DeveloperBuilder = () => {
  const statusColors = {
    Approved: "bg-[#E6F8E6] text-[#31A24C]",
    Blocked: "bg-[#FFE6E6] text-[#E74C3C]",
    Pending: "bg-[#FFF5D8] text-[#F8B400]",
  };

     const [selectedDeveloper, setSelectedDeveloper] = useState("");
     const [selectedRegions, setSelectedRegions] = useState("");
     const [selectedStatus, setSelectedStatus] = useState("");
   
     const dropdownData = {
       Developer: [{ name: "Ali Developers" }, { name: "Emaar Developers" }, { name: "Damac Developers" }],
   
       Regions: [
         { name: "Pakistan" },
         { name: "Dubai" },
         { name: "Abu Dhabi" },
         { name: "Sharjah" },
       ],
       
       Status: [{ name: "Active" }, { name: "Pending" }, { name: "Closed" }],
     };
  return (
    <Container>
      <div className="flex justify-between items-start flex-wrap gap-3 mt-4 mb-8">
        <div>
          <h1 className="text-[min(10vw,28px)] font-[600] leading-[20px] py-2">
            Developer/Builder Management
          </h1>
          <p className="text-[12px] font-[500] leading-[18px] text-textp">
            Manage developers, builders and their project portfolios.
          </p>
        </div>

        <button className="flex items-center border border-border py-2 px-4 rounded-lg text-[15px] font-[600] leading-[22px] text-white bg-primary cursor-pointer w-fit flex-shrink-0 justify-center">
          <LuPlus className="inline mr-2 w-[16px] h-[16px]" />
          Add Developer
        </button>
      </div>

      <div className="border mt-8 border-border rounded-lg bg-bg flex flex-col overflow-hidden">
        <div className="flex flex-wrap items-center justify-between border-b border-border bg-bg px-4 py-4 gap-2">
          <div className="relative w-full md:w-[340px]">
            <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-text text-[18px]" />
            <input
              type="text"
              placeholder="Search developer by name, email or country"
              className="pl-9 pr-3 py-[8px] text-[13px] font-[400] border border-border rounded-lg bg-main outline-none focus:ring-1 focus:ring-primary placeholder:text-text w-full overflow-hidden leading-[22px]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
           <div>
              <CustomDropDown
                options={dropdownData.Developer}
                selectedOption={selectedDeveloper}
                onOptionSelect={(item) =>{
                  setSelectedDeveloper(item.name)
                }}
                isMulti={false}
                searchabel={false}
                calsses="w-[140px] rounded-lg py-1"
              />
            </div>

            <div>
              <CustomDropDown
                options={dropdownData.Regions}
                selectedOption={selectedRegions}
                onOptionSelect={(item) => {
                  setSelectedRegions(item.name)
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
            <thead className="bg-[#FFF1E2] text-[15px] font-[500] leading-[20px] text-[#323232]">
              <tr>
                <th className="py-3 px-4">Developer Name</th>
                <th className="py-3 px-4">Contact</th>
                <th className="py-3 px-4">Projects</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {developers.map((dev) => (
                <tr
                  key={dev.id}
                  className="border-t border-border hover:bg-gray-100 dark:hover:bg-[#1a1a1a]"
                >
                  <td className="py-3 px-4 text-[14px]">{dev.name}</td>
                  <td className="py-3 px-4 text-[14px]">
                    {dev.email}
                    <br />
                    {dev.phone}
                  </td>
                  <td className="py-1 px-4 text-[14px]">
                    <div>
                      {dev.projects.total} Total
                      <br />
                      <span className="text-[#31A24C] cursor-pointer">
                        {dev.projects.approved} Approved
                      </span>
                      <br />
                      <span className="text-[#F8B400] cursor-pointer">
                        {dev.projects.pending} Pending
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-[2px] rounded-full text-[13px] font-[400] ${
                        statusColors[dev.status]
                      }`}
                    >
                      {dev.status}
                    </span>
                  </td>
                  <td className="py-6 px-4 text-center flex justify-around ">
                    <Eye className="w-4 h-4 text-[#8280FF] cursor-pointer" />
                    <Edit className="w-4 h-4 text-gray-300 cursor-pointer" />
                    <Trash2 className="w-4 h-4 text-[#EF4444] cursor-pointer" />
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

export default DeveloperBuilder;
