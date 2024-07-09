import React, { useState,useContext , createContext} from 'react';
import Table from './table';
import Navbar from './navbar';
import { counterContext } from '../context/context';

const RightBox = () => {
  const [count, setCount] = useState(0)
  return (
    <counterContext.Provider value={{count,setCount}}>
    <div className='rightbox bg-[#222245] flex-grow '>
        <Navbar/>
        <Table/>
      </div>
      </counterContext.Provider>
  );
};

export default RightBox;
