import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { Container, Typography, Paper } from '@mui/material';
import Logout from '../components/Logout';
import dynamic from 'next/dynamic';

const InteractiveLogin = dynamic(() => import('../components/Login'), {
  ssr: false
});

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    return (
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', textAlign: 'center' }}>
          <Typography variant="h6" component="h1">
            Welcome, {session.user?.name}!
          </Typography>
          <Logout />
        </Paper>
      </Container>
    );
  } else {
    return (
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', textAlign: 'center' }}>
          <Typography variant="h5" component="h1">
            Hello World
          </Typography>
          <InteractiveLogin />
        </Paper>
      </Container>
    );
  }
}