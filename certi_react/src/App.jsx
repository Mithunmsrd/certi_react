import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import Home from './assets/component/Home'
import Issue from './assets/component/Issue'
import Submit from './assets/component/Submit'
import Mainlayout from './assets/layout/Mainlayout'

function App() {
  //const [count, setCount] = useState(0)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<Mainlayout/>}>
      <Route index element={<Home/>}/>
      <Route path='#' element={<Issue/>}/>
      <Route path='*' element={<Submit/>}/>
   </Route>
      </>
  )
)
  return (
    
    <>
    
   <RouterProvider router={router}/>
    </>
  )
}

export default App
