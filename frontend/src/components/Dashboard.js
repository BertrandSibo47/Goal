// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import Header from './Header';

const Dashboard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            if (!token) return;

            const response = await fetch('http://localhost:5000/auth/user', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            if (response.ok) {
                setUser(data);
            } else {
                console.error(data.error);
            }
        };

        fetchUser();
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header />
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 font-poppins">
                <h1 className="text-4xl font-semibold mb-4">Welcome, {user.username}</h1>
            </div>
        </div>
    );
};

export default Dashboard;
