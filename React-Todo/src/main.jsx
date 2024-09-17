import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './components/Login.jsx'
import Registration from './components/Register.jsx'
import ProtectedRoutes from './components/ProtectedRoutes.jsx'


const router = createBrowserRouter([ 
  {
    path:"/",
    element:<ProtectedRoutes component={<Layout/>}/>,
  },
  {
    path:"login",
    element:<Login/>,
    },
    {
      path: "register",
      element: <Registration/>,
    },
{
  path: "*",
  element: <h2 className='flex justify-center mt-10 p-5 text-3xl'>Not Found</h2>
},
]);


createRoot(document.getElementById('root')).render(
<RouterProvider router={router}>
</RouterProvider>
)
