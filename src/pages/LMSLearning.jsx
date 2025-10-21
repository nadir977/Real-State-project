import React from "react";
import Container from "../structure/Container";
import { LuPlus } from "react-icons/lu";
import { courses } from "../assets/data/data";
import { Eye, Edit3, Trash2 } from "lucide-react";
import { videos } from "../assets/data/data";

const LMSLearning = () => {
  const levelColors = {
    Beginner: "bg-[#FFF1E2] text-[#EBA45E]",
    Advanced: "bg-[#E0E7FF] text-[#4338CA]",
  };

  return (
    <Container>
      <div className="flex justify-between items-start flex-wrap  mb-8 mt-4">
        <div>
          <h1 className="text-[min(10vw,28px)] font-[600] leading-[20px] py-2">
            Learning Management System
          </h1>
          <p className="text-[12px] font-[500] leading-[18px] text-textp">
            Manage training materials, videos, and courses for agents.
          </p>
        </div>

        <button className="flex items-center border border-border py-2 px-4 rounded-lg text-[15px] font-[600] leading-[22px] text-white  bg-primary cursor-pointer w-fit flex-shrink-0  justify-center ">
          <LuPlus className="inline mr-2 w-[16px] h-[16px] " />
          Create Course
        </button>
      </div>

      <div className="p-4 py-8 bg-bg rounded-lg border border-border mt-6">
        <h2 className="text-[24px] font-[600] leading-[28px] text-text mb-6 ">
          All Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="border border-border rounded-xl overflow-hidden bg-main  "
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-[160px] object-cover rounded-t-xl"
              />

              <div className="p-4">
                <h3 className="text-[12px] font-[600] text-text">
                  {course.title}
                </h3>

                <span
                  className={`inline-block text-[11px] font-[600] px-2 py-[2px] rounded-md mt-1 ${
                    levelColors[course.level]
                  }`}
                >
                  {course.level}
                </span>

                <p className="text-[14px] font-[500] mt-2 text-text ">
                  {course.description}
                </p>

                <div className="text-[12px] text-gray-500 font-[500] mt-3 ">
                  <div className="flex gap-1">
                    <p className="text-text">Modules:</p> {course.modules}
                  </div>
                  <div className="flex gap-1">
                    <p className="text-text">Students Enrolled:</p>{" "}
                    {course.students}
                  </div>
                </div>

                <div className="w-full h-[5px] bg-[#E5E7EB] rounded-full mt-3">
                  <div
                    className="h-[5px] bg-[#EBA45E] rounded-full"
                    style={{
                      width: `${(course.modules / 12) * 100}%`,
                    }}
                  ></div>
                </div>

                <div className="flex gap-3 mt-4">
                  <button className="flex items-center justify-center w-full gap-2 text-[13px] border border-border text-gray-600 cursor-pointer rounded-lg py-[6px] hover:bg-gray-300 transition bg-[#DDDDDD]">
                    <Eye size={14} />
                    View
                  </button>
                  <button className="flex items-center justify-center w-full gap-2 text-[13px] bg-[#EBA45E] text-white rounded-lg py-[6px] hover:bg-[#d8914f] transition cursor-pointer">
                    <Edit3 size={14} />
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 py-8 bg-bg rounded-lg border border-border mt-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-text text-[24px] font-[600] leading-[28px]">
            Journey Videos
          </h2>
          <button className="flex items-center border border-border py-2 px-4 rounded-lg text-[15px] font-[600] leading-[22px] text-white  bg-primary cursor-pointer w-fit flex-shrink-0  justify-center ">
            <LuPlus className="inline mr-2 w-[16px] h-[16px] " />
            Add Journey Video
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {videos.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center border border-border bg-main rounded-xl p-8 gap-10"
            >
              <div className="w-full md:w-[240px] flex-shrink-0 overflow-hidden">
                <div className="relative w-full h-[180px] md:h-[200px] rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${item.video
                      .split("/")
                      .pop()}?rel=0`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="flex flex-col  w-full">
                <div>
                  <h2 className="text-[36px] font-[600] text-text mb-2">
                    {item.title}
                  </h2>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[24px] font-[400] text-[#0088FF] hover:underline mb-4 block truncate"
                  >
                    {item.link}
                  </a>
                </div>

                <div className="flex items-center gap-3 mt-4">
                  <button className="p-2 rounded-lg cursor-pointer  hover:bg-hover transition">
                    <Eye className="w-6 h-6 text-[#8280FF]" />
                  </button>
                  <button className="p-2 rounded-lg cursor-pointer  hover:bg-hover transition">
                    <Edit3 className="w-6 h-6 text-[#666666]" />
                  </button>
                  <button className="p-2 rounded-lg cursor-pointer  hover:bg-hover transition">
                    <Trash2 className="w-6 h-6 text-[#EF4444]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 py-8 bg-bg rounded-lg border border-border mt-6">
        <h2 className="text-text text-[24px] font-[600] leading-[28px]">
          Welcome Video
        </h2>

        <div className="w-full h-screen my-6">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/kccOK40L-2Y?rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <button className="flex items-center border border-border py-2 px-4 rounded-lg text-[15px] font-[600] leading-[22px] text-white  bg-primary cursor-pointer w-fit flex-shrink-0  justify-center ">
          <Edit3 className="inline mr-2 w-[16px] h-[16px] " />
          Update Welcome Video
        </button>
      </div>
    </Container>
  );
};

export default LMSLearning;
