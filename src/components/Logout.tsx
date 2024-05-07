"use client"
import { signOut } from "next-auth/react";
import { Button } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
async function keyCloakLogout() {
    try {
        await fetch("/api/auth/logout", { method: "GET" })
    } catch (error) {
        console.log(error)
    }
}
export default function Logout() {
    const handleLogout = async () => {
        keyCloakLogout().then(() => signOut({ callbackUrl: "/" }));
    };

    return (
        <Tooltip title="Log out">
            <Button variant="contained" color="primary" sx={{
                padding: '10px 20px',
                fontSize: '1rem',
                minWidth: '200px',
            }} onClick={handleLogout}>
                Signout
            </Button>
        </Tooltip>)
}
