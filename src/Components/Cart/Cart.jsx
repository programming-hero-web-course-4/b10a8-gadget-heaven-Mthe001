
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { IoClose } from "react-icons/io5";

const Cart = ({ cartItems, totalCost, onPurchase, onRemoveFromCart }) => {
    const [sortOption, setSortOption] = useState('price');


    const sortedCartItems = () => {
        return cartItems.slice().sort((a, b) => {
            if (sortOption === 'price') {
                return b.price - a.price;
            } else if (sortOption === 'rating') {
                return b.rating - a.rating;
            }
            return 0;
        });
    };

    return (
        <div className="w-10/12 mx-auto py-5">
            {cartItems.length > 0 ? (
                <div className="flex flex-col gap-5">
                    {/* Sort Options */}
                    <div className="flex justify-between items-center mb-4">
                        <label htmlFor="sort" className="font-semibold">Sort by:</label>
                        <select
                            id="sort"
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className="p-2 border border-gray-300 rounded"
                        >
                            <option value="price">Price</option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>

                    {sortedCartItems().map((item) => (
                        <div key={item.id} className="bg-white flex flex-col lg:flex-row gap-5 px-10 py-7 rounded-lg shadow-md overflow-hidden">
                            <img src={item.image} alt={item.title} className="w-[30%] rounded-lg h-48 object-cover" />
                            <div className="p-4 flex flex-col justify-between h-full">
                                <div>
                                    <h3 className="text-lg font-medium">{item.title}</h3>
                                    <p>{item.description}</p>
                                    <span className="text-lg font-semibold">${item.price ? item.price.toFixed(2) : '0.00'}</span>
                                    <span className="text-sm text-gray-500">Rating: {item.rating}</span>
                                </div>
                                <button
                                    className="mt-4 p-2 bg-red-500 text-white rounded hover:bg-red-600 flex items-center justify-center"
                                    onClick={() => {
                                        onRemoveFromCart(item.id);
                                        toast.success(`${item.title} removed from cart!`);
                                    }}
                                >
                                    <IoClose className="mr-2" /> Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">Your cart is currently empty.</p>
            )}
            {cartItems.length > 0 && (
                <div className="flex justify-between py-5">
                    <h4 className="text-xl font-semibold">Total Cost:</h4>
                    <span className="text-xl font-medium">${totalCost}</span>
                    <div className='px-2 py-2 bg-gray-200 rounded-xl w-[60%] '>
                        <p>Confirm Order? This page will redirect to the Checkout page to purchase</p>
                    </div>
                </div>
            )}


            {cartItems.length > 0 && (
                <div className="flex justify-end py-5">
                    <button onClick={onPurchase} className="px-10 text-xl btn btn-success">Order</button>
                </div>
            )}
        </div>
    );
};

export default Cart;

