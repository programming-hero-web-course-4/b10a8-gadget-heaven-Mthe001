

import React from 'react';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 items-center flex flex-col">
                <img src="/image/Group.png" alt="Success" />
                <h2 className="text-xl font-bold mb-4">Congratulations!</h2>
                <p className="mb-4">Your purchase has been confirmed successfully!</p>
                <p className="text-lg font-semibold">Thanks For Shopping!</p>
                <button
                    className="mt-4 bg-purple-600 text-white rounded-lg px-4 py-2"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;

