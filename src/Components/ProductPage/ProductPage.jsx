// ProductPage.js
import React, { useState } from 'react';
import Cards from '../Cards/Cards'; // Adjust path as needed

const ProductPage = () => {
    const [category, setCategory] = useState("All Products");

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
    };

    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold text-center mb-4">Product Catalog</h1>

            {/* Category Filter Buttons */}
            <div className="flex justify-center mb-4 space-x-2">
                <button onClick={() => handleCategoryChange("All Products")} className="btn bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">All Products</button>
                <button onClick={() => handleCategoryChange("Electronics")} className="btn bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">Electronics</button>
                <button onClick={() => handleCategoryChange("Furniture")} className="btn bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">Furniture</button>
                <button onClick={() => handleCategoryChange("Outdoor")} className="btn bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">Outdoor</button>
            </div>

            <Cards category={category} />
        </div>
    );
};

export default ProductPage;
