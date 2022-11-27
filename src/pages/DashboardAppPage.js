import { Helmet } from 'react-helmet-async';
// @mui
import React, { useEffect } from 'react';

import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from '../store/users';

import {
  AppWidgetSummary,
} from '../sections/@dashboard/app';

// ------------ ----------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();
  const users = useSelector((state) => state.users);
  console.log('users data', users);
  // dispatch our thunk when component first mounts
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <>
      <Helmet>
        <title> Dashboard | APAutomation </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          APAutomation s 
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Pending Bills" total={110} icon={'ic:baseline-pending-actions'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="In Review Bills" total={25} color="info" icon={'ic:outline-rate-review'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Approved Bills" total={50} color="success" icon={'ic:baseline-price-check'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Rejected Bills" total={2} color="error" icon={'ic:outline-auto-delete'} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
