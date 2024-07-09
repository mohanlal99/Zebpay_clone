import {React,useState} from 'react'
import { counterContext } from '../context/context'

const navbar = () => {
  
  const [count, setCount] = useState(0.00)
  return (
    <counterContext.Provider value={{count,setCount}}>
      <div className='sticky  top-0 z-10 bg-[#222245]'>
        <div className="navbar sticky top-0 z-10 flex justify-between items-center p-5 bg-[#222245]">
          <div className="left flex gap-3">
            <i className="text-[14px] font-bold text-white px-3 p-2 bg-__primary rounded-md fa-solid fa-chevron-left"></i>
            <span className='text-xl text-white font-bold'>QuickTrade</span>
          </div>
          <div className="right flex items-center gap-3">
            <div className="wallet flex gap-3 items-center text-gray-400 hover:text-white bg-__primary p-2 rounded-md px-3">
              <i className="fa-solid fa-wallet"></i> 
              <button onClick={()=>{setCount(count + 1)}}> <span className='text-sm'>Wallet balance :{count} INR</span></button>
            </div>
            <div className="message p-2 cursor-pointer shadow-black rounded-md bg-__primary px-3 text-gray-300 hover:text-white">
              <i className="fa-solid fa-message"></i>
            </div>
            <div className="message p-2 cursor-pointer shadow-black rounded-md bg-__primary px-4 text-gray-300 hover:text-white">
              <i className="fa-solid fa-question"></i>
            </div>
            <div className="profile p-2 cursor-pointer shadow-black rounded-md bg-__primary px-3 text-gray-300 hover:text-white">
              <i className="fa-solid fa-user"></i>
            </div>
          </div>
        </div>
        </div>
  </counterContext.Provider>
        
  )
}

export default navbar
