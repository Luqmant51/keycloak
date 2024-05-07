"use client"

import { Button, Tooltip } from '@mui/material';
import { signIn } from 'next-auth/react';

export default function InteractiveLogin() {
    return (
        <Tooltip title="Login">
            <Button variant="contained" color="primary" sx={{
                padding: '10px 20px', 
                fontSize: '1rem',
                minWidth: '200px',
            }} onClick={() => signIn("keycloak")}>
                Log in
            </Button>
        </Tooltip>
    );
}