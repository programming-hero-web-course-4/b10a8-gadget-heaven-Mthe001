
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { GrLogin } from "react-icons/gr";
import { useCart } from '../CartContext/CartContext';
import { useState } from 'react';
import './navbar.css';

const Navbar = ({ currentPath }) => {


    const { cartCount, wishlistItems, addToWishlist, removeFromWishlist } = useCart();
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const sampleProduct = { id: 1, title: "Sample Product" };


    const handleWishlistToggle = () => {
        const isInWishlist = wishlistItems.some(item => item.id === sampleProduct.id);
        if (isInWishlist) {
            removeFromWishlist(sampleProduct.id);
        } else {
            addToWishlist(sampleProduct);
        }
        navigate('/dashboard');
    };

    const navbarBackgroundColor = currentPath === '/' ? 'bg-blue-200' : 'bg-base-100';

    return (
        <nav className={`${navbarBackgroundColor} shadow-md  py-4 px-6 w-full flex justify-between items-center relative `}>



            <div className="navbar-start">
                <NavLink className="text-2xl font-bold text-primary" to="/">Gadget</NavLink>
            </div>


            <div className="hidden lg:flex navbar-center">
                <ul className="flex gap-4">
                    <li><NavLink to="/" className="hover:text-primary">Home</NavLink></li>
                    <li><NavLink to="/statistics" className="hover:text-primary">Statistics</NavLink></li>
                    <li><NavLink to="/dashboard" className="hover:text-primary">Dashboard</NavLink></li>
                    <li><NavLink to="/checkout" className="hover:text-primary">Checkout</NavLink></li>
                </ul>
            </div>


            <div className="flex items-center gap-4 navbar-end">

                <NavLink to="/checkout" className="relative">
                    <IoCartOutline className="text-xl" />
                    {cartCount > 0 && (
                        <span className="badge badge-primary absolute -top-2 -right-2">{cartCount}</span>
                    )}
                </NavLink>


                <div className="relative">
                    <button onClick={handleWishlistToggle} className="flex items-center">
                        <CiHeart className={`text-xl ${wishlistItems.some(item => item.id === sampleProduct.id) ? "text-red-500" : "text-gray-400"}`} />
                        {wishlistItems.length > 0 && ( // Update to show the correct count
                            <span className="badge badge-secondary absolute -top-2 -right-2">{wishlistItems.length}</span>
                        )}
                    </button>
                </div>


                <NavLink to="/login">
                    <GrLogin className="text-xl" />
                </NavLink>


                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden btn btn-ghost text-xl"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12H8m-4 6h16" />
                    </svg>
                </button>
            </div>


            <div
                className={`absolute top-full left-0 w-full ${navbarBackgroundColor} z-20 shadow-lg p-4 lg:hidden transform transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
            >
                <ul className="flex flex-col space-y-2">
                    <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
                    <li><NavLink to="/statistics" onClick={() => setMenuOpen(false)}>Statistics</NavLink></li>
                    <li><NavLink to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</NavLink></li>
                    <li><NavLink to="/checkout" onClick={() => setMenuOpen(false)}>Checkout</NavLink></li>
                    <li><NavLink to="/login" onClick={() => setMenuOpen(false)}>Login</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;


