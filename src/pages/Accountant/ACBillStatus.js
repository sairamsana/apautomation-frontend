import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import {
  Link, Stack, IconButton, Container,
  Typography,
  Card, Grid,Box, styled, CardContent, CardActions, CardMedia, Button, FormHelperText, Paper, Divider, InputAdornment, TextField, Checkbox, OutlinedInput, InputLabel, MenuItem, FormControl, ListItemText, Select
} from '@mui/material';

import { LoadingButton } from '@mui/lab';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import useResponsive from '../../hooks/useResponsive';

const names = [
  'IT',
  'Home Depo',
  'IKEA'
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export default function ACBillStatus() {
  const navigate = useNavigate();

  const mdUp = useResponsive('up', 'md');
  const [scroll, setScroll] = useState('paper');
  const [datevalue, setDateValue] = useState();

  const [open, setOpen] = useState(false);
  const [commentOpen, setCommentsOpen] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCommentClickOpen = () => {
    setCommentsOpen(true);
  };

  const handleCommentClose = () => {
    setCommentsOpen(false);
  };

  const handleClick = () => {
    navigate('/dashboard', { replace: true });
  };
  return (
    <>

      <StyledRoot>
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              Bill Status
            </Typography>

          </Stack>
          <Card>
            <Grid container spacing={2} sx={{ p: 1 }}>
              <Grid item xs={12} md={6}>
                <Item>
                  <Paper>
                    <Card sx={{ maxWidth: 345 }}>

                      <CardContent>
                        <Typography gutterBottom variant="body1" component="div">
                          Bill Status : <Typography gutterBottom variant="subtitle1" component="span">Review</Typography>
                        </Typography>
                        <Typography gutterBottom variant="body1" component="div">
                          Bill Name : <Typography gutterBottom variant="subtitle1" component="span">Walmart Bill</Typography>
                        </Typography>
                        <Typography gutterBottom variant="body1" component="div">
                          Department : <Typography gutterBottom variant="subtitle1" component="span">Housing</Typography>
                        </Typography>
                        <Typography gutterBottom variant="body1" component="div">
                          Retailer : <Typography gutterBottom variant="subtitle1" component="span">IKEA</Typography>
                        </Typography>
                        <Typography gutterBottom variant="body1" component="div">
                          Date of Purchase : <Typography gutterBottom variant="subtitle1" component="span">11/15/2022</Typography>
                        </Typography>
                        <Typography gutterBottom variant="body1" component="div">
                          Amount : <Typography gutterBottom variant="subtitle1" component="span">$ 1000</Typography>
                        </Typography>
                        <Typography gutterBottom variant="body1" component="div">
                          Tax : <Typography gutterBottom variant="subtitle1" component="span">$ 113</Typography>
                        </Typography>
                        <Typography gutterBottom variant="body1" component="div">
                          Total Amount : <Typography gutterBottom variant="subtitle1" component="span">$ 1113</Typography>
                        </Typography>
                      </CardContent>
                    </Card>
                  </Paper>

                </Item>
              </Grid>

              {/* {mdUp && (<Divider orientation="vertical" flexItem />)} */}

              <Grid item xs={12} md={5}>



                <Stack >
                  <Card sx={{ maxWidth: 345, maxHeight: 300, m: 2 }}>
                    <CardMedia
                      component="img"
                      image="/assets/images/2.png"
                      alt="Bill"
                    />
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={12} >
                <Item>
                  {/* <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                    <Checkbox name="remember" label="Remember me" />
                    <Link variant="subtitle2" underline="hover">
                      Forgot password?
                    </Link>
                  </Stack> */}
                  <Stack direction={mdUp ? "row" : "column"} alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                    <Button variant="contained" size="large" onClick={handleClickOpen} component="label" sx={{ maxWidth: 150, mt: 2 }}>
                      View Bill
                    </Button>
                    <Button fullWidth size="large" color="error" variant="contained" sx={{ maxWidth: 150, mt: 2 }} onClick={handleCommentClickOpen}>
                      Reject
                    </Button>
                    <Button fullWidth size="large" color="success" variant="contained" sx={{ maxWidth: 150, mt: 2 }} onClick={handleCommentClickOpen}>
                      Approve
                    </Button>
                  </Stack>
                </Item>
              </Grid>
            </Grid>
          </Card>
        </Container>
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          disableEscapeKeyDown="true"
        >
          <DialogTitle id="alert-dialog-title">
            {"Bill Picture"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Card sx={{ m: 2 }}>
                <CardMedia
                  component="img"
                  image="/assets/images/2.jpg"
                  alt="Bill"
                />
              </Card>

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>


        <Dialog
          open={commentOpen}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          disableEscapeKeyDown="true"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent minHeight="325">
            <DialogContentText id="alert-dialog-description">

              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  multiline
                  maxRows={4}
                  value={value}
                  onChange={handleChange}
                />
              </Box>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCommentClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </StyledRoot>
    </>
  );
}
