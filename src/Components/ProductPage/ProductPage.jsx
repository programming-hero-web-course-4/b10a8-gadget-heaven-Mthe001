
import React, { useState, useEffect } from 'react';
import Cards from '../Cards/Cards';
import Navbar from '../Navbar/Navbar';
import { useCart } from '../CartContext/CartContext';

const ProductPage = () => {
    const { addToCart } = useCart();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/path/to/your/products.json');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    return (
        <div>
            <Navbar />
            <div className="p-5">
                <h1 className="text-3xl font-bold text-center mb-4">Product Catalog</h1>
                {/* Render product cards and pass handleAddToCart */}
                <Cards products={products} onAddToCart={handleAddToCart} />
            </div>
        </div>
    );
};

export default ProductPage;
