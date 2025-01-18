
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/shared/Navbar'
import Login from './components/Auth/Login'
import SignUp from './components/Auth/SignUp'
import Home from './components/Home'
import Jobs from './components/Jobs/Jobs'
import Browser from './components/Browser/Browser'
import Profile from './components/Profile/Profile'
import JobDescription from './components/JobDescription/JobDescription'
import Companies from './components/Adim/Companies'
import CompanyCreate from './components/Adim/CompanyCreate'



const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<SignUp/>
  },
  {
    path:"/jobs",
    element:<Jobs/>
  },
  {
    path:"/description/:id",
    element:<JobDescription/>
  },
  {
    path:"/browser",
    element:<Browser/>
  },
  {
    path:"/profile",
    element:<Profile/>
  },
  {
    path:"/admin/companies",
    element: <Companies/>
  },
  {
    path:"/admin/companies/create",
    element: <CompanyCreate/>
  },
  
])
function App() {


  return (
    <>
   <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
