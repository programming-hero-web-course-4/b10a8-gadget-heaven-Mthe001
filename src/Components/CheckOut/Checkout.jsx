
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Modal from '../Modal/Modal';

const Checkout = () => {
    const [purchasedItems, setPurchasedItems] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('purchasedItems')) || [];
        setPurchasedItems(storedItems);
        const total = storedItems.reduce((acc, item) => acc + (item.price || 0), 0).toFixed(2);
        setTotalCost(total);
    }, []);

    const handleConfirmPurchase = () => {
        setIsModalOpen(true);
        localStorage.removeItem('purchasedItems');
        setPurchasedItems([]);
        setTotalCost(0);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="container mx-auto px-5 py-10">
            <h2 className="text-3xl font-semibold text-center mb-8">Checkout</h2>
            <div className="flex flex-col items-center">
                {purchasedItems.length > 0 ? (
                    <>
                        <h3 className="text-2xl font-bold mb-6">Items Purchased:</h3>
                        <div className="grid gap-5 w-full max-w-2xl">
                            {purchasedItems.map((item, index) => (
                                <div key={index} className="bg-white flex flex-col sm:flex-row p-5 rounded-lg shadow-md border border-gray-200 transition hover:shadow-lg">
                                    <img src={item.image} alt={item.title} className="w-full sm:w-32 h-32 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4" />
                                    <div className="flex flex-col justify-between">
                                        <div>
                                            <h4 className="text-lg font-medium">{item.title}</h4>
                                            <p className="text-gray-600 mt-1">{item.description}</p>
                                        </div>
                                        <div className="mt-3 text-lg font-semibold">${item.price ? item.price.toFixed(2) : '0.00'}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="w-full max-w-2xl flex justify-between items-center mt-8 p-5 bg-gray-100 rounded-lg">
                            <h4 className="text-xl font-semibold">Total Cost:</h4>
                            <span className="text-xl font-medium">${totalCost}</span>
                        </div>
                        <button onClick={handleConfirmPurchase} className="mt-6 px-10 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition">
                            Confirm Purchase
                        </button>
                    </>
                ) : (
                    <p className="text-gray-500 text-center">No items to purchased.</p>
                )}
            </div>
            <ToastContainer />
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default Checkout;
