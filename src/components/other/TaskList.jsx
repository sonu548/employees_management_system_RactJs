import React from "react";
import AcceptTask from "../TaskList/AcceptTask";
import CompleteTask from "../TaskList/CompleteTask";
import FailedTask from "../TaskList/FailedTask";
import HoldTask from "../TaskList/HoldTask";
import NewTask from "../TaskList/NewTask";
import ActiveTask from "../TaskList/ActiveTask";
import AllTask from "./AllTask";

const TaskList = ({data}) => {
  return (
    <>
    <div id="tasklistTask" className="flex items-start justify-start flex-shrink-0 overflow-x-auto gap-3">
      {data.tasks.map((elem,idx)=>{
        if(elem.newTask){
          return <NewTask key={idx} data={elem}/>
        }
        if(elem.completed){
          return <CompleteTask key={idx} data={elem}/>
        }
        if(elem.accepted){
          return <AcceptTask  key={idx} data={elem}/>
        }
        if(elem.active){
          return <ActiveTask  key={idx} data={elem}/>
        }
        if(elem.failed){
          return <FailedTask  key={idx} data={elem}/>
        }
        
        if(elem.hold){
          return <HoldTask  key={idx} data={elem}/>
        }
      })}
      
    </div>
      </>
  );
};

export default TaskList;
