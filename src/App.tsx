

import './App.css'

import Main from './router/mainRouter/Router'
import {RouterProvider} from "react-router-dom"

function App() {


  return (
    <>
        <RouterProvider router={Main}/>
    </>
  )
}

export default App
