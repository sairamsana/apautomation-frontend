import React, { useEffect } from 'react';
// routes
import { useDispatch, useSelector } from 'react-redux';
import Router from './routes';
// import the useDispatch Redux hook
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/scroll-to-top';
import { StyledChart } from './components/chart';
import { fetchUsers } from './store/users';
// ----------------------------------------------------------------------

export default function App() {
  // const users = useSelector((state) => state.users);
  // console.log('users data', users);
  // // dispatch our thunk when component first mounts
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, [dispatch]);
  return (
    <ThemeProvider>
      <ScrollToTop />
      <StyledChart />
      <Router />
    </ThemeProvider>
  );
}
