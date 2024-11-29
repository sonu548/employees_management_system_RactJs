import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div>
 <div>
    {/* <div className='bg-gradient-to-tr from-[#f1959c] via-[#f1959c] to-[#f1959c] text-transparent bg-clip-text '>
        Failed task
    </div> */}
        <div className="   rounded-xl w-[18vw] h-[18vw] bg-[#f1959c]">
          <div className="flex items-center justify-between">
            <h3 className="font-bold bg-red-600 w-[90px] p-1 m-2 mx-2 rounded text-center ">
            {data.category}
            </h3>
            <h4 className="font-bold p-2 ">{data.taskDate}</h4>
          </div>
          <h2 className="text-[20px] text-black font-bold p-2  hover:bg-gradient-to-tr from-[#0d1321] via-[#9eadc4] to-[#043c56] hover:text-transparent hover:bg-clip-text hover:text-[16px] transition-all duration-300 cursor-pointer ">
            ➡️ {data.taskTitle}
          </h2>
          <p className="text-white ml-7 py-2 text-sm">
          {data.taskDescription}
          </p>
          <button className='bg-green-600 text-[14px] hover:bg-black hover:text-green-600 transition-all duration-300 text-white px-3 py-1 mx-8 rounded font-semibold'>Accept Again</button>
          <button className='bg-red-600 text-[14px] hover:bg-black hover:text-red-600  transition-all duration-300 text-white px-3 py-1 rounded font-semibold mb-2'>Hold</button>
        </div>
    </div>
</div>
  )
}

export default FailedTask