import React from "react";
import Container from "../structure/Container"; 
import { LuPlus } from "react-icons/lu"; 

const SystemLogs = () => {
     
  return (
    <Container>
      <div className="flex justify-between items-start flex-wrap gap-3 mt-4 mb-8">
        <div>
          <h1 className="text-[min(10vw,28px)] font-[600] leading-[20px] py-2">
            SystemLogs Management
          </h1>
          <p className="text-[12px] font-[500] leading-[18px] text-textp">
            Record SystemLogs from developers and release payments to agents.
          </p>
        </div>

        <button className="flex items-center border border-border py-2 px-4 rounded-lg text-[15px] font-[600] leading-[22px] text-white bg-primary cursor-pointer w-fit flex-shrink-0 justify-center">
          <LuPlus className="inline mr-2 w-[16px] h-[16px]" />
          Add SystemLogs
        </button>
      </div>

      <div className="border mt-8 border-border rounded-lg bg-bg flex flex-col overflow-hidden">
       

        
      </div>
    </Container>
  );
};

export default SystemLogs;
