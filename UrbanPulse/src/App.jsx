import { react } from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ProfilePage from './pages/UserProfile'
import LoginPage from './pages/LoginPage'
import SearchPage from './pages/SearchPage'
import OrderSummaryPage from './pages/OrderSummaryPage'
import FileUploadForm from './components/UploadAvatar'
import InternalServerErrorPage from './pages/InternalServerErrorPage'
import TrackOrderPage from './pages/TrackOrderPage'
function App() {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<HomePage />
    },{
      path:"/products/:id",
      element:<ProductPage />
    },{
      path:"/error500",
      element:<InternalServerErrorPage />
    },{
      path:"/search",
      element:<SearchPage />
    },{
      path:"/profile",
      element:<ProfilePage />
    },{
      path:"/login",
      element:<LoginPage />
    },{
      path:"/order/:id",
      element:<OrderSummaryPage />
    },{
      path:"/profile/orders/:id",
      element:<TrackOrderPage />
    }
  ]);
  return (
    <div className=''>
      <RouterProvider router={router} />
    <div>
    
      
    
    </div>
      </div>
  )
}
export default App
