import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorsList from './pages/Admin/DoctorsList';

const router = createBrowserRouter(
  [
    {
      path: "/*",
      element: <App />,
      children: [
        {
          index: true,
          element: <></>
        },
        {
          path: "admin-dashboard",
          element: <Dashboard />
        },
        {
          path: "appointments",
          element: <AllAppointments />
        },
        {
          path: "add-doctor",
          element: <AddDoctor />
        },
        {
          path: "doctor-list",
          element: <DoctorsList />
        }
      ]
    }
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }
  }
);

export default router; 