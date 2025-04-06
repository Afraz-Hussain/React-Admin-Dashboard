import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import {BrowserRouter,Route,Router,Link, createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Home from './Components/Home/Home'
import Users from './Components/Users/Users'
import Login from './Components/Login/Login'
function App(){

const Layout=()=>{
  return(
    <div>
  
    <Navbar/>
    <div className="content">
    <Sidebar/>
    <Outlet/>
    </div>
    </div>
  )
}



const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/users",
        element:<Users/>
      }
     
    
    ]},
    // to make secure our components 
    {
      path:"/login",
      element:< Login/>
    }
  
])

  return(
<RouterProvider router={router}></RouterProvider>
  )
}

export default App