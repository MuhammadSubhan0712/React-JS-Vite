import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Pages/Login.jsx'
import Layout from './Layout.jsx'
import Register from './Pages/Register.jsx'
import Todo from './Pages/Todo_form.jsx'


const router = createBrowserRouter[ {

path: "/",
element: <Layout />,
children:[
  {
    path: "/",
    element:<Login />,
  },
  {
    path: "register",
    element:<Register />,
  },
  {
    path: "todo-form"
    element:<Todo />,
  },
]
} ]

createRoot(document.getElementById('root')).render(
<RouterProvider router={router} >
<App />
</RouterProvider>
  
)
