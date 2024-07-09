import React from "react";
import logo from "./images/download.svg";
import {createBrowserRouter} from 'react-router-dom'
import { NavLink } from "react-router-dom";

const sidebar = () => {
  return (
      <div className="leftbox p-2 min-w-56 text-_white bg-__primary overflow-y-auto scrollbar-hide">
        <div className="logo flex justify-center items-center p-3  ">
          <img width={120} src={logo} alt="" />
        </div>
        <div className="border-gray-700 border-b-[1px] h-[1px] mx-3"></div>
        <div className="firstbox p-3">
            <sapn className="text-gray-400 text-[10px] font-bold">Trade & Invest</sapn>
          <div className="first">
                <NavLink to="/"className={(e)=>{return e.isActive?"sActive":""}}>
                    <div className="flex gap-3 my-1 hover:opacity-100  opacity-70 rounded-md hover:bg-__second items-center p-2"><i className=" border rounded-full p-1 fa-regular fa-clock"></i><span className="text-xs">QuickTrade</span></div>
                </NavLink>
                <NavLink to="Exchange" target="_blank" className={(e)=>{return e.isActive?"sActive":""}}>
                    <div className="flex gap-3 my-1 hover:opacity-100 opacity-70 rounded-md hover:bg-__second items-center p-2"><i className=" border rounded-full p-1 fa-solid fa-right-left"></i><span className="text-xs">Exchange</span></div>
                </NavLink>
                <NavLink to="futures"  target="_blank" className={(e)=>{return e.isActive?"sActive":""}}>
                    <div className="flex gap-3 my-1 hover:opacity-100 opacity-70 rounded-md hover:bg-__second items-center p-2"><i className=" border rounded-full p-1 fa-solid fa-dna"></i><span className="text-xs">Futures</span></div>
                </NavLink>
                <NavLink to="/cryptopack" className={(e)=>{return e.isActive?"sActive":""}}>
                    <div className="flex gap-3 my-1 hover:opacity-100 opacity-70 rounded-md hover:bg-__second items-center p-2"><i className=" border rounded-full p-1 fa-brands fa-wolf-pack-battalion"></i><span className="text-xs">CryptoPacks</span></div>
                </NavLink>
          </div>
        </div>
        <div className="border-gray-700 border-b-[1px] h-[1px] mx-3"></div>
        <div className="secondbox p-3">
            <sapn className="text-gray-400 text-[10px] font-bold">Portfolio</sapn>
          <div className="first">
                <NavLink to="/overviwe" className={(e)=>{return e.isActive?"sActive":""}}>
                    <div className="flex gap-3 my-1 hover:opacity-100 opacity-70 rounded-md hover:bg-__second items-center p-2"><i className=" border rounded-full p-1 fa-solid fa-certificate "></i><span className="text-xs">Overviwe</span></div>
                </NavLink>
                <NavLink to="/lend" className={(e)=>{return e.isActive?"sActive":""}}>
                    <div className="flex gap-3 my-1 hover:opacity-100 opacity-70 rounded-md hover:bg-__second items-center p-2"><i className=" border rounded-full p-1 fa-solid fa-arrow-trend-up"></i><span className="text-xs">Lend</span></div>
                </NavLink>
          </div>
        </div>
        <div className="border-gray-700 border-b-[1px] h-[1px] mx-3"></div>
        <div className="Thirdbox p-3">
            <sapn className="text-gray-400 text-[10px] font-bold">Others</sapn>
          <div className="first">
                <NavLink to="/market" className={(e)=>{return e.isActive?"sActive":""}}>
                    <div className="flex gap-3 my-1 hover:opacity-100 opacity-70 rounded-md hover:bg-__second items-center p-2"><i className=" border rounded-full p-1 fa-solid fa-shop"></i><span className="text-xs">Market</span></div>
                </NavLink>
                <NavLink to="/order" className={(e)=>{return e.isActive?"sActive":""}}>
                    <div className="flex gap-3 my-1 hover:opacity-100 opacity-70 rounded-md hover:bg-__second items-center p-2"><i className=" border rounded-full p-1 fa-solid fa-arrow-down-up-across-line"></i><span className="text-xs">Orders</span></div>
                </NavLink>
                <NavLink to="/wallet" className={(e)=>{return e.isActive?"sActive":""}}>
                    <div className="flex gap-3 my-1 hover:opacity-100 opacity-70 rounded-md hover:bg-__second items-center p-2"><i className=" border rounded-full p-1 fa-solid fa-wallet"></i><span className="text-xs">Wallet</span></div>
                </NavLink>
          </div>
        </div>
        <div className="border-gray-700 border-b-[1px] h-[1px] mx-3"></div>
        <div className="depositbox p-4 py-5">
            <div className="linerbg rounded-md px-3 py-2 ">
                <h2 className="text-sm flex gap-2 items-center "><i className="text-lime-400 text-xl fa-solid fa-money-bill-transfer"></i>Deposit</h2>
                <p className="py-1 text-sm">Click here to make your Deposit</p>
                <NavLink to="/deposit">
                <div className="dbutton text-center border my-2 p-1 rounded-md">
                    Deposit Now
                </div>
                </NavLink>
            </div>
        </div>
       
      </div>
  );
};

export default sidebar;
