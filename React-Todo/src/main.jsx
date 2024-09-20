import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from './Pages/Login.jsx'
import Registration from './Pages/Register.jsx'
import Todo from './Pages/Todo.jsx'



const router = createBrowserRouter([ 
    {
    path:"/",
    element:<Login/>,
    },
    {
      path: "register",
      element: <Registration/>,
    }, 
    {
      path:"todo",
      element:<Todo/>
    },
{
  path: "*",
  element: <h2 className='flex justify-center mt-10 p-5 text-3xl'>Not Found</h2>
}
])


createRoot(document.getElementById('root')).render(
<RouterProvider router={router}>
</RouterProvider>
)
