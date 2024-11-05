
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from '../CartContext/CartContext';
import './dash.css';
import Cart from '../Cart/Cart';
import Wishlist from '../Wishlist/Wishlist';

const Dashboard = () => {

    document.title = "Gadget || Dashboard";

    const navigate = useNavigate();
    const { cartCount, cartItems, clearCart, wishlistItems, addToCart, removeFromCart, removeFromWishlist } = useCart();
    const [currentView, setCurrentView] = useState('cart');

    const totalCost = cartItems.reduce((acc, item) => acc + (item.price || 0), 0).toFixed(2);

    const handlePurchase = () => {
        if (cartItems.length === 0) {
            toast.error("Your cart is empty. Please add items to your cart before purchasing.");
            return;
        }
        toast.success("Thank you for your purchase! Redirecting to checkout...");
        localStorage.setItem('purchasedItems', JSON.stringify(cartItems));
        clearCart();
        navigate('/checkout');
    };

    return (
        <div>
            <div className='bg-violet-500 w-[70%] h-[450px] rounded-lg mx-auto text-center'>
                <div className='text-center text-slate-50 p-10'>
                    <p className='font-bold md:text-3xl lg:text-4xl text-2xl'>Dashboard</p>
                    <p className='w-[70%] mx-auto py-5'>
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>
                <div className='flex items-center justify-center gap-5'>
                    <button
                        className={`btn btn-ghost px-10 py-3 border rounded-full border-gray-300 ${currentView === 'cart' ? 'bg-gray-200' : ''}`}
                        onClick={() => setCurrentView('cart')}
                    >
                        Cart ({cartCount})
                    </button>
                    <button
                        className={`btn btn-ghost px-10 py-3 border rounded-full border-gray-300 ${currentView === 'wishlist' ? 'bg-gray-200' : ''}`}
                        onClick={() => setCurrentView('wishlist')}
                    >
                        Wishlist ({wishlistItems.length})
                    </button>
                </div>
            </div>
            <div className='flex justify-between items-center w-8/12 mx-auto py-5'>
                <h2 className='font-semibold text-gray-500 text-3xl'>{currentView === 'cart' ? 'Cart' : 'Wishlist'}</h2>
                <div className='flex items-center justify-center gap-4'>
                    <p className='text-lg font-medium'>
                        {currentView === 'cart' ? `Total cost: $${totalCost}` : `Total items in wishlist: ${wishlistItems.length}`}
                    </p>
                </div>
            </div>

            {currentView === 'cart' ? (
                <Cart
                    cartItems={cartItems}
                    totalCost={totalCost}
                    onPurchase={handlePurchase}
                    onRemoveFromCart={removeFromCart}
                />
            ) : (
                <Wishlist
                    wishlistItems={wishlistItems}
                    onMoveToCart={addToCart}
                    onRemoveFromWishlist={removeFromWishlist}
                />
            )}
        </div>
    );
};

export default Dashboard;
