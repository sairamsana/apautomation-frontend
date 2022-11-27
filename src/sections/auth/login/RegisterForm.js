import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import {
  Link, Stack, IconButton, InputAdornment, TextField, Checkbox, OutlinedInput, InputLabel,  MenuItem,  FormControl,  ListItemText,  Select  
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------
const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

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

export default function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleClick = () => {
    navigate('/dashboard', { replace: true });
  };

  return (
    <>
      <Stack spacing={3}>
        <TextField name="name" label="Full Name" />

        <TextField name="email" label="Email address" />

        <FormControl>
          <InputLabel id="demo-multiple-checkbox-label">Department</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Department" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          name="confirmpassword"
          label="Confirm Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Register
      </LoadingButton>
    </>
  );
}
