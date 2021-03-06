import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
const theme = createTheme();
const UserJoin = ({ onSubmit, onChange, form }) =>{
  return (
    <ThemeProvider theme={theme}>
    <Head>
    <title>사용자| 회원가입</title>
    </Head>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
          <form onSubmit={ onSubmit }>
          <Box component="form" noValidate onSubmit={ onSubmit } sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} >
                <TextField
                  autoComplete="given-name"
                  name="userid"
                  required
                  fullWidth
                  id="userid"
                  label="사용자 ID"
                  autoFocus
                  onChange={onChange}
                  value = {form.userid}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="이름"
                  name="name"
                  autoComplete="family-name"
                  onChange={onChange}
                  value = {form.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="이메일"
                  name="email"
                  autoComplete="email"
                  onChange={onChange}
                  value = {form.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  id="password"
                  onChange={onChange}
                  value = {form.password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="전화번호"
                  type="text"
                  id="phone"
                  onChange={onChange}
                  value = {form.phone}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="birth"
                label="생년월일"
                type="text"
                id="birth"
                onChange={onChange}
                value = {form.birth}
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="address"
              label="주소"
              type="text"
              id="address"
              onChange={onChange}
              value = {form.address}
            />
          </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              전 송
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/user/login" variant="body2">
                  로그인 화면으로 전환
                </Link>
              </Grid>
            </Grid>
          </Box>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default UserJoin