import React from 'react'
import Navbar from '../navbar'

const cryptopack = () => {
  return (
    <div className='rightbox bg-[#222245] flex-grow overflow-y-auto'>
      <Navbar />
      <div>
      <div className="sticky top-0 z-5" >
      <div className="ittem flex gap-2 px-5 text-gray-400 font-bold">
            <div className='border-b-2'><button>ALL CRYPTOPACKS</button></div>
            <div className='border-b-2'><button>MY CRYPTOPACKS</button></div> 
      </div>
      <div className='h-[1px] bg-[#223030] '></div>
      </div>
      <div className="tablee bg-__primary p-5 rounded-md m-5">
        <div className="flex gap-2 p-3 justify-between bg-__second ">
          <div className="name">
            <div>Bitcoin Ecosystem</div>
            <div>Bitcoin Powered Ecosystem</div>
          </div>
          <div className='flex gap-2'>
            <div>
            <div>Min Investment</div>
            <div> 2,500 INR </div>
            </div>
            <div>
              <div>No.of Coins </div>
              <div>4</div>
            </div>
            <div>
              <div>P&L</div>
              <div>6.73% | 1M</div>
            </div>
            <div>
              graf   
            </div>
          </div>
          <hr />
        </div>
      </div>
      </div>
    </div>
  )
}

export default cryptopack


