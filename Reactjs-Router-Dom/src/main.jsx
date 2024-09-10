import { createRoot } from 'react-dom/client'
import "./index.css"
import Layout from './Layour.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Services from './Pages/Services.jsx'
import SinglePerson from './Pages/SinglePerson.jsx'
import { createBrowserRouter ,  RouterProvider } from 'react-router-dom'

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
    element: <About />,
    children: [
    {
    path: "",
    element: <h1>Person 1</h1>,
    },
    {
      path: "person2",
      element: <h2>Person 2</h2>,
    },
    {
      path: "person3",
      element: <h2>Person 3</h2>,
    },
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
    path: "singlePerson/:id",
    element: <SinglePerson/>,
  },
  {
    path: "*",
    element: <h1>!!Not Found!!</h1>,
  }
]
}
])


createRoot(document.getElementById('root')).render(
<RouterProvider
router={router}>
</RouterProvider>
)

