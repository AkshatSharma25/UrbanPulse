import { react } from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import NavBar from './components/Navbar'
function App() {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<HomePage />
    },{
      path:"/products",
      element:<ProductPage />
    }
  ]);
  return (
    <div className='bg-[#17153B]'>
    <div>
    <NavBar />
    
      <RouterProvider router={router} />
    
    </div>
      </div>
  )
}
export default App
