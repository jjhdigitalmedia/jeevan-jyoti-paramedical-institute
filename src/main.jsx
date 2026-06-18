import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './Pages/About.jsx'
import Courses from './Pages/Courses.jsx'
import Contact from './Pages/Contact.jsx'
import DirectorsMessage from './Pages/DirectorsMessage.jsx'
import FeeStructure from './Pages/FeeStructure.jsx'
import Gallery from './Pages/Gallery.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <><App /></>,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'courses',
        element: <Courses />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'directors-message',
        element: <DirectorsMessage />,
      },
      {
        path: 'fees-structure',
        element: <FeeStructure />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      }
    ]

    }])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
