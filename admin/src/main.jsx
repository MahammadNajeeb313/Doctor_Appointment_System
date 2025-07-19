import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import AdminContextProvider from './context/AdminContext.jsx'
import DoctorContextProvider from './context/DoctorContext.jsx'
import AppContextProvider from './context/AppContext.jsx'
import router from './router.jsx'
import './index.css'

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <AdminContextProvider>
      <DoctorContextProvider>
        <AppContextProvider>
          <RouterProvider router={router} />
        </AppContextProvider>
      </DoctorContextProvider>
    </AdminContextProvider>
  </StrictMode>
);
