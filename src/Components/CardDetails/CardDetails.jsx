

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from '../CartContext/CartContext'; // Importing context

const ProductDetail = () => {
    const { id } = useParams();
    const { cartItems, addToCart, wishlistItems, addToWishlist } = useCart();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch product data
        fetch('/product.json')
            .then(res => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .then(data => {
                const foundProduct = data.find(item => item.id === parseInt(id));
                setProduct(foundProduct);
                setLoading(false); // Set loading to false when data is fetched
            })
            .catch(err => {
                console.error('Error fetching product details:', err);
                setLoading(false); // Ensure loading is false even on error
            });
    }, [id]);

    const handleAddToCart = () => {
        if (!cartItems.some(item => item.id === product.id)) {
            addToCart(product); // Use context function
            toast.success(`${product.title} has been added to your cart!`);
        } else {
            toast.info(`${product.title} is already in your cart.`);
        }
    };

    const handleAddToWishlist = () => {
        if (!wishlistItems.some(item => item.id === product.id)) {
            addToWishlist(product); // Use context function
            toast.success(`${product.title} has been added to your wishlist!`);
        } else {
            toast.info(`${product.title} is already in your wishlist.`);
        }
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i} className="text-yellow-500">★</span>);
        }
        if (halfStar) {
            stars.push(<span key={fullStars} className="text-yellow-500">☆</span>);
        }
        while (stars.length < 5) {
            stars.push(<span key={stars.length} className="text-gray-300">★</span>);
        }

        return stars;
    };

    if (loading) return <div>Loading...</div>; // Loading state

    return (
        <div>
            <ToastContainer />

            <div className="w-[95%] md:w-[80%] lg:w-[80%] mx-auto bg-purple-600 rounded-xl h-[300px] md:h-[350px] lg:h-[450px]">
                <div className="text-center text-slate-50">
                    <p className="lg:text-6xl md:text-3xl text-xl font-bold py-10">Product Details</p>
                    <p className="mx-auto text-slate-100 lg:w-[45%] w-[95%] md:w-[45%]">
                        Explore the latest gadgets that will take your experience to the next level.
                    </p>
                </div>
            </div>

            <div className="md:max-w-2xl lg:max-w-4xl max-w-96 relative -top-[60px] mx-auto px-4 md:px-8 py-5 rounded-xl bg-gray-100 flex flex-col md:flex-row">
                <div className="flex-shrink-0 md:w-1/2 mb-5 md:mb-0">
                    <img src={product.image} alt={product.title} className="w-full h-[60%] object-cover rounded-lg shadow-md" />
                </div>
                <div className="md:w-1/2 md:pl-5">
                    <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
                    <p className="text-lg mt-2">Price: ${product.price}</p>
                    <p className="mt-2 text-gray-700">{product.description}</p>

                    <h3 className="font-semibold mt-4">Rating:</h3>
                    <div className="flex items-center mt-2">
                        {renderStars(product.rating)}
                    </div>

                    <h3 className="font-semibold mt-4">Specifications:</h3>
                    <ul className="list-disc ml-5 mt-2 space-y-1">
                        {product.Specification.map((spec, index) => (
                            <li key={index}>{spec}</li>
                        ))}
                    </ul>
                    <div className="mt-4 flex items-center space-x-4">
                        <button
                            onClick={handleAddToCart}
                            className="btn bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
                        >
                            {cartItems.some(item => item.id === product.id) ? "Added to Cart" : "Add to Cart"}
                        </button>
                        <button onClick={handleAddToWishlist} className="btn bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center">
                            <AiFillHeart className="mr-2" />
                            {wishlistItems.some(item => item.id === product.id) ? "Added to Wishlist" : "Add to Wishlist"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
