// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import TransitionWrapper from './components/TransitionWrapper';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
    const token = localStorage.getItem('token');
    return (
        <Router>
            <TransitionWrapper>
                <Routes>
                    <Route path="/" element={token ? <Navigate to="/dashboard" /> : <Login />} />
                    <Route path="/login" element={token ? <Navigate to="/dashboard" /> : <Login />} />
                    <Route path="/register" element={token ? <Navigate to="/dashboard" /> : <Register />} />
                    <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                </Routes>
            </TransitionWrapper>
            <ToastContainer />
        </Router>
    );
};

export default App;
