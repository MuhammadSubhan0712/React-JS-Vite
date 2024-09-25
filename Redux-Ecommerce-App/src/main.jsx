
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Config/store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home } from './Pages/Home.jsx'
import About from './Pages/about.jsx'
import Cart from './Pages/cart.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,

    children:[
    {
      path: "",
      element:<Home/>,
    },
    {
      path:"about",
      element:<About/>
    },
    {
      path:"cart",
      element: <Cart/>
    },
    {
      path:"*",
      element: <h2 className='p-2 mt-5 flex justify-center border-2 rounded'>Not found</h2>
    },
  ]
}
])


createRoot(document.getElementById('root')).render(
   <Provider store={store}>
    <RouterProvider router={router}>
     <App />
    </RouterProvider>
   </Provider>

)
