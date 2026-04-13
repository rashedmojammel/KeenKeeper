import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import MainLayout from './assets/Layout/MainLayout.jsx';
import Hompage from './assets/Pages/Hompage.jsx';
import Stats from './assets/Components/Stats/Stats.jsx';

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
        Component : Stats
      },


    ]

  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
