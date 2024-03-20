import * as React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import Link from 'next/link';

export default function Login() {
  return (
    <Container component="main" maxWidth="xs">
      <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
        <Typography component="h1" variant="h5">
          ゲームログイン
        </Typography>
        <form style={{ width: '100%', marginTop: 3 }} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="メールアドレス"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="パスワード"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Link href="/">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ margin: '24px 0px 16px' }}
            >
              ログイン
            </Button>
          </Link>
        </form>
      </div>
    </Container>
  );
}
