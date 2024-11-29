import React from 'react'

const ActiveTask = ({data}) => {
  return (
    <div>
    <div className='ml text-white'> Active
        <div className="   rounded-xl w-[18vw] h-[18vw]  bg-[#2a1b20]">
          <div className="flex items-center justify-between"> 
            <h3 className="font-bold bg-red-600 w-[112px] p-1 m-2 mx-2 rounded ">
            {data.category}
            </h3>
            <h4 className="font-bold p-2">{data.taskDate}</h4>
          </div>
          <h2 className="text-[16px] text-white font-bold py-[7px]  hover:bg-gradient-to-tr from-[#0d1321] via-[#9eadc4] to-[#043c56] hover:text-transparent hover:bg-clip-text hover:text-[16px] transition-all duration-300 cursor-pointer mx-10 ">
            ➡️ {data.taskTitle}
          </h2>
          <p className="text-white ml-7 py-2 text-sm hover:bg-gradient-to-tr  from-[#a6a6ea] via-purple-400 to-[#ea67f4] hover:text-transparent hover:bg-clip-text hover:text-sm transition-all duration-300 cursor-pointer my-4">
           {data.taskDescription}
          </p>
           <button className='bg-green-600 text-[14px] hover:bg-black hover:text-green-600 transition-all duration-300 text-white px-3 py-1 mx-8 my-[4.5vw] rounded font-semibold'>Pause</button>
    <button className='bg-red-600 text-[14px] hover:bg-black hover:text-red-600  transition-all duration-300 text-white px-3 py-1 rounded font-semibold mx-8 mb-4'>Hold</button>
        </div>
    </div>
</div>
  )
}

export default ActiveTask