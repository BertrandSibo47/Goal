// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md text-center">
                <h1 className="text-xl mb-4">Welcome to GoalTracking App</h1>
                <Link to="/login" className="bg-blue-500 text-white py-2 px-4 rounded m-2 inline-block">
                    Login
                </Link>
                <Link to="/register" className="bg-green-500 text-white py-2 px-4 rounded m-2 inline-block">
                    Register
                </Link>
            </div>
        </div>
    );
};

export default Home;
