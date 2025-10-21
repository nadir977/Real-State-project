import React, { useState } from "react";
import Container from "../structure/Container";
import { LuPlus } from "react-icons/lu";
import { CommissionData } from "../assets/data/data";
import { IoIosSearch } from "react-icons/io";
import CustomDropDown from "../components/CustomDropDown";
import { Edit, Eye } from "lucide-react";

const Commission = () => {
  const [activeTab, setActiveTab] = useState("Receiving");
  const [selectedDeveloper, setSelectedDeveloper] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedCommission, setSelectedCommission] = useState("");

  const dropdownData = {
    developers: [
      { name: "Emaar" },
      { name: "Damac" },
      { name: "Nakheel" },
      { name: "Meraas" },
    ],
    projects: [
      { name: "Dubai Hills" },
      { name: "Bls Island" },
      { name: "Creek Harbour" },
    ],
    status: [
      { name: "Received" },
      { name: "Pending" },
      { name: "Released" },
      { name: "Awaiting " },
    ],
     Commission: [
      { name: "Received" },
      { name: "Pending" },
      { name: "Released" },
      { name: "Awaiting " },
    ],
  };

  // Sample data for Receiving and Released commissions
  const receivingData = [
    {
      id: 1,
      leadAgent: "John Smith",
      subAgent: "Ahmed Hassan",
      project: "Dubai Hills Estate",
      developer: "Emaar Properties",
      commission: {
        total: "$15,000",
        toRelease: "$7,500 (50%)",
        released: "$0",
        receivedDate: "2024-01-15",
      },
      status: "Received",
      paymentStatus: "Pending Release",
    },
    {
      id: 2,
      leadAgent: "Sara Ali",
      subAgent: "Hassan Raza",
      project: "Creek Harbour",
      developer: "Nakheel",
      commission: {
        total: "$10,000",
        toRelease: "$5,000 (50%)",
        released: "$0",
        receivedDate: "2024-02-01",
      },
      status: "Pending",
      paymentStatus: "Awaiting Developer",
    },
    {
      id: 3,
      leadAgent: "John Smith",
      subAgent: "Ahmed Hassan",
      project: "Dubai Hills Estate",
      developer: "Emaar Properties",
      commission: {
        total: "$15,000",
        toRelease: "$7,500 (50%)",
        released: "$0",
        receivedDate: "2024-01-15",
      },
      status: "Received",
      paymentStatus: "Pending Release",
    },
    {
      id: 4,
      leadAgent: "Sara Ali",
      subAgent: "Hassan Raza",
      project: "Creek Harbour",
      developer: "Nakheel",
      commission: {
        total: "$10,000",
        toRelease: "$5,000 (50%)",
        released: "$0",
        receivedDate: "2024-02-01",
      },
      status: "Pending",
      paymentStatus: "Awaiting Developer",
    },
    {
      id: 5,
      leadAgent: "John Smith",
      subAgent: "Ahmed Hassan",
      project: "Dubai Hills Estate",
      developer: "Emaar Properties",
      commission: {
        total: "$15,000",
        toRelease: "$7,500 (50%)",
        released: "$0",
        receivedDate: "2024-01-15",
      },
      status: "Received",
      paymentStatus: "Pending Release",
    },
    {
      id: 6,
      leadAgent: "Sara Ali",
      subAgent: "Hassan Raza",
      project: "Creek Harbour",
      developer: "Nakheel",
      commission: {
        total: "$10,000",
        toRelease: "$5,000 (50%)",
        released: "$0",
        receivedDate: "2024-02-01",
      },
      status: "Pending",
      paymentStatus: "Awaiting Developer",
    },
  ];

  const releasedData = [
    {
      id: 7,
      leadAgent: "Ali Khan",
      subAgent: "Maryam Noor",
      project: "Bluewaters Island",
      developer: "Meraas",
      commission: {
        total: "$12,000",
        toRelease: "$0",
        released: "$12,000",
        receivedDate: "2024-03-10",
      },
      status: "Released",
      paymentStatus: "Completed",
    },
    {
      id: 8,
      leadAgent: "Hamza Iqbal",
      subAgent: "Usman Tariq",
      project: "Downtown Dubai",
      developer: "Damac",
      commission: {
        total: "$8,500",
        toRelease: "$0",
        released: "$8,500",
        receivedDate: "2024-02-22",
      },
      status: "Released",
      paymentStatus: "Completed",
    },
     {
      id: 9,
      leadAgent: "Ali Khan",
      subAgent: "Maryam Noor",
      project: "Bluewaters Island",
      developer: "Meraas",
      commission: {
        total: "$12,000",
        toRelease: "$0",
        released: "$12,000",
        receivedDate: "2024-03-10",
      },
      status: "Released",
      paymentStatus: "Completed",
    },
    {
      id: 10,
      leadAgent: "Hamza Iqbal",
      subAgent: "Usman Tariq",
      project: "Downtown Dubai",
      developer: "Damac",
      commission: {
        total: "$8,500",
        toRelease: "$0",
        released: "$8,500",
        receivedDate: "2024-02-22",
      },
      status: "Released",
      paymentStatus: "Completed",
    },
    
  ];

  const tableData = activeTab === "Receiving" ? receivingData : releasedData;

  return (
    <Container>
      {/* Header Section */}
      <div className="flex justify-between items-start flex-wrap gap-3 mt-4 mb-8">
        <div>
          <h1 className="text-[min(10vw,28px)] font-[600] leading-[20px] py-2">
            Commission Management
          </h1>
          <p className="text-[12px] font-[500] leading-[18px] text-textp">
            Record commissions from developers and release payments to agents.
          </p>
        </div>

        <button className="flex items-center border border-border py-2 px-4 rounded-lg text-[15px] font-[600] leading-[22px] text-white bg-primary cursor-pointer w-fit flex-shrink-0 justify-center">
          <LuPlus className="inline mr-2 w-[16px] h-[16px]" />
          Add New Commission
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {CommissionData.map((item, index) => (
          <div
            key={index}
            className="bg-bg border border-border rounded-[10px] p-4 text-center"
          >
            <div className="flex justify-between items-start">
              <div className="text-left">
                <h2 className="text-[12px] font-[500] text-textp">
                  {item.title}
                </h2>
                <p className="text-xl font-[700] text-text mt-1">
                  {item.value}
                </p>
              </div>
              <img src={item.image} alt="image" />
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-4 mt-8 border-b border-border">
        {["Receiving", "Released"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-[15px] font-[600] ${
              activeTab === tab
                ? "text-primary border-b-2 border-primary"
                : "text-[#666]"
            }`}
          >
            {tab} Commissions
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between border-b border-border bg-bg px-4 py-4 gap-2 mt-2 rounded-t-lg">
        <div className="relative w-full md:w-[300px]">
          <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-text text-[18px]" />
          <input
            type="text"
            placeholder="Search agent by name, email or country"
            className="pl-9 pr-3 py-[8px] text-[13px] font-[400] border border-border rounded-lg bg-main outline-none focus:ring-1 focus:ring-primary placeholder:text-text w-full"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1">
          <CustomDropDown
            options={dropdownData.developers}
            selectedOption={selectedDeveloper}
            onOptionSelect={(item) => setSelectedDeveloper(item.name)}
            calsses="w-[140px] rounded-lg py-1"
          />
          <CustomDropDown
            options={dropdownData.projects}
            selectedOption={selectedProject}
            onOptionSelect={(item) => setSelectedProject(item.name)}
            calsses="w-[140px] rounded-lg py-1"
          />
          <CustomDropDown
            options={dropdownData.status}
            selectedOption={selectedStatus}
            onOptionSelect={(item) => setSelectedStatus(item.name)}
            calsses="w-[120px] rounded-lg py-1"
          />
          <CustomDropDown
            options={dropdownData.Commission}
            selectedOption={selectedCommission}
            onOptionSelect={(item) => setSelectedCommission(item.name)}
            calsses="w-[120px] rounded-lg py-1"
          />
          <CustomDropDown
            options={dropdownData.status}
            selectedOption={selectedStatus}
            onOptionSelect={(item) => setSelectedStatus(item.name)}
            calsses="w-[120px] rounded-lg py-1"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-border rounded-b-lg">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#FFF1E2] text-[16px] font-[500] leading-[20px] text-[#323232]">
            <tr>
              <th className="py-3 px-4">Lead & Agent</th>
              <th className="py-3 px-4">Project & Developer</th>
              <th className="py-3 px-4">Commission Details</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Payment Status</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {tableData.map((dev) => (
              <tr
                key={dev.id}
                className="border-t border-border hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition"
              >
                <td className="py-3 px-4 text-[14px] font-[600] text-text">
                  {dev.leadAgent}
                  <br />
                  <span className="text-[13px] font-[400] text-[#666]">
                    {dev.subAgent}
                  </span>
                </td>

                <td className="py-3 px-4 text-[14px]">
                  {dev.project}
                  <br />
                  <span className="text-[13px] text-[#666]">
                    {dev.developer}
                  </span>
                </td>

                <td className="py-3 px-4 text-[14px] leading-[20px]">
                  <span className="font-[600]">{dev.commission.total}</span>
                  <br />
                  <span className="text-[#31A24C]">
                    To Release: {dev.commission.toRelease}
                  </span>
                  <br />
                  <span className="text-[#999]">
                    Released: {dev.commission.released}
                  </span>
                  <br />
                  <span className="text-[#999]">
                    Received: {dev.commission.receivedDate}
                  </span>
                </td>

                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-[3px] rounded-full text-[13px] font-[500] ${
                      dev.status === "Received"
                        ? "bg-[#E6F8E6] text-[#31A24C]"
                        : dev.status === "Pending"
                        ? "bg-[#FFF5D8] text-[#F8B400]"
                        : "bg-[#E6E6FF] text-[#4A3AFF]"
                    }`}
                  >
                    {dev.status}
                  </span>
                </td>

                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-[3px] rounded-full text-[13px] font-[500] ${
                      dev.paymentStatus === "Completed"
                        ? "bg-[#E6F8E6] text-[#31A24C]"
                        : dev.paymentStatus === "Pending Release"
                        ? "bg-[#FFF5D8] text-[#F8B400]"
                        : "bg-[#FFE6E6] text-[#E74C3C]"
                    }`}
                  >
                    {dev.paymentStatus}
                  </span>
                </td>

                <td className="py-10 px-4 flex justify-center gap-3 ">
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
                <option>10</option>
                <option>15</option>
                <option>18</option>
              </select>
              <span className="text-gray-500">Items per page</span>
            </div>
          </div>
      </div>
    </Container>
  );
};

export default Commission;
