import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = ({data}) => {
  const authData=useContext(AuthContext)
  // console.log(authData.employees)
  const [userData,setUserData] =  useContext(AuthContext)
  
  return (
    <div className='bg-[#1c1c1c] rounded h-[42vw] p-5 ' id='alltask'>
      <div  className='border-2 border-[#155762] py-2 px-4 mt-5 rounded text-end  text-[18px] flex items-center justify-around'>
            <h2 className='w-1/5 flex items-start'>Name</h2>
            <h3 className='w-1/5'>New Task</h3>
            <h3 className='w-1/5 '>Active</h3>
            <h3 className='w-1/5'>completed</h3>
            <h3 className='w-1/5 mr-[-35px]'>Accepted</h3>
            <h3 className='w-1/5'>failed</h3>
            <h3 className='w-1/5'>hold</h3>
      </div>
          <div className=' '>
          {userData.map((elem,key=tasks) => {
          return  <div key={key} className='border-2 border-[#9772c842] py-2 mt-5 rounded   text-[18px] flex items-center justify-around text-end'>
            <h2 className='w-1/5 ml-[-7vw]'>{elem.FirstName }</h2>
            <h2 className='w-1/5 ml-[4vw] '>{elem.taskCounts.newTask}</h2>
            <h2 className='w-1/5 mr-[-15px]'>{elem.taskCounts.active}</h2>
            <h3 className='w-1/5 '>{elem.taskCounts.completed}</h3>
            <h3 className='w-1/5'>{elem.taskCounts.accepted}</h3>
            <h2 className='w-1/5 mr-[-1vw]'>{elem.taskCounts.failed}</h2>
            <h2 className='w-1/5 mr-[2vw]'>{elem.taskCounts.hold}</h2>
          </div>
      } 
        )}
      </div>
      </div>
    )
}

export default AllTask