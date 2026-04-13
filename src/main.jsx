import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import MainLayout from './assets/Layout/MainLayout.jsx';
import Hompage from './assets/Pages/Hompage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { 
        index : true,
        element : <Hompage></Hompage>

      },
      {
        path : "/home",
        element : <Hompage></Hompage>
      },
      {
        path : "/timeline",
        element : <div>timeline</div>
      },
      {
        path : "/stats",
        element : <div>stats</div>
      },


    ]

  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
