import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { RouterProvider } from 'react-router';
import { router } from './Router/Routes.jsx';
import FriendsProvider from './Context/FriendsContext.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendsProvider>
      <RouterProvider router={router} />,

    </FriendsProvider>
    
  </StrictMode>,
)
