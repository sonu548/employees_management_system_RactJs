import React from 'react'

const CompleteTask = ({data}) => {
  // console.log(data)
  return (
    <div> Completed
        <div className="   rounded-xl w-[18vw] h-[18vw] bg-[#8f517c]">
          <div className="flex items-center justify-between">
            <h3 className="font-bold bg-red-600 w-[80px] ml-2 p-1 m-2  rounded text-center ">
            {data.category}
            </h3>
            <h4 className="font-bold p-2 ">{data.taskDate}</h4>
          </div>
          <h2 className="text-[16px] text-black font-bold py-[7px]   ">
            <span className='text-black mx-10  hover:bg-gradient-to-tr from-[#0d1321] via-[#283954] to-[#3f7086] hover:text-transparent hover:bg-clip-text hover:text-[16px] transition-all duration-300 cursor-pointer'>➡️ {data.taskTitle}</span> 
          </h2>
          <p className="text-white ml-7 py-1 text-sm  hover:bg-gradient-to-tr mb-[6vw] from-[#3f4654] via-[#080231] to-[#286680] hover:text-transparent hover:bg-clip-text hover:text-sm transition-all duration-300 cursor-pointer my-7">
            {data.taskDescription}
          </p>
          <button className='bg-green-600 w-[230px] text-[14px] hover:bg-black hover:text-green-600 transition-all duration-300 text-white px-3 py-1 mx-5  rounded font-semibold'>Completed</button>
  
    </div>
    </div>
  )
}

export default CompleteTask