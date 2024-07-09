import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Sidebar from './componats/sidebar'
import Rightbox from './componats/rightbox'
import { Cryptopack ,Market,Lend,Overviwe,Order,Wallet} from './componats/pages/allpage'

function App() {

  const router = createBrowserRouter([

    {
    path:"/",
    element:  <> <Sidebar/>  <Rightbox/> </>
    },
    {
    path:"/cryptopack",
    element:  <> <Sidebar/>  <Cryptopack/></>
    },
    {
    path:"/overviwe",
    element:  <> <Sidebar/>   <Overviwe/> </>
    },
    {
    path:"/lend",
    element: <>  <Sidebar/>   <Lend/></>
    },
    {
    path:"/market",
    element:  <> <Sidebar/>   <Market/></>
    },
    {
    path:"/order",
    element:  <> <Sidebar/>   <Order/></>
    },
    {
      path:"/wallet",
      element: <>  <Sidebar/>  <Wallet/></>
    }

  ])


  return (
    <>

    <div className="mainbox flex  overflow-hidden h-screen">
      <RouterProvider router={router}/>
    </div>
    </>
  )
}

export default App
