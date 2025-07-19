import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx'
import router from './router.jsx'
import './index.css'

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </StrictMode>
);
