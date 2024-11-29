import React from 'react'

const HoldTask = ({data}) => {
  return (
    <div> Hold
    <div className="   rounded-xl w-[18vw] h-[18vw] bg-[#6e1478]">
      <div className="flex items-center justify-between">
        <h3 className="font-bold bg-red-600 w-[45px] p-1 m-2    rounded text-center ">
          {data.category}
        </h3>
        <h4 className="font-bold p-2 ">{data.taskDate}</h4>
      </div>
      <h2 className="text-[16px] text-black font-bold  py-[9px]  hover:bg-gradient-to-tr from-[#0d1321] via-[#9eadc4] to-[#043c56] hover:text-transparent hover:bg-clip-text hover:text-[16px] transition-all duration-300 cursor-pointer">
        ➡️ {data.taskTitle}
      </h2>
      <p className="text-white ml-7 py-2 text-sm">
      {data.taskDescription}
      </p>
       <button className='bg-green-600 text-[14px] hover:bg-black hover:text-green-600 transition-all duration-300 text-white px-3 py-1 mx-8 rounded font-semibold'>Start Again</button>
<button className='bg-red-600  text-[14px] hover:bg-black hover:text-red-600  transition-all duration-300 text-white px-3 py-1 rounded font-semibold mx-6 mb-2'>Pause</button>
    </div>
</div>
  )
}

export default HoldTask