import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Services from './Pages/Services.jsx'
import SingleStudent from './Pages/SingleStudent.jsx'
import { RouterProvider } from 'react-router-dom'



const router = createBrowserRouter([
  
{
path: "/",
element: <Layout/>,
children: [
  {
    path: "",
    element: <Home/>,
  },
  {
    path: "about",
    element: <About/>,
    children:[
    {
    path: "",
    element: <Person1/>,
    },
    {
      path: "person2",
      element: <Person2/>,
    },
    {
      path: "person3",
      element: <Person3/>,
    }
  ]
  },
  {
    path: "contact",
    element: <Contact/>,
  },
  {
    path: "services",
    element: <Services/>,
  },
  {
    path: "singleStudent/:id",
    element: <SingleStudent/>,
  },
  {
    path: "*",
    element: <h1>!!Not Found!!</h1>,
  }
]
}
])

createRoot(document.getElementById('root')).render(
<RouterProvider>
router = {router}
</RouterProvider>
)