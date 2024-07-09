import {React,useState,useContext} from 'react'
import Navbar from '../navbar'
import { NavLink } from 'react-router-dom'
import { counterContext } from '../../context/context'


const overviwe = () => {
  const value = useContext(counterContext)
  const [activeView, setActiveView] = useState('table')
  return (
    <>
    <div className='rightbox bg-[#222245] flex-grow '>
        <Navbar/>
        <div className="sticky top-0 z-5" >
      <div className="ittem flex gap-2 px-5 text-gray-400 ">
        <NavLink  className={()=>{return activeView === 'table'?'text-white':""}}> 
            <div className={activeView === 'table'?"border-b-2":""}><button  onClick={()=>{setActiveView('table')}} >OVERVIWE</button></div>
        </NavLink>
        <NavLink className={()=>{return activeView === 'box'?'text-white':""}} >
            <div className={activeView === 'box'?"border-b-2":""}><button onClick={()=>{setActiveView('box')}} >LEND</button></div> 
        </NavLink>
      </div>
      <div className="h-[1px] bg-gray-900 w-full"></div>
        </div>
        <div>
            <div className="flex text-white">
              <div className="holding">
                <div>Porfolio Holding</div>
                <div className="ph">
                  <div className="bla">
                    <div className="l"></div>
                    <div className="blance"></div>
                  </div>
                </div>
                <div className="cvlue"></div>
                <div className="inverstedv"></div>
              </div>
              <div className="distribution"></div>
            </div>
            <div className="coindetails">
              <div>Coin Details</div>
            </div>
        </div>
      </div>
    </>
  )
}

export default overviwe
