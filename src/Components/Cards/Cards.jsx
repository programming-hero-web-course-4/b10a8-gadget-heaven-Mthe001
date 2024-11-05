
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = ({ category }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error('Error fetching data:', err));
    }, []);


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

