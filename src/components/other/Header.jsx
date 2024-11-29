import React, { useState } from 'react'
import TasksNumbers from './TasksNumbers'
import { setLocalStorage } from '../../pages/utils/LocalStorage';

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!username) {
  //   setUsername('admin')
  // }else{
  //   setUsername(props.data.FirstName)
  // }
  
  // console.log(data.taskCounts)

  const logOutUser = () =>{
     localStorage.setItem('loggedInUserData', '');
     props.changeUser('');
    //  window.location.reload();
    // setLocalStorage();

  }
  
  return (
    <div className='flex items-end justify-between px-10  bg-[#1c1c1c] py-3'>
      <h1 className='text-2xl text-white '>Hello <br /><span id='headName' className='text-2xl font-bold hover:bg-gradient-to-r from-[#563b8d] via-[#d89573] to-[#fb09b2] hover:text-transparent hover:bg-clip-text transition-ease duration-300'> {} 💕</span> </h1>
      <button onClick={logOutUser} className=' bg-red-700 text-lg hover:bg-black hover:text-green-500 transition-all duration-300 font-bold px-5 py-2 rounded text-white'>Log Out</button>
        {/* <h2 className='font-bold text-[17px] text-center bg-red-700 w-[100px] h-[40px] rounded '>LogOut</h2> */}
        </div>
       
  )
}

export default Header