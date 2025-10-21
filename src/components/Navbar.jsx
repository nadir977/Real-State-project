import React, { useState, useEffect, useRef } from "react";
import DarkMode from "./DarkMode";
import { HiOutlineBell } from "react-icons/hi2";
import Avatar from "../assets/Avatar.png";
import { IoPersonOutline, IoLogOutOutline } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-between px-[24px] py-1 border border-border rounded-lg bg-bg relative">
      <h1 className="text-[20px] font-[500] leading-[28px]">Hello John Doe!</h1>

      <div className="flex items-center gap-4">
        <DarkMode />

        <div className="relative">
          <HiOutlineBell className="w-[24px] h-[24px] cursor-pointer text-text" />
          <span className="absolute top-0 right-0 block h-[8px] w-[8px] rounded-full bg-red-500 ring-2 ring-bg"></span>
        </div>

        <div className="relative" ref={menuRef}>
          <img
            src={Avatar}
            alt="Avatar"
            className="cursor-pointer w-[40px] h-[40px] rounded-full"
            onClick={() => setOpen(!open)}
          />
          <span className="absolute bottom-0 right-0 block h-[10px] w-[10px] rounded-full bg-green-500 ring-2 ring-bg"></span>

          {open && (
            <div className="absolute right-0 mt-2 w-[200px] bg-bg border border-border rounded-lg shadow-lg py-3 animate-fadeIn z-10">
              <div className="flex items-center px-4 pb-3 border-b border-border">
                <img
                  src={Avatar}
                  alt="Avatar"
                  className="w-[36px] h-[36px] rounded-full mr-3"
                />
                <div>
                  <h2 className="text-[14px] font-[500] text-text">John Doe</h2>
                  <p className="text-[12px] text-gray-400">Admin</p>
                </div>
              </div>

              <div className="flex items-center py-3 px-4 border-b border-border cursor-pointer hover:bg-hover transition hover:bg-primary/10">
                <IoPersonOutline />
                <span className="text-[14px] text-text ml-2">My Profile</span>
              </div>

              <button className="w-[calc(100%-1rem)] mx-auto block text-left px-4 py-2 text-[14px] text-white hover:opacity-90 rounded-lg mt-3 cursor-pointer bg-primary transition">
                Logout
                <IoLogOutOutline className="inline ml-2" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
