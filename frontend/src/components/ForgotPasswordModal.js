// src/components/ForgotPasswordModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ForgotPasswordModal = ({ isOpen, onRequestClose }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add your forgot password logic here
        console.log('Email:', email);
        onRequestClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="modal"
            overlayClassName="overlay"
        >
            <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <button
                    onClick={onRequestClose}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                >
                    <i className="fas fa-times"></i>
                </button>
                <h2 className="text-2xl mb-4 text-center">Forgot Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-600">Email</label>
                        <div className="flex items-center border border-gray-300 p-2 rounded">
                            <i className="fas fa-envelope mr-2 text-gray-500"></i>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full focus:outline-none"
                            />
                        </div>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-full w-full flex items-center justify-center">
                        <i className="fas fa-paper-plane mr-2"></i> Submit
                    </button>
                </form>
            </div>
        </Modal>
    );
};

export default ForgotPasswordModal;
