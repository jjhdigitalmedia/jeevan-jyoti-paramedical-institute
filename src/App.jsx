import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Home'
import NavigationBar from './Components/NavigationBar'
import Footer from './Components/Footer'
import { Helmet } from 'react-helmet-async'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Helmet>
        <title>Jeevan Jyoti Paramedical Institute Prayagraj</title>
        <meta name="description" content="Jeevan Jyoti Paramedical Institute in Prayagraj offers diploma and certificate paramedical courses with practical training, experienced faculty, and career support." />
        <meta name="keywords" content="Jeevan Jyoti Paramedical Institute, Paramedical Institute in Prayagraj, Best Paramedical Institute in Prayagraj, Paramedical Courses in Prayagraj, Healthcare Courses in Prayagraj, Medical Training Institute in Prayagraj, Allied Health Sciences Institute" />
        <meta property="og:title" content="Jeevan Jyoti Paramedical Institute Prayagraj" />
        <meta property="og:description" content="Dr. Vandana Bansal is a leading IVF expert and gynaecologist, offering advanced fertility treatments and compassionate care to help couples achieve their dreams of parenthoodJeevan Jyoti Paramedical Institute in Prayagraj offers diploma and certificate paramedical courses with practical training, experienced faculty, and career support.." />
        <meta property="og:site_name" content="Jeevan Jyoti Paramedical Institute"></meta>
        <meta name="application-name" content="Jeevan Jyoti Paramedical Institute"></meta>
      </Helmet>
      {/* <div>hello</div> */}
      <NavigationBar />
      <Home />
      <Footer />
    </>
  )
}

export default App
