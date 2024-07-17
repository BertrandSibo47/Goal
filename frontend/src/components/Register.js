// src/components/Register.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';  // Add this import
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'; // Import the same CSS file for consistency

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const emailId = uuidv4();
    const usernameId = uuidv4();
    const passwordId = uuidv4();
    const confirmPasswordId = uuidv4();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Passwords do not match!');
            return;
        }
        const response = await fetch('http://localhost:5000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                username,
                password
            }),
        });
        const data = await response.json();
        if (response.ok) {
            toast.success(data.message || 'Registered successfully!');
        } else {
            toast.error(data.error || 'Failed to register!');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 font-poppins relative">
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="absolute bg-blue-300 rounded-full h-96 w-96 -top-20 -left-40 opacity-30"></div>
                <div className="absolute bg-green-300 rounded-full h-80 w-80 -bottom-20 -right-40 opacity-30"></div>
            </div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md z-10">
                <h1 className="text-2xl mb-6 text-center font-semibold">Register</h1>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-600" htmlFor={emailId}>Email</label>
                    <div className="flex items-center border border-gray-300 p-2 rounded">
                        <i className="fas fa-envelope mr-2 text-gray-500"></i>
                        <input
                            id={emailId}
                            type="email"
                            placeholder="Email"
                            className="w-full focus:outline-none smooth-text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-600" htmlFor={usernameId}>Username</label>
                    <div className="flex items-center border border-gray-300 p-2 rounded">
                        <i className="fas fa-user mr-2 text-gray-500"></i>
                        <input
                            id={usernameId}
                            type="text"
                            placeholder="Username"
                            className="w-full focus:outline-none smooth-text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-600" htmlFor={passwordId}>Password</label>
                    <div className="flex items-center border border-gray-300 p-2 rounded">
                        <i className="fas fa-lock mr-2 text-gray-500"></i>
                        <input
                            id={passwordId}
                            type="password"
                            placeholder="Password"
                            className="w-full focus:outline-none smooth-text"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-600" htmlFor={confirmPasswordId}>Confirm Password</label>
                    <div className="flex items-center border border-gray-300 p-2 rounded">
                        <i className="fas fa-lock mr-2 text-gray-500"></i>
                        <input
                            id={confirmPasswordId}
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full focus:outline-none smooth-text"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                </div>
                <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-full w-full font-semibold flex items-center justify-center">
                    <i className="fas fa-user-plus mr-2"></i> Register
                </button>
                <div className="text-center mt-4">
                    <span className="text-gray-600">Already have an account? </span>
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Login
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Register;
