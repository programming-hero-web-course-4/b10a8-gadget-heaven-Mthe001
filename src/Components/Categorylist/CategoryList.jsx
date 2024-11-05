

import React from 'react';

export default function CategoryList({ onSelectCategory, selectedCategory }) {
    const categories = [
        "All Products",
        "Electronics",
        "Furniture",
        "Outdoor",
        // Add more categories as needed
    ];

    return (
        <div className='border border-red-500 relative top-[50px] w-8/12 mx-auto'>
            <nav className="flex flex-col gap-2 w-full max-w-xs p-4">
                <h2 className='text-gray-600 font-bold py-1 px-1'>Category</h2>
                {categories.map((item) => (
                    <button
                        key={item}
                        className={`btn btn-ghost w-full justify-start ${selectedCategory === item ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'} hover:bg-gray-200`}
                        onClick={() => onSelectCategory(item)} // Call the handler
                    >
                        {item}
                    </button>
                ))}
            </nav>
        </div>
    );
}

