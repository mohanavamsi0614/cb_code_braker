import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './Home'
import Reg from './Reg'
import Payment from './payment'
import Admin from './admin'; // Add this line to import the Admin component

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/registration' element={<Reg/>}/>
     {/* <Route path='payment' element={<Payment/>}/> */}
     <Route path='/admin' element={<Admin/>}/> {/* Add this line to define the admin route */}
     </Routes>
    </>
  )
}

export default App
