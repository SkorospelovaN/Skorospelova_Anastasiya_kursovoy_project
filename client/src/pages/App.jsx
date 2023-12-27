import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <div id="root-2">
      <div id="around">
        <Header />
      </div>
      <Outlet />
      <Footer />
    </div>
    </>
  )
}

export default App
