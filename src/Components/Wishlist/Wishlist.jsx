
import React from 'react';
import { toast } from 'react-toastify';
import { IoClose } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

const Wishlist = ({ wishlistItems, onMoveToCart, onRemoveFromWishlist }) => {
    return (
        <div className="w-10/12 mx-auto py-5">
            {wishlistItems.length > 0 ? (
                <div className="flex flex-col gap-5">
                    {wishlistItems.map((item, index) => (
                        <div key={index} className="bg-white flex md:flex-row md:gap-5 gap-0 lg:gap-10 lg:flex-row flex-col px-10 py-7 rounded-lg shadow-md overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-[30%] rounded-lg h-48 object-cover"
                            />
                            <div className="p-4 flex flex-col justify-between h-full">
                                <div>
                                    <h3 className="text-lg font-medium">{item.title}</h3>
                                    <p>{item.description}</p>
                                    <span className="text-lg font-semibold">${item.price ? item.price.toFixed(2) : '0.00'}</span>
                                </div>
                                <div className="mt-4 flex gap-4">
                                    <button
                                        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center justify-center"
                                        onClick={() => {
                                            onMoveToCart(item);
                                            toast.success(`${item.title} moved to cart!`);
                                        }}
                                    >
                                        <IoCartOutline className="mr-2" /> Move to Cart
                                    </button>
                                    <button
                                        className="p-2 bg-red-500 text-white rounded hover:bg-red-600 flex items-center justify-center"
                                        onClick={() => {
                                            onRemoveFromWishlist(item.id);
                                            toast.success(`${item.title} removed from wishlist!`);
                                        }}
                                    >
                                        <IoClose className="mr-2" /> Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">Your wishlist is currently empty.</p>
            )}
        </div>
    );
};

export default Wishlist;

