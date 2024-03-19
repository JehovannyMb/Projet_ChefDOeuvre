import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import App_lock from './App_lock.jsx';
import SignIn from './components/SignIn.jsx';
import Menu from './components/Menu.jsx';
import LogIn from './components/LogIn.jsx';
import Home from './components/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App_lock /> ,
    children: [
{
  path:"/",
  element: <App />
},
{
  path:"/SignIn",
  element: <SignIn />
},
{
  path:"/Menu",
  element: <Menu />
},
{
  path:"/LogIn",
  element: <LogIn />
},
{
  path:"/SignIn/Home",
  element: <Home />
}
,
{
  path:"/SignIn/Menu",
  element: <Menu />
}
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
