import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BillsList from './pages/Employee/BillsList';
import BillForm from './pages/Employee/BillForm';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Page404 from './pages/Page404';
import DashboardAppPage from './pages/DashboardAppPage';
import BillFormUpdate from './pages/Employee/BillFormUpdate';
import AcBillList from './pages/Accountant/AcBillList';
import ACBillStatus from './pages/Accountant/ACBillStatus';
// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'updatebill', element: <BillFormUpdate />},
        { path: 'bill', element: <BillsList /> },
        { path: 'newuser', element: <BillForm /> },
        { path: 'acbills', element: <AcBillList /> },
        { path: 'acbillstatus', element: <ACBillStatus /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'register',
      element: <RegisterPage />,
    },
    
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
