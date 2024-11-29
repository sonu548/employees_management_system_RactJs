import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashbord from "./components/Dashbord/EmployeeDashbord";
import AdminDashbord from "./components/Dashbord/AdminDashbord";
import { getLocalStorage, setLocalStorage } from "./pages/utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";


const App = () => {



  
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState()
  const [userData,setUserData] =useContext(AuthContext)
  console.log(userData)

  const userName = JSON.parse(localStorage.getItem(AuthContext));
  // console.log(userName)
  

  useEffect(() => {
    const loggedInUser= localStorage.getItem("loggedInUserData")
    if(loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      // console.log(userData)
      setLoggedInUserData(userData.data)
      // console.log()
    }
  }, [])
  

  // localStorage.clear();
  const handleLogin = (email , password) => {
    // setLocalStorage()
    if (email == "vikrant.kushwaha@admin.com" && password == "12345@AD") {
      setUser("admin");
      localStorage.setItem('loggedInUserData', JSON.stringify({ role: 'admin' }));
    } else if (userData) {
      const employee = userData.find((e)=>email==e.email && password==e.password)
      if (employee) {
        setUser("employee",);
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUserData", JSON.stringify({role:"employee", data: employee}));
      }
      else {
        alert("invalid credentials");
      }
    }
  };

  useEffect(() => {
    // localStorage.clear();
    setLocalStorage();
    getLocalStorage();

  }, []);
 

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : " "}
      {user == "admin" ? < AdminDashbord changeUser={setUser} />  : (user == "employee" ?  <EmployeeDashbord changeUser={setUser} data={loggedInUserData} /> :null) }
      {/* <EmployeeDashbord/> */}
      {/* <AdminDashbord/> */}
    </>
  );
};

export default App;