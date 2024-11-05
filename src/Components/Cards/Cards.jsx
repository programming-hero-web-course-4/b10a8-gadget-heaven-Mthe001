
// Cards.js
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card'; // Adjust the path based on your folder structure

const Cards = ({ category }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./product.json') // Ensure this path is correct
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error('Error fetching data:', err));
    }, []);

    // Filter products based on the selected category
    const filteredProducts = category === "All Products"
        ? products
        : products.filter(product => product.category === category);

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10'>
            {filteredProducts.map(product => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Cards;

