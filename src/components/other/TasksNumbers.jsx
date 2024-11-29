import React from "react";

const TasksNumbers = ({data}) => {
  return (
    <div className="   my-[40px] gap-3 grid grid-cols-2 text-white ">
      <div className="h-40  bg-red-500 rounded-xl flex items-center justify-center gap-10 ">
        <h1 className="text-2xl  font-bold text-black block ">{data.taskCounts.newTask}</h1>
        <h1 className="text-1xl font-bold text-white hover:bg-gradient-to-tr from-[#10182a] via-[#4a1b08] to-[#1399d7] hover:text-transparent hover:bg-clip-text hover:text-[18px] transition-all duration-300 cursor-pointer">New Task</h1>
      </div>
      <div className="h-40  bg-[#0d4140] rounded-xl   flex items-center justify-center gap-3 ">
        <h1 className="text-2xl text-green-500 font-bold block ">{data.taskCounts.completed}</h1>
        <h1 className="text-1xl font-bold hover:bg-gradient-to-tr from-[#000000e1] via-[#d7d8de] to-[#82cfef] hover:text-transparent hover:bg-clip-text text-green-400 hover:text-[18px] transition-all duration-300 cursor-pointer">Completed Task</h1>
      </div>
      <div id="Accepted" className="h-40  bg-green-500 rounded-xl  flex items-center justify-center gap-4">
        <h1 className="text-2xl text-black font-bold block ">{data.taskCounts.accepted}</h1>
        <h1 className="text-1xl font-bold hover:bg-gradient-to-tr from-[#000000e1] via-[#5c5959]  to-[#000000] hover:text-transparent hover:bg-clip-text hover:text-[18px] transition-all duration-300 cursor-pointer">Accepted Task</h1>
      </div>
      <div className="h-40  bg-yellow-500 rounded-xl  flex items-center justify-center gap-10">
        <h1 className="text-2xl font-bold text-blue-600 block ">{data.taskCounts.active}</h1>
        <h1 className="text-1xl font-bold hover:bg-gradient-to-tr from-[#1b1b42e1] via-[#21a1cb] to-[#070737] hover:text-transparent hover:bg-clip-text hover:text-[18px] transition-all duration-300 cursor-pointer">Active Task </h1>
      </div>
      <div className="h-40  bg-[#2D4362] rounded-xl  flex items-center justify-center gap-10">
        <h1 className="text-2xl font-bold text-red-500 block ">{data.taskCounts.failed}</h1>
        <h1 className="text-1xl font-bold hover:bg-gradient-to-tr from-[#eb180d] via-[#ff579a] to-[#eb180d] hover:text-transparent hover:bg-clip-text hover:text-[18px] transition-all duration-300 cursor-pointer">Failed Task</h1>
      </div>
      <div className="h-40  bg-slate-500 rounded-xl  flex items-center justify-center gap-10">
        <h1 className="text-2xl font-bold text-black block  ">{data.taskCounts.hold}</h1>
        <h1 className="text-1xl font-bold text-white hover:bg-gradient-to-tr from-[#000000e1] via-[#454549] to-[#010101] hover:text-transparent hover:bg-clip-text hover:text-[18px] transition-all duration-300 cursor-pointer">Hold Task </h1>
      </div>
    </div>
  );
};

export default TasksNumbers;
