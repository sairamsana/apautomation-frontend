import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// routes
import { useDispatch, useSelector } from 'react-redux';
import Router from './routes';
// import the useDispatch Redux hook
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/scroll-to-top';
import { StyledChart } from './components/chart';
import userSlice from './store/userSlice';
// ----------------------------------------------------------------------

export default function App() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  // useEffect(()=>{
  //   console.log("main ",user)
  //   if(user.isUserLoggedin === false){
  //     navigate('/login', { replace: true });
  //   }
  // },[])
  
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
      <Router auth={user}/>
    </ThemeProvider>
  );
}
