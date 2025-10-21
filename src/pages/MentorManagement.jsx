import React, { useState } from "react";
import Container from "../structure/Container";
import { LuPlus } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import CustomDropDown from "../components/CustomDropDown";
import { Mentor } from "../assets/data/data";

const MentorManagement = () => {
  const [selectedExperie, setSelectedExperie] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedAgent, setSelectedAgent] = useState("");

  const dropdownData = {
    Experie: [{ name: "Experienced Agent" }, { name: "Fresh Agent" }],
    Status: [{ name: "Verified Agent" }, { name: "Not Verified" }],
    agents: [{ name: "Newest" }, { name: "Oldest" }],
  };

  return (
    <Container>
      <div className="flex justify-between items-start flex-wrap gap-3 mt-4 mb-8">
        <div>
          <h1 className="text-[min(10vw,28px)] font-[600] leading-[20px] py-2">
            Mentor Management
          </h1>
          <p className="text-[12px] font-[500] leading-[18px] text-textp">
            The Mentor Management Module streamlines mentor onboarding, profile
            management, availability tracking, and performance <br />
            monitoring in a single centralized system.
          </p>
        </div>

        <button className="flex items-center border border-border py-2 px-4 rounded-lg text-[15px] font-[600] leading-[22px] text-white bg-primary cursor-pointer w-fit flex-shrink-0 justify-center">
          <LuPlus className="inline mr-2 w-[16px] h-[16px]" />
          Add New Mentor
        </button>
      </div>

      <div className="border mt-8 border-border rounded-lg bg-bg flex flex-col overflow-hidden">
        <div className="flex flex-wrap items-center justify-between border-b border-border bg-bg px-4 py-4 gap-2">
          <div className="relative w-full md:w-[300px]">
            <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-text text-[18px]" />
            <input
              type="text"
              placeholder="Search agent by name, email or location"
              className="pl-9 pr-3 py-[8px] text-[13px] font-[400] border border-border rounded-lg bg-main outline-none focus:ring-1 focus:ring-primary placeholder:text-text w-full"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <CustomDropDown
              options={dropdownData.agents}
              selectedOption={selectedAgent}
              onOptionSelect={(item) => setSelectedAgent(item.name)}
              calsses="w-[140px] rounded-lg py-1"
            />
            <CustomDropDown
              options={dropdownData.Status}
              selectedOption={selectedStatus}
              onOptionSelect={(item) => setSelectedStatus(item.name)}
              calsses="w-[140px] rounded-lg py-1"
            />
            <CustomDropDown
              options={dropdownData.Experie}
              selectedOption={selectedExperie}
              onOptionSelect={(item) => setSelectedExperie(item.name)}
              calsses="w-[160px] rounded-lg py-1"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#FFF1E2] text-[15px] font-[500] text-[#323232]">
              <tr>
                <th className="py-3 px-4">ID</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Contact</th>
                <th className="py-3 px-4">Experience</th>
                <th className="py-3 px-4">Specialization</th>
                <th className="py-3 px-4">Location</th>
              </tr>
            </thead>

            <tbody>
              {Mentor.map((Mentor) => (
                <tr
                  key={Mentor.id}
                  className="border-t border-border hover:bg-gray-100 transition"
                >
                  <td className="py-3 px-4 text-[14px]">{Mentor.id}</td>
                  <td className="py-3 px-4 text-[14px] flex items-center gap-2">
                    <img
                      src={Mentor.img}
                      alt={Mentor}
                      className="w-[28px] h-[28px] rounded-full"
                    />
                    {Mentor.name}
                  </td>
                  <td className="py-3 px-4 text-[14px]">{Mentor.email}</td>
                  <td className="py-3 px-4 text-[14px]">{Mentor.contact}</td>
                  <td className="py-3 px-4 text-[14px]">{Mentor.experience}</td>
                  <td className="py-3 px-4 text-[14px]">
                    {Mentor.specialization}
                  </td>
                  <td className="py-3 px-4 text-[14px]">{Mentor.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-wrap items-center justify-between border-t border-border bg-bg px-4 py-3 text-[13px] font-[400] text-text">
            <span className="text-gray-500">1–05 of 18 items</span>
            <div className="flex items-center gap-3">
              <button className="px-3 py-[6px] text-text hover:bg-primary/20 cursor-pointer rounded-lg">
                {"<<"}
              </button>
              <button className="px-3 py-[6px] bg-primary text-white rounded-lg">
                1
              </button>
              <button className="px-3 py-[6px] text-text hover:bg-primary/20 cursor-pointer rounded-lg">
                2
              </button>
              <button className="px-3 py-[6px] text-text hover:bg-primary/20 cursor-pointer rounded-lg">
                3
              </button>
              <button className="px-3 py-[6px] text-text hover:bg-primary/20 cursor-pointer rounded-lg">
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

export default MentorManagement;
