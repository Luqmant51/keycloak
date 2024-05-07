import { Container, Typography, Paper } from '@mui/material';
import dynamic from 'next/dynamic';
import { authOptions } from './api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import ClientSession from '@/components/ClientSession';
import Logout from '../components/Logout';
import ServerSession from '@/components/ServerSession';

const Button = dynamic(() => import('@mui/material/Button'), { ssr: false });
const InteractiveLogin = dynamic(() => import('../components/Login'), { ssr: false });

async function Home() {
  const session = await getServerSession(authOptions); // Ensure you pass a mock or actual request and response object

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', textAlign: 'center' }}>
        {session ? (
          <>
            <Typography variant="h6" component="h1">
              Welcome, {session.user?.name}!
            </Typography>
            <Container style={{ padding: '5px', marginTop: '5px', textAlign: 'center' }} maxWidth="xs">
              <ServerSession />
            </Container>
            <Container style={{ padding: '5px', marginTop: '5px', textAlign: 'center' }} maxWidth="xs">
              <ClientSession />
            </Container>
            <Container style={{ padding: '5px', marginTop: '5px', textAlign: 'center' }} maxWidth="xs">
              <Logout />
            </Container>


          </>
        ) : (
          <>
            <Typography variant="h5" component="h1" sx={{
              padding: '10px 20px',
              fontSize: '3rem',
              minWidth: '200px',
            }}>
              Hello World
            </Typography>
            <InteractiveLogin />
          </>
        )}
      </Paper>
    </Container>
  );
}

export default Home;
