// src/components/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import ForgotPasswordModal from './ForgotPasswordModal';

const Login = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const emailId = uuidv4();
    const passwordId = uuidv4();
    const rememberMeId = uuidv4();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            }),
        });
        const data = await response.json();
        if (response.ok) {
            toast.success(data.message || 'Logged in successfully!');
            localStorage.setItem('token', data.access_token);
            setTimeout(() => {
                navigate('/dashboard');
            }, 2000);
        } else {
            toast.error(data.error || 'Failed to log in!');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 font-poppins relative">
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="absolute bg-blue-300 rounded-full h-96 w-96 -top-20 -left-40 opacity-30"></div>
                <div className="absolute bg-green-300 rounded-full h-80 w-80 -bottom-20 -right-40 opacity-30"></div>
            </div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md z-10">
                <h1 className="text-2xl mb-6 text-center font-semibold">Login</h1>
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
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id={rememberMeId}
                            className="mr-2"
                        />
                        <label htmlFor={rememberMeId} className="text-gray-600">Remember Me</label>
                    </div>
                    <button
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                        className="text-blue-500 hover:underline text-sm"
                    >
                        Forgot Password?
                    </button>
                </div>
                <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-full w-full font-semibold flex items-center justify-center">
                    <i className="fas fa-sign-in-alt mr-2"></i> Login
                </button>
                <div className="text-center mt-4">
                    <span className="text-gray-600">Don't have an account? </span>
                    <Link to="/register" className="text-blue-500 hover:underline">
                        Register
                    </Link>
                </div>
            </form>
            <ForgotPasswordModal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default Login;
