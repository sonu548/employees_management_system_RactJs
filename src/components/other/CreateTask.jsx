import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { setLocalStorage } from '../../pages/utils/LocalStorage'

const CreateTask = () => {
  const [userData,setUserData] =  useContext(AuthContext)

  const [tasktitle, setTasktitle] = useState('')
  const [date, setDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [category, setCategory] = useState('')
  const [Newtask, setNewTask] = useState({})
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTask({tasktitle,date,asignTo,category,taskDescription,active:false,NewTask:true,FailedTask:false,completed:false,hold:false,accepted:false})
    
    const data=userData

    data.forEach(function(elem) {
      if(asignTo == elem.FirstName){
        elem.tasks.push(Newtask)

        elem.taskCounts.newTask=elem.taskCounts.newTask+1
        console.log(elem.taskCounts.newTask)
      }
    });
    setUserData(data)
    console.log(data)
    setLocalStorage();
    // setTasktitle("")
    // setDate("")
    // setAsignTo("")
    // setCategory("")
    // setTaskDescription("")

 
  }
  

  return (
    <div className=' w-[100%] h-[100%] bg-[#1c1c1c] '>

    <div className=' flex w-[95%] h-[100%] items-start mx-10  bg-gradient-to-tr from-[#182148] via-[#69418d] to-[#3b035c] justify-start p-10 rounded text-gray-400'>
         <form onSubmit={(e) =>
          {
            handleSubmit(e)
          }} 
        className="  bg-gradient-to-tr from-[#10182a] via-[#180345] to-[#8e0298] rounded "action="">
            <div className=' flex items-start justify-between rounded '>
              <div className=' ml-[10vw] m-8 '>

            <h3 className=" text-[18px] my-1 font-bold">Task Title </h3>
            <input value={tasktitle} 
            onChange={(e)=>{setTasktitle(e.target.value)}}

            type="text " className=" w-[50vh] mb-2 h-10 rounded text-gray-600 p-4  "  placeholder="Make a UI design"/>
            <h3 className=" text-[18px] my-1 font-bold">Date</h3>
            <input value={date} 
            onChange={(e)=>{setDate(e.target.value)}}

            type="date" className="w-[50vh]  mb-2 h-10   rounded  text-gray-600  p-4 "  />
            <h3 className=" text-[18px] my-1 font-bold text-gray-500 ">Asign To</h3>
            <input value={asignTo} 
            onChange={(e)=>{setAsignTo(e.target.value)}}
            
            type="text" className=" w-[50vh]  mb-2 h-10   p-4  rounded"placeholder="Employee Name" />
            <h3 className="text-[18px] my-1 font-bold ">Category</h3>
            <input value={category} 
            onChange={(e)=>{setCategory(e.target.value)}}
            
            type="text" className=" w-[50vh]  mb-2 h-10 text-black  rounded  "placeholder="design,dev,etc"/>
              </div>
              <div className=' px-[18vh] '>
              <h3 className="  py-4 text-[18px] font-bold mx-8 mt-[3vh]">Desscription</h3>
              <textarea value={taskDescription}
            onChange={(e)=>{setTaskDescription(e.target.value)}}
              
              name="" className=" w-[60vh] h-[23vh] mx-10 mt-5 rounded text-black capitalize p-4" id="" placeholder='describ about task'></textarea>
            <button className=" bg-emerald-700 rounded py-3 px-5 mx-[25vh] my-3 mt-8 transition-all duration-300  hover:bg-gradient-to-tr from-[#17203e]  to-[#440b7e] ">Create Task</button>
              </div>
              </div>
        </form>
    </div>
    </div>
  )
}
export default CreateTask