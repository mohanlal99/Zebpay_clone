import React from 'react';
import { useState  ,useContext} from 'react';
import Image from './images/image.png'
import { NavLink } from 'react-router-dom';

const Table = () => {
  const [activeView, setActiveView] = useState('table')
  const [star, setStar] = useState(0)
  return (
    <>
    <div className="sticky top-0 z-5" >
      <div className="ittem flex gap-2 px-5 text-gray-400 ">
        <NavLink  className={()=>{return activeView === 'table'?'text-white':""}}> 
            <div className={activeView === 'table'?"border-b-2":""}><button  onClick={()=>{setActiveView('table')}} >ALL PAIRS</button></div>
        </NavLink>
        <NavLink className={()=>{return activeView === 'box'?'text-white':""}} >
            <div className={activeView === 'box'?"border-b-2":""}><button onClick={()=>{setActiveView('box')}} >FAVOURITES</button></div> 
        </NavLink>
      </div>
      <div className="h-[1px] bg-gray-900 w-full"></div>
      </div>
    <div className=" flex-grow flex flex-col p-2 items-center justify-strat">
      {activeView === 'table'?(
        <div className="table flex-grow w-full content  bg-__primary text-_white text-sm rounded-md m-6">    
        <div className="usdt  flex gap-2 text-center p-2 bg-gray-700 rounded-t-md">
          <div className='w-1/2 font-bold bg-blue-800 p-2 rounded-md'>INR</div>
          <div className='w-1/2 font-bold bg-blue-800 p-2 rounded-md'>USDT</div>
        </div>
        <div className="table-body  overflow-y-auto h-[calc(100vh-150px)]">
        <table className="w-full border-collapse ">
          <thead className='border-b-[1px] sticky top-0 bg-__primary shadow-md text-gray-400'>
            <tr>
              <th className=" font-normal text-start px-4 py-3"><i className="fa-solid fa-magnifying-glass"></i> Coins</th>
              <th className=" font-normal text-start px-4 py-3">Market Price</th>
              <th className=" font-normal text-start px-4 py-3">Change (24h)</th>
              <th className=" font-normal text-start px-4 py-3">Volume (24h)</th>
              <th className=" font-normal text-start px-4 py-3">Options</th>
            </tr>
          </thead>
          <tbody className='border-b-[1px] border-b-gray-400'>
            <tr>
              <td className=" px-4 py-2 flex gap-2">
                <div className=' items-center flex gap-4'>
                <div className="star"><button onClick={()=>{star === 0?setStar(1):setStar(0)}}>{star === 0?(<i className="fa-regular fa-star"></i> ):(<i class="fa-solid fa-star"></i>)}</button> </div>
                <div className="lgo"><i className="text-blue-900 text-3xl fa-brands fa-bitcoin"></i></div>
                </div>
                <div className="name">
                  <div className="font-bold">BTTC</div>
                  <div className="text-gray-400"> BitTorrenti(new)</div>
                </div>
              </td>
              <td className=" px-4 py-2">0.000075 INR</td>
              <td className=" px-4 py-2">0.0000012</td>
              <td className=" px-4 py-2">3595923595.4 BTTC</td>
              <td className=" flex gap-2  px-4 py-2">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-5 rounded">BUY</button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-5 rounded">SELL</button>
              </td>
            </tr>
            <tr>
              <td className=" px-4 py-2 flex gap-2">
                <div className=' items-center flex gap-4'>
                <div className="star"><button onClick={()=>{star === 0?setStar(1):setStar(0)}}>{star === 0?(<i className="fa-regular fa-star"></i> ):(<i class="fa-solid fa-star"></i>)}</button> </div>
                <div className="lgo"><i className="text-blue-900 text-3xl fa-brands fa-bitcoin"></i></div>
                </div>
                <div className="name">
                  <div className="font-bold">BTTC</div>
                  <div className="text-gray-400"> BitTorrenti(new)</div>
                </div>
              </td>
              <td className=" px-4 py-2">0.000075 INR</td>
              <td className=" px-4 py-2">0.0000012</td>
              <td className=" px-4 py-2">3595923595.4 BTTC</td>
              <td className=" flex gap-2  px-4 py-2">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-5 rounded">BUY</button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-5 rounded">SELL</button>
              </td>
            </tr>
            <tr>
              <td className=" px-4 py-2 flex gap-2">
                <div className=' items-center flex gap-4'>
                <div className="star"><button onClick={()=>{star === 0?setStar(1):setStar(0)}}>{star === 0?(<i className="fa-regular fa-star"></i> ):(<i class="fa-solid fa-star"></i>)}</button> </div>
                <div className="lgo"><i className="text-blue-900 text-3xl fa-brands fa-bitcoin"></i></div>
                </div>
                <div className="name">
                  <div className="font-bold">BTTC</div>
                  <div className="text-gray-400"> BitTorrenti(new)</div>
                </div>
              </td>
              <td className=" px-4 py-2">0.0000002 INR</td>
              <td className=" px-4 py-2">0.0000012</td>
              <td className=" px-4 py-2">3595923595.4 BTTC</td>
              <td className=" flex gap-2  px-4 py-2">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-5 rounded">BUY</button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-5 rounded">SELL</button>
              </td>
            </tr>
            <tr>
              <td className=" px-4 py-2 flex gap-2">
                <div className=' items-center flex gap-4'>
                <div className="star"><button onClick={()=>{star === 0?setStar(1):setStar(0)}}>{star === 0?(<i className="fa-regular fa-star"></i> ):(<i class="fa-solid fa-star"></i>)}</button> </div>
                <div className="lgo"><i className="text-blue-900 text-3xl fa-brands fa-bitcoin"></i></div>
                </div>
                <div className="name">
                  <div className="font-bold">BTTC</div>
                  <div className="text-gray-400"> BitTorrenti(new)</div>
                </div>
              </td>
              <td className=" px-4 py-2">0.000075 INR</td>
              <td className=" px-4 py-2">0.0000012</td>
              <td className=" px-4 py-2">3595923595.4 BTTC</td>
              <td className=" flex gap-2  px-4 py-2">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-5 rounded">BUY</button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-5 rounded">SELL</button>
              </td>
            </tr>
            <tr>
              <td className=" px-4 py-2 flex gap-2">
                <div className=' items-center flex gap-4'>
                <div className="star"><button onClick={()=>{star === 0?setStar(1):setStar(0)}}>{star === 0?(<i className="fa-regular fa-star"></i> ):(<i class="fa-solid fa-star"></i>)}</button> </div>
                <div className="lgo"><i className="text-blue-900 text-3xl fa-brands fa-bitcoin"></i></div>
                </div>
                <div className="name">
                  <div className="font-bold">BTTC</div>
                  <div className="text-gray-400"> BitTorrenti(new)</div>
                </div>
              </td>
              <td className=" px-4 py-2">0.000075 INR</td>
              <td className=" px-4 py-2">0.0000012</td>
              <td className=" px-4 py-2">3595923595.4 BTTC</td>
              <td className=" flex gap-2  px-4 py-2">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-5 rounded">BUY</button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-5 rounded">SELL</button>
              </td>
            </tr>
            <tr>
              <td className=" px-4 py-2 flex gap-2">
                <div className=' items-center flex gap-4'>
                <div className="star"><button onClick={()=>{star === 0?setStar(1):setStar(0)}}>{star === 0?(<i className="fa-regular fa-star"></i> ):(<i class="fa-solid fa-star"></i>)}</button> </div>
                <div className="lgo"><i className="text-blue-900 text-3xl fa-brands fa-bitcoin"></i></div>
                </div>
                <div className="name">
                  <div className="font-bold">BTTC</div>
                  <div className="text-gray-400"> BitTorrenti(new)</div>
                </div>
              </td>
              <td className=" px-4 py-2">0.000075 INR</td>
              <td className=" px-4 py-2">0.0000012</td>
              <td className=" px-4 py-2">3595923595.4 BTTC</td>
              <td className=" flex gap-2  px-4 py-2">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-5 rounded">BUY</button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-5 rounded">SELL</button>
              </td>
            </tr>
            <tr>
              <td className=" px-4 py-2 flex gap-2">
                <div className=' items-center flex gap-4'>
                <div className="star"><button onClick={()=>{star === 0?setStar(1):setStar(0)}}>{star === 0?(<i className="fa-regular fa-star"></i> ):(<i class="fa-solid fa-star"></i>)}</button> </div>
                <div className="lgo"><i className="text-blue-900 text-3xl fa-brands fa-bitcoin"></i></div>
                </div>
                <div className="name">
                  <div className="font-bold">BTTC</div>
                  <div className="text-gray-400"> BitTorrenti(new)</div>
                </div>
              </td>
              <td className=" px-4 py-2">0.000075 INR</td>
              <td className=" px-4 py-2">0.0000012</td>
              <td className=" px-4 py-2">3595923595.4 BTTC</td>
              <td className=" flex gap-2  px-4 py-2">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-5 rounded">BUY</button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-5 rounded">SELL</button>
              </td>
            </tr>
            <tr>
              <td className=" px-4 py-2 flex gap-2">
                <div className=' items-center flex gap-4'>
                <div className="star"><button onClick={()=>{star === 0?setStar(1):setStar(0)}}>{star === 0?(<i className="fa-regular fa-star"></i> ):(<i class="fa-solid fa-star"></i>)}</button> </div>
                <div className="lgo"><i className="text-blue-900 text-3xl fa-brands fa-bitcoin"></i></div>
                </div>
                <div className="name">
                  <div className="font-bold">BTTC</div>
                  <div className="text-gray-400"> BitTorrenti(new)</div>
                </div>
              </td>
              <td className=" px-4 py-2">0.000075 INR</td>
              <td className=" px-4 py-2">0.0000012</td>
              <td className=" px-4 py-2">3595923595.4 BTTC</td>
              <td className=" flex gap-2  px-4 py-2">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-5 rounded">BUY</button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-5 rounded">SELL</button>
              </td>
            </tr>
            <tr>
              <td className=" px-4 py-2 flex gap-2">
                <div className=' items-center flex gap-4'>
                <div className="star"><button onClick={()=>{star === 0?setStar(1):setStar(0)}}>{star === 0?(<i className="fa-regular fa-star"></i> ):(<i class="fa-solid fa-star"></i>)}</button> </div>
                <div className="lgo"><i className="text-blue-900 text-3xl fa-brands fa-bitcoin"></i></div>
                </div>
                <div className="name">
                  <div className="font-bold">BTTC</div>
                  <div className="text-gray-400"> BitTorrenti(new)</div>
                </div>
              </td>
              <td className=" px-4 py-2">0.000075 INR</td>
              <td className=" px-4 py-2">0.0000012</td>
              <td className=" px-4 py-2">3595923595.4 BTTC</td>
              <td className=" flex gap-2  px-4 py-2">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-5 rounded">BUY</button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-5 rounded">SELL</button>
              </td>
            </tr>
            <tr>
              <td className=" px-4 py-2 flex gap-2">
                <div className=' items-center flex gap-4'>
                <div className="star"><button onClick={()=>{star === 0?setStar(1):setStar(0)}}>{star === 0?(<i className="fa-regular fa-star"></i> ):(<i class="fa-solid fa-star"></i>)}</button> </div>
                <div className="lgo"><i className="text-blue-900 text-3xl fa-brands fa-bitcoin"></i></div>
                </div>
                <div className="name">
                  <div className="font-bold">BTTC</div>
                  <div className="text-gray-400"> BitTorrenti(new)</div>
                </div>
              </td>
              <td className=" px-4 py-2">0.000075 INR</td>
              <td className=" px-4 py-2">0.0000012</td>
              <td className=" px-4 py-2">3595923595.4 BTTC</td>
              <td className=" flex gap-2  px-4 py-2">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-5 rounded">BUY</button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-5 rounded">SELL</button>
              </td>
            </tr>
            <tr>
              <td className=" px-4 py-2 flex gap-2">
                <div className=' items-center flex gap-4'>
                <div className="star"><button onClick={()=>{star === 0?setStar(1):setStar(0)}}>{star === 0?(<i className="fa-regular fa-star"></i> ):(<i class="fa-solid fa-star"></i>)}</button> </div>
                <div className="lgo"><i className="text-blue-900 text-3xl fa-brands fa-bitcoin"></i></div>
                </div>
                <div className="name">
                  <div className="font-bold">BTTC</div>
                  <div className="text-gray-400"> BitTorrenti(new)</div>
                </div>
              </td>
              <td className=" px-4 py-2">0.000075 INR</td>
              <td className=" px-4 py-2">0.0000012</td>
              <td className=" px-4 py-2">3595923595.4 BTTC</td>
              <td className=" flex gap-2  px-4 py-2">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-5 rounded">BUY</button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-5 rounded">SELL</button>
              </td>
            </tr>
            <tr>
              <td className=" px-4 py-2 flex gap-2">
                <div className=' items-center flex gap-4'>
                <div className="star"><button onClick={()=>{star === 0?setStar(1):setStar(0)}}>{star === 0?(<i className="fa-regular fa-star"></i> ):(<i class="fa-solid fa-star"></i>)}</button> </div>
                <div className="lgo"><i className="text-blue-900 text-3xl fa-brands fa-bitcoin"></i></div>
                </div>
                <div className="name">
                  <div className="font-bold">BTTC</div>
                  <div className="text-gray-400"> BitTorrenti(new)</div>
                </div>
              </td>
              <td className=" px-4 py-2">0.000075 INR</td>
              <td className=" px-4 py-2">0.0000012</td>
              <td className=" px-4 py-2">3595923595.4 BTTC</td>
              <td className=" flex gap-2  px-4 py-2">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-5 rounded">BUY</button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-5 rounded">SELL</button>
              </td>
            </tr>
            <tr>
              <td className=" px-4 py-2 flex gap-2">
                <div className=' items-center flex gap-4'>
                <div className="star"><button onClick={()=>{star === 0?setStar(1):setStar(0)}}>{star === 0?(<i className="fa-regular fa-star"></i> ):(<i class="fa-solid fa-star"></i>)}</button> </div>
                <div className="lgo"><i className="text-blue-900 text-3xl fa-brands fa-bitcoin"></i></div>
                </div>
                <div className="name">
                  <div className="font-bold">BTTC</div>
                  <div className="text-gray-400"> BitTorrenti(new)</div>
                </div>
              </td>
              <td className=" px-4 py-2">0.000075 INR</td>
              <td className=" px-4 py-2">0.0000012</td>
              <td className=" px-4 py-2">3595923595.4 BTTC</td>
              <td className=" flex gap-2  px-4 py-2">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-5 rounded">BUY</button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-5 rounded">SELL</button>
              </td>
            </tr>
            
          </tbody>
        </table>
        </div>
        </div>
      ):(
      <div className="box w-full  overflow-y-auto bg-__primary text-_white m-6 roundend-md">
        <div className="second flex flex-col gap-3 items-center justify-center h-[75vh]">
          <div className="imgage">
            <img src={Image} alt="" />
          </div>
          <div className='text-3xl font-bold '>Keep track of your favourite coins</div>
          <div className='text-2xl from-600 text-gray-500'>Add coins to your watchlist and track them all from one place</div>
          <div className=" bg-blue-500 p-2 text-xl font-medium px-36 cursor-pointer rounded-lg ">Go To All Coins</div>
        </div>
      </div>
      )} 
    </div>
    </>
  );
};

export default Table;
