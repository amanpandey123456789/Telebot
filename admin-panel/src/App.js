import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Container,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    CircularProgress,
    Snackbar,
    Alert,
} from '@mui/material';

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('http://localhost:3000/admin/users');
            setUsers(response.data);
        } catch (error) {
            setError('Failed to fetch users. Please try again later.');
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    const blockUser  = async (userId) => {
        try {
            await axios.post(`http://localhost:3000/admin/block/${userId}`);
            setSuccessMessage(`User  ${userId} has been blocked.`);
            fetchUsers(); // Refresh the user list
        } catch (error) {
            console.error('Error blocking user:', error);
        }
    };

    const deleteUser  = async (userId) => {
        try {
            await axios.delete(`http://localhost:3000/admin/delete/${userId}`);
            setSuccessMessage(`User  ${userId} has been deleted.`);
            fetchUsers(); // Refresh the user list
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom>
                Admin Panel
            </Typography>
            <Typography variant="h6" gutterBottom>
                User Management
            </Typography>
            {loading && <CircularProgress />}
            {error && <Alert severity="error">{error}</Alert>}
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>User ID</TableCell>
                            <TableCell>Blocked</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.userId}>
                                <TableCell>{user.userId}</TableCell>
                                <TableCell>{user.blocked ? 'Yes' : 'No'}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => blockUser (user.userId)}
                                        disabled={user.blocked}
                                    >
                                        Block
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => deleteUser (user.userId)}
                                        style={{ marginLeft: '10px' }}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Snackbar
                open={!!successMessage}
                autoHideDuration={6000}
                onClose={() => setSuccessMessage(null)}
            >
                <Alert onClose={() => setSuccessMessage(null)} severity="success">
                    {successMessage}
                </Alert>
            </Snackbar>
        </Container>
    );
}

export default App;