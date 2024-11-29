import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../pages/utils/LocalStorage";


// localStorage.clear();
// localStorage.clear();
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    setLocalStorage();
    const  { employees } = getLocalStorage();
    // console.log(employees, admin);
    // setUserData({employees,admin});
    setUserData(employees);
    
  }, []);
  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
