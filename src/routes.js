import { Navigate, useRoutes, Outlet } from 'react-router-dom';
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
import BillStatus from './pages/Employee/BillStatus';
import AcBillList from './pages/Accountant/AcBillList';
import ACBillStatus from './pages/Accountant/ACBillStatus';
import ProfileUpdateForm from './pages/Employee/ProfileUpdateForm';
// ----------------------------------------------------------------------

export default function Router(props) {
  const { isUserLoggedin, usertype } = props.auth

  const empRouteList = [{
    path: '/dashboard',
    element: (isUserLoggedin) ? <DashboardLayout /> : <Navigate to="/login" />,
    children: [
      { element: <Navigate to="/dashboard/app" />, index: true },
      { path: 'app', element: <DashboardAppPage /> },
      { path: 'updatebill', element: <BillStatus /> },
      { path: 'bill', element: <BillsList /> },
      { path: 'newuser', element: <BillForm /> },
      { path: 'userprofile', element: <ProfileUpdateForm /> },
    ],
  }]
  const acRouteList =
    [{
      path: '/accountant',
      element: isUserLoggedin ? <DashboardLayout /> : <Navigate to="/login" />,
      children: [
        { element: <Navigate to="/accountant/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'list', element: <AcBillList /> },
        { path: 'acbillstatus', element: <ACBillStatus /> },
      ],
    }]


  const routes = useRoutes([
    ...((usertype === 'accountant') ? acRouteList : empRouteList),
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
