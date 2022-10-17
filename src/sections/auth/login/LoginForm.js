import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import {
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  styled,
  alpha,
  Button,
} from '@mui/material';
// component
import Iconify from '../../../components/Iconify';
import { getDomain } from '../../../services/domain';
import { login } from '../../../services/auth';
import Cookies from 'js-cookie';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: alpha(theme.palette.background.COFFEEBEAN[0], 1),
    '&:hover': {
      backgroundColor: alpha(theme.palette.background.CIOCCOLATO[0], 0.8),
    },
  }));

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      const { email, password } = values;
      console.log({ values, REACT_APP_API_URL: process.env.REACT_APP_API_URL, domain: getDomain() });
      login(email, password).then((res) => {
        if (res?.data?.success) {
          const token = res.data.data.token;

          Cookies.set('userToken', token);
        }
      });
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Remember me"
          />
        </Stack>

        <ColorButton fullWidth size="large" type="submit" variant="contained" loading={Boolean(isSubmitting)}>
          Login
        </ColorButton>
      </Form>
    </FormikProvider>
  );
}
