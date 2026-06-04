import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Home'
import NavigationBar from './Components/NavigationBar'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div>hello</div> */}
    <NavigationBar/>
    <Home/>
    <Footer/>
    </>
  )
}

export default App
