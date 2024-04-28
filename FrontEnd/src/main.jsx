import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App_lock from './App_lock.jsx';
import SignIn from './pages/SignIn.jsx';
import Menu from './pages/Menu.jsx';
import LogIn from './pages/LogIn.jsx';
import Home from './pages/Home.jsx';
import List from './pages/List.jsx';
import Course from './pages/Course.jsx';
import InsertCourse from './pages/InsertCourses.jsx';
import InsertCourses from './pages/InsertCourses.jsx';
import {Toaster} from 'react-hot-toast'
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
  path:"/Home",
  element: <Home />
},
{
  path:"/InsertCourses",
  element: <InsertCourses />
},
{
  path:"/List",
  element: <List />
}  ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster/>
    <div>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
