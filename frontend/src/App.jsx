
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/shared/Navbar'
import Login from './components/Auth/Login'
import SignUp from './components/Auth/SignUp'
import Home from './components/Home'
import Jobs from './components/Jobs/Jobs'
import Browser from './components/Browser/Browser'


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
    path:"/browser",
    element:<Browser/>
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
