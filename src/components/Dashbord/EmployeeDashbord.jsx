import React from 'react'
import Header from '../other/Header'
import TasksNumbers from '../other/TasksNumbers'
import TaskList from '../other/TaskList'
import AllTask from '../other/AllTask'

const EmployeeDashbord = (props) => {
  // console.log(data)

  return (
    <div className='p-10 bg-[#1c1c1c] h-100vh'> 
        <Header changeUser={props.changeUser} data={props.data} />
        <TasksNumbers data={props.data} />
        <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashbord