import React from "react";
import Header from "../other/Header";
import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";

const AdminDashbord = (props) => {
  // console.log(data.employees);
  return (
    <> 
    <Header changeUser={props.changeUser} data={props.data}/>
    <CreateTask/>
    <AllTask data={props.data}/>
    </>
  );
};

export default AdminDashbord;
