import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './components/Login.jsx'
import Registration from './components/Register.jsx'
import Todo from './components/Todo.jsx'


const router = createBrowserRouter[ 
  {
    path:"/",
    element:<Layout />,
  children:[
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
  ]
},
{
  path: "*",
  element: <h2>Not Found</h2>
}
]





createRoot(document.getElementById('root')).render(
<RouterProvider router={router}>
  <App />
</RouterProvider>
)
