import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { RouterProvider } from 'react-router';
import { router } from './Router/Routes.jsx';
import FriendsProvider from './Context/FriendsContext.jsx';
import { ToastContainer } from 'react-toastify';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendsProvider>
      <RouterProvider router={router} />
      <ToastContainer
  position="top-center"
  autoClose={2500}
  hideProgressBar
  newestOnTop
  closeOnClick
  pauseOnHover
  draggable
  toastClassName={() =>
  "mb-3 bg-gradient-to-r from-indigo-500/80 to-purple-600/80 backdrop-blur-md text-white rounded-2xl px-5 py-3 shadow-2xl"
}
  bodyClassName={() => "text-sm tracking-wide mt-5"}
/>

    </FriendsProvider>
    
  </StrictMode>
)
