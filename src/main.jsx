import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './error.jsx';
import './index.css'
import LocationsPage from "./components/locationsPage";
import About from "./components/about";
import Contacts from "./components/contacts";
import SingleLocationPage from './components/singleLocationPage';

const router = createBrowserRouter(
  [  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: 
      [
        {
          path: '/locations',
          element: <LocationsPage />,
        },
        { 
          path: '/about',
          element: <About />
      
        },
        {
          path: '/contacts',
          element: <Contacts />,
        },
        {
          path: '/locations/:id',
          element: <SingleLocationPage />
        }
      ]
  },
 ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
